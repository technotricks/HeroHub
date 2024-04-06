import React from 'react';
import {IFavourite} from './Favourite.types';
import {Container} from '@/components/atom';
import {LoadMoreList, SafeScreen} from '@/components/template';
import {getFavouriteCharacters} from '@/store/favourite.reselect';
import {NoItemFoundView} from '@/components/molecules';

const Favourite: React.FunctionComponent<IFavourite.IProps> = props => {
  const {navigation} = props;
  const characters = getFavouriteCharacters();

  if (characters.length == 0) {
    return <NoItemFoundView />;
  }
  return (
    <SafeScreen>
      <Container>
        <LoadMoreList
          isLoading={false}
          items={characters}
          onPress={item => {
            navigation.push('CharacterDetail', {id: item.id});
          }}
        />
      </Container>
    </SafeScreen>
  );
};

export default Favourite;
