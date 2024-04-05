import React, {useEffect, useState} from 'react';
import {ICharacterList} from './CharacterList.types';
import {useLazyGetCharacters} from '@/hooks';
import {Character} from '@/types/character';
import {Container} from '@/components/atom';
import {SafeScreen, LoadMoreList} from '@/components/template';

const CharacterList: React.FunctionComponent<ICharacterList.IProps> = props => {
  const {navigation} = props;
  const [fetchCharactersData, {data, error, loading}] = useLazyGetCharacters();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1); // State to track current page

  useEffect(() => {
    fetchCharactersData(page); // Fetch characters data for page 1 when the component mounts
  }, [page]);

  useEffect(() => {
    const characters = data?.characters?.results;
    if (characters ?? 0 > 0) {
      setCharacters(prevCharacters => [
        ...prevCharacters,
        ...(characters ?? []),
      ]);
    }
  }, [data]);

  const handleLoadMore = () => {
    if (!loading) {
      setPage(prevPage => prevPage + 1); // Increment page to fetch next page of data
    }
  };

  return (
    <SafeScreen>
      <Container>
        <LoadMoreList
          isLoading={loading}
          items={characters}
          handleLoadMore={handleLoadMore}
          onPress={item => {
            navigation.push('CharacterDetail', {id: item.id});
          }}
        />
      </Container>
    </SafeScreen>
  );
};

export default CharacterList;
