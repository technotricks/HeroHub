import {useQuery} from '@apollo/client';
import React from 'react';
import {
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
import {ApplicationScreenProps} from '@/types/navigation';

const CharacterList: React.FunctionComponent<
  ApplicationScreenProps
> = props => {
  const {navigation} = props;

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Button
        title="Press me"
        onPress={() => navigation.push('CharacterDetail', {id: 2})}
      />
      <Text>"Fav List"</Text>
    </SafeAreaView>
  );
};

export default CharacterList;
