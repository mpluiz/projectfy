// eslint-disable-next-line import/prefer-default-export
export const getUsers = `
query GET_USERS($search: String, $first: Int, $after: String) {
  users(search: $search, first: $first, after: $after) {
    pageInfo {
      endCursor
      startCursor
      hasNextPage
    }
    nodes {
     id
     username
    }
  }
}`;
