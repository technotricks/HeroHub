import React from 'react';
import {ICharacterDetail} from './CharacterList.types';
import {useCharacterDetailQuery} from '@/hooks';
import {
  ScrollContainer,
  Centered,
  Container,
  ItemText,
  ProfileImage,
} from '@/components/atom';
import {SafeScreen} from '@/components/template';
import {Button} from 'react-native';
import {saveCharacter, removeCharacter} from '@/store/favourite.slice';
import {isFavCharacter} from '@/store/favourite.reselect';

import {useDispatch} from 'react-redux';
import {ProfileView} from '@/components/molecules';

const CharacterDetail: React.FunctionComponent<
  ICharacterDetail.IProps
> = props => {
  const {route} = props;
  const id = route?.params?.id;

  const {data, error, loading} = useCharacterDetailQuery(id);
  const isFav = isFavCharacter(id ?? -1);

  const dispatch = useDispatch();

  return (
    <SafeScreen>
      <ScrollContainer>
        <ProfileView item={data?.character} />
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
      </ScrollContainer>
    </SafeScreen>
  );
};

export default CharacterDetail;
