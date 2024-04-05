import React from 'react';
import {ICharacterDetail} from './CharacterList.types';
import {useCharacterDetailQuery} from '@/hooks';
import {Container, ItemText} from '@/components/atom';
import {SafeScreen} from '@/components/template';

const CharacterList: React.FunctionComponent<
  ICharacterDetail.IProps
> = props => {
  const {route} = props;
  const id = route?.params?.id;

  const {data, error, loading} = useCharacterDetailQuery(id);

  return (
    <SafeScreen>
      <Container>
        <ItemText>ID: {id}</ItemText>
        <ItemText>Data: {JSON.stringify(data)}</ItemText>
      </Container>
    </SafeScreen>
  );
};

export default CharacterList;
