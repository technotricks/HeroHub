/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {client} from '@/apollo';
import ApplicationNavigator from '@/navigators/Application';

function App(): React.JSX.Element {
  return (
    <ApolloProvider client={client}>
      <ApplicationNavigator />
    </ApolloProvider>
  );
}

export default App;
