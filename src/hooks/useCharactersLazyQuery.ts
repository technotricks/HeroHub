import {QueryHookOptions, QueryResult, Variables} from '@/types/appllo';
import {useLazyQuery, DocumentNode} from '@apollo/client';
import {useEffect, useState} from 'react';
import {GET_CHARACTERS_QUERY} from '@/apollo/query';
import {FetchCharacters, GetCharactersData} from '@/types/character';
// Create a custom hook to fetch characters data lazily
function useLazyGetCharacters(): [
  FetchCharacters,
  QueryResult<GetCharactersData | undefined>,
] {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const [data, setData] = useState<GetCharactersData>();
  // Use useLazyQuery to fetch characters data
  const [
    fetchCharacters,
    {called, loading: queryLoading, error: queryError, data: queryData},
  ] = useLazyQuery<GetCharactersData>(GET_CHARACTERS_QUERY);

  useEffect(() => {
    setLoading(queryLoading);
    setError(queryError);
    if (queryData?.characters) {
      setData(queryData);
    }
  }, [queryLoading, queryError, queryData]);

  // Function to fetch characters data with the specified page
  const fetchCharactersData: FetchCharacters = page => {
    fetchCharacters({variables: {page}});
  };

  return [
    fetchCharactersData,
    {loading: called ? loading : false, error, data},
  ];
}

export default useLazyGetCharacters;
