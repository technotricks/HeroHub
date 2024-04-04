import {useQuery} from '@apollo/client';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
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
import {GET_CHARACTERS, GET_CHARACTER} from '@/apollo/query';

function HomeScreen(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  // const {loading, error, data} = useQuery(GET_CHARACTER, {
  //   variables: {
  //     characterId: 801,
  //   },
  // });
  const {loading, error, data} = useQuery(GET_CHARACTERS, {
    variables: {
      page: 1,
    },
  });
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <Text>"Character Detail"</Text>
      <Text>{JSON.stringify(data)}</Text>
    </ScrollView>
  );
}

export default HomeScreen;
