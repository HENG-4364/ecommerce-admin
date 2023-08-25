import { gql } from "@apollo/client";

export const MUTATION_USER_LOGIN = gql`
  mutation userLogin($username: String!, $password: String!) {
    userLogin(username: $username, password: $password)
  }
`;
