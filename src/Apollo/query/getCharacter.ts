import {gql} from '@apollo/client';

export const GET_CHARACTER = gql`
  query Character($characterId: ID!) {
    character(id: $characterId) {
      id
      image
      name
      gender
      status
      origin {
        name
      }
      location {
        name
      }
      episode {
        episode
        name
      }
    }
  }
`;
