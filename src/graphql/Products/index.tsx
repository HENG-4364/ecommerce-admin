import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query products($id: Int) {
    products(category_id: $id) {
      id
      product_name
      summary
      description
      image
      price
      category {
        id
        category_name
      }
    }
  }
`;
export const QUERY_PRODUCTS_DETAIL = gql`
  query product($productId: Int!) {
    product(id: $productId) {
      id
      product_name
      summary
      description
      image
      price
      category {
        id
        category_name
      }
    }   
  }
`;
export const MUTATION_CREATE_PRODUCT = gql`
  mutation createProduct($input: ProductInput) {
    createProduct(input: $input)
  }
`;
export const MUTATION_UPDATE_PRODUCT = gql`
  mutation updateProduct($updateProductId: Int!, $input: ProductInput) {
    updateProduct(id: $updateProductId, input: $input)
  }
`;
