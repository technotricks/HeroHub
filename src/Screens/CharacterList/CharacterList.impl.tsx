import React, {useEffect, useState} from 'react';

// import {TestAtom} from '@Components/Atoms';
import {Container, TopText, Middle, Centered} from './CharacterList.styles';

import {ICharacterList} from './CharacterList.types';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {useLazyGetCharacters} from '@/hooks';
import {Character} from '@/types/character';

const CharacterList: React.FunctionComponent<ICharacterList.IProps> = props => {
  const {navigation} = props;
  const isDarkMode = useColorScheme() === 'dark';
  const [fetchCharactersData, {data, error, loading}] = useLazyGetCharacters();
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetchCharactersData(1); // Fetch characters data for page 1 when the component mounts
  }, []);

  useEffect(() => {
    const characters = data?.characters?.results;
    if (characters ?? 0 > 0) {
      setCharacters(prevCharacters => prevCharacters.concat(characters ?? []));
    }
  }, [data]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Container key={1}>
        <TopText>{'Character List'}</TopText>
        <Middle>
          <Centered>
            {data?.characters?.results?.map(character => (
              <View key={character.id}>
                <Text>
                  {character.id}-{character.name}
                </Text>
              </View>
            ))}

            <Button
              title="Press me"
              onPress={() => {
                //navigation.push('CharacterDetail', {id: 2});
                fetchCharactersData(2);
              }}
            />
          </Centered>
        </Middle>
      </Container>
    </SafeAreaView>
  );
};

export default CharacterList;
