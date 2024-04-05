import {QueryResult, Variables} from '@/types/apollo';
import {useLazyQuery, useQuery} from '@apollo/client';
import {useEffect, useState} from 'react';
import {GET_CHARACTER_QUERY} from '@/apollo/query';
import {FetchCharacter, GetCharacterData} from '@/types/character';
// Create a custom hook to fetch character data
function useCharacterDetailQuery(
  id?: number,
): QueryResult<GetCharacterData | undefined> {
  const {loading, error, data} = useQuery<GetCharacterData>(
    GET_CHARACTER_QUERY,
    {
      variables: {
        characterId: id ?? 0,
      },
    },
  );

  return {loading, error, data};
}

export default useCharacterDetailQuery;
