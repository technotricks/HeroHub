import React from 'react';
import {IFavourite} from './Favourite.types';
import {useCharacterDetailQuery} from '@/hooks';
import {Container, ItemText} from '@/components/atom';
import {LoadMoreList, SafeScreen} from '@/components/template';
import {Button} from 'react-native';
import {useProtfolioReviewActions} from '@/store/redux/favourite.actions';
import {saveCharacter} from '@/store/favourite.slice';
import {getFavouriteCharacters} from '@/store/favourite.reselect';

const Favourite: React.FunctionComponent<IFavourite.IProps> = props => {
  const {navigation} = props;
  const characters = getFavouriteCharacters();

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
