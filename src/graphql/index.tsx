import { gql } from '@apollo/client';

export const MUTATION_CREATE_PRODUCT_CATEGORY = gql`
  mutation createProductCategory($input: ProductCategoryInput) {
    createProductCategory(input: $input)
  }
`;
export const QUERY_PRODUCTS_CATEGORIES = gql`
  query productCategories {
    productCategories {
      id
      category_name
    }
  }
`;
export const QUERY_PRODUCTS_CATEGORY_DETAIL = gql`
  query ProductCategory($id: Int!) {
    productCategory(id: $id) {
      id
      category_name
      products {
        id
        product_name
        summary
        description
        image
        price
      }
    }
  }
`;
export const MUTATION_UPDATE_PRODUCT_CATEGORY = gql`
  mutation updateProductCategory(
    $idforcategory: Int!
    $input: ProductCategoryInput
  ) {
    updateProductCategory(id: $idforcategory, input: $input)
  }
`;
