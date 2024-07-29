import React from 'react';
import {ICharacterDetail} from './CharacterList.types';
import {useCharacterDetailQuery} from '@/hooks';
import {ScrollContainer, HText} from '@/components/atom';
import {SafeScreen} from '@/components/template';
import {saveCharacter, removeCharacter} from '@/store/favourite.slice';
import {isFavCharacter} from '@/store/favourite.reselect';

import {useDispatch} from 'react-redux';
import {
  ProfileView,
  PropertiesView,
  EpisodesView,
  LoaderView,
  ErrorView,
} from '@/components/molecules';
import {ButtonContainer} from '@/components/atom/button';

const CharacterDetail: React.FunctionComponent<
  ICharacterDetail.IProps
> = props => {
  const {route} = props;
  const id = route?.params?.id;

  const {data, error, loading} = useCharacterDetailQuery(id);
  const isFav = isFavCharacter(id ?? -1);

  const dispatch = useDispatch();

  const buttonColor = isFav ? '#FE5E33' : '#2CB9B0';
  const buttonText = isFav ? 'Remove from Faourite' : 'Add to Faourite';

  console.log('PARAM', id);
  console.log('PARAM-isFav', isFav);

  const onFavClick = () => {
    if (isFav) {
      dispatch(removeCharacter(data?.character?.id ?? -1));
    } else {
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
    }
  };

  if (loading) {
    return <LoaderView />;
  } else if (error) {
    return <ErrorView />;
  }
  return (
    <SafeScreen>
      <ScrollContainer>
        <ProfileView item={data?.character} />
        <HText color="#232323" aligin="center" isBold>
          {data?.character.name}
        </HText>
        <ButtonContainer
          testID="favButtonID"
          bgColor={buttonColor}
          onPress={onFavClick}>
          <HText color="#ffffff" aligin="center" isBold fontSize="22px">
            {buttonText}
          </HText>
        </ButtonContainer>
        <PropertiesView item={data?.character} />
        <EpisodesView item={data?.character} />
      </ScrollContainer>
    </SafeScreen>
  );
};

export default CharacterDetail;
