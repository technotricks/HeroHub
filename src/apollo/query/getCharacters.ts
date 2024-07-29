import {DocumentNode, gql} from '@apollo/client';

const GET_CHARACTERS_QUERY_STRING = `
  query Characters($page: Int) {
    characters(page: $page) {
      results {
        id
        image
        name
        status
        gender
        type
      }
      info {
        count
        next
        pages
        prev
      }
    }
  }
`;

export const GET_CHARACTERS_QUERY: DocumentNode = gql(
  GET_CHARACTERS_QUERY_STRING,
);
