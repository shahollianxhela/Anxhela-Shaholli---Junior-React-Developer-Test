import { gql } from "@apollo/client";

export const PRODUCTS = gql`
  query Category($type: String!) {
    category(input: { title: $type }) {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  }
`;

export const CATEGORY_NAME = gql`
  {
    categories {
      name
    }
  }
`;
