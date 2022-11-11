import {
  booleanFilterFn,
  DataGrid,
  numberFilterFn,
  stringFilterFn,
} from 'mantine-data-grid';
import React, { useMemo } from 'react';
import { useFragment } from 'react-relay';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { graphql } from 'relay-runtime';
import { itemDrawerState, tableGlobalFilter } from '../../state/atoms';
import { ItemsTableItemConnectionFragment$key } from './__generated__/ItemsTableItemConnectionFragment.graphql';
import useItemTableStyles from './ItemsTable.styles';

const itemConnectionFragment = graphql`
  fragment ItemsTableItemConnectionFragment on Query {
    itemConnection(first: null)
      @connection(key: "ItemsTableItemConnectionFragment_itemConnection") {
      totalCount
      edges {
        node {
          id
          name
          barcode
          cost
          isActive
          sku
          ...InformationTabFragment
        }
      }
    }
  }
`;

interface ItemsTableProps {
  height: number;
  dataRef: ItemsTableItemConnectionFragment$key;
}

function ItemsTable({ height, dataRef }: ItemsTableProps) {
  const data = useFragment<ItemsTableItemConnectionFragment$key>(
    itemConnectionFragment,
    dataRef
  );
  const dataParsed = useMemo(
    () => data.itemConnection.edges.map((el) => el.node),
    [data.itemConnection]
  );

  const globalFilterValue = useRecoilValue(tableGlobalFilter);
  const setDrawerState = useSetRecoilState(itemDrawerState);

  const { classes } = useItemTableStyles();

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        filterFn: stringFilterFn,
      },
      {
        accessorKey: 'name',
        header: 'Name',
        filterFn: stringFilterFn,
      },
      {
        accessorKey: 'barcode',
        header: 'Barcode',
        filterFn: stringFilterFn,
      },
      {
        accessorKey: 'sku',
        header: 'SKU',
        filterFn: stringFilterFn,
      },
      {
        accessorKey: 'cost',
        header: 'Cost',
        filterFn: numberFilterFn,
      },
      {
        accessorKey: 'isActive',
        header: 'Is Active',
        filterFn: booleanFilterFn,
      },
    ],
    []
  );

  return (
    <DataGrid
      data={dataParsed}
      columns={columns}
      height={height}
      classNames={classes}
      withPagination
      withSorting
      withFixedHeader
      highlightOnHover
      withColumnFilters
      withGlobalFilter
      initialState={{
        pagination: {
          pageIndex: 0,
          pageSize: 25,
        },
      }}
      state={{
        globalFilter: globalFilterValue,
      }}
      onRow={(row) => ({
        onClick: () => {
          setDrawerState({
            isOpen: true,
            title: row.getValue('name'),
            node: row.original,
          });
        },
      })}
    />
  );
}

export default ItemsTable;
