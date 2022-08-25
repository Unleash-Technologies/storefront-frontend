/**
 * @generated SignedSource<<7e1d189d2d663fec24e53a86f9f0abb4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemsLoader_ItemsPageQuery$variables = {};
export type ItemsLoader_ItemsPageQuery$data = {
  readonly itemConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"FormUpdateItem_ItemFragment" | "ItemDrawerContent_SingleItemFragment">;
      };
    }>;
    readonly " $fragmentSpreads": FragmentRefs<"HeaderItemsTableDisplay_ItemCountFragment" | "ItemsTableContentDisplay_AllItemFragment">;
  };
};
export type ItemsLoader_ItemsPageQuery = {
  response: ItemsLoader_ItemsPageQuery$data;
  variables: ItemsLoader_ItemsPageQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemsLoader_ItemsPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ItemTypeConnection",
        "kind": "LinkedField",
        "name": "itemConnection",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ItemsTableContentDisplay_AllItemFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "HeaderItemsTableDisplay_ItemCountFragment"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ItemTypeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ItemType",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "ItemDrawerContent_SingleItemFragment"
                  },
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "FormUpdateItem_ItemFragment"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ItemsLoader_ItemsPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ItemTypeConnection",
        "kind": "LinkedField",
        "name": "itemConnection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ItemTypeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ItemType",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "barcode",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "sku",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cost",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "markup",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "price",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isService",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isActive",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "versionId",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "creationDate",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "currentStock",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalCount",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "84e881168e2ecdd3820fb7631147fff5",
    "id": null,
    "metadata": {},
    "name": "ItemsLoader_ItemsPageQuery",
    "operationKind": "query",
    "text": "query ItemsLoader_ItemsPageQuery {\n  itemConnection {\n    ...ItemsTableContentDisplay_AllItemFragment\n    ...HeaderItemsTableDisplay_ItemCountFragment\n    edges {\n      node {\n        ...ItemDrawerContent_SingleItemFragment\n        ...FormUpdateItem_ItemFragment\n      }\n    }\n  }\n}\n\nfragment FormUpdateItem_ItemFragment on ItemType {\n  id\n  name\n  barcode\n  cost\n  markup\n  price\n}\n\nfragment GeneralInformationTab_itemFragment on ItemType {\n  id\n  sku\n  name\n  cost\n  price\n  markup\n  barcode\n  isActive\n  isService\n  versionId\n  creationDate\n  currentStock\n}\n\nfragment HeaderItemsTableDisplay_ItemCountFragment on ItemTypeConnection {\n  totalCount\n}\n\nfragment ItemDrawerContent_SingleItemFragment on ItemType {\n  ...GeneralInformationTab_itemFragment\n}\n\nfragment ItemsTableContentDisplay_AllItemFragment on ItemTypeConnection {\n  edges {\n    node {\n      id\n      name\n      barcode\n      sku\n      ...RowTbodyItems_ItemsRowFragment\n    }\n  }\n}\n\nfragment RowTbodyItems_ItemsRowFragment on ItemType {\n  id\n  name\n  sku\n  cost\n  markup\n  price\n  isService\n  isActive\n}\n"
  }
};

(node as any).hash = "8bda7e5f6cf3cd845becc8109e0510ad";

export default node;
