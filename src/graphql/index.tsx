import { gql } from "@apollo/client";

export const MUTATION_CREATE_PRODUCT_CATEGORY = gql`
mutation createProductCategory($input: ProductCategoryInput) {
  createProductCategory(input: $input)
}
`
export const QUERY_PRODUCTS_CATEGORIES = gql`
  query productCategories {
    productCategories {
      id
      category_name
    }
  }
`;
export const MUTATION_UPDATE_PRODUCT_CATEGORY = gql`
 mutation updateProductCategory($updateProductCategoryId: Int!, $input: ProductCategoryInput) {
  updateProductCategory(id: $updateProductCategoryId, input: $input)
}
`;