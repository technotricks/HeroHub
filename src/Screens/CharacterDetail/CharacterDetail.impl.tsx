import React from 'react';
import {ICharacterDetail} from './CharacterList.types';
import {useCharacterDetailQuery} from '@/hooks';
import {Container, ItemText} from '@/components/atom';
import {SafeScreen} from '@/components/template';
import {Button} from 'react-native';
import {useProtfolioReviewActions} from '@/store/redux/favourite.actions';
import {saveCharacter, removeCharacter} from '@/store/favourite.slice';
import {
  getFavouriteCharacters,
  getFavCharacter,
} from '@/store/favourite.reselect';

import {useDispatch} from 'react-redux';

const CharacterDetail: React.FunctionComponent<
  ICharacterDetail.IProps
> = props => {
  const {route} = props;
  const id = route?.params?.id;

  const {data, error, loading} = useCharacterDetailQuery(id);
  const characters = getFavouriteCharacters();
  const isFav = getFavCharacter(id ?? -1);

  const dispatch = useDispatch();

  return (
    <SafeScreen>
      <Container>
        <ItemText>ID: {id}</ItemText>
        <ItemText>Is Fav: {JSON.stringify(isFav)}</ItemText>
        <ItemText>Data: {JSON.stringify(data?.character)}</ItemText>
        <Button
          title="Add to Fav"
          onPress={() => {
            dispatch(
              saveCharacter({
                gender: data?.character?.gender ?? '',
                id: data?.character?.id ?? -1,
                image: data?.character?.image ?? '',
                name: data?.character?.name ?? '',
                status: data?.character?.status ?? '',
                type: data?.character?.type ?? '',
              }),
            );
          }}
        />
        <Button
          title="Remove to Fav"
          onPress={() => {
            dispatch(removeCharacter(data?.character?.id ?? -1));
          }}
        />
      </Container>
    </SafeScreen>
  );
};

export default CharacterDetail;
