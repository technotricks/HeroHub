import {gql} from '@apollo/client';

export const GET_CHARACTERS = gql`
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
