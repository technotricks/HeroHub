import {DocumentNode, gql} from '@apollo/client';

const GET_CHARACTER_QUERY_STRING = `
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

export const GET_CHARACTER_QUERY: DocumentNode = gql(
  GET_CHARACTER_QUERY_STRING,
);
