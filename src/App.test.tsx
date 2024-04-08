/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: import explicitly to use the types shipped with jest.
import {NavigationContainer} from '@react-navigation/native';

// Note: test renderer must be required after react-native.
import {
  render,
  screen,
  fireEvent,
  renderWithReduxNav,
} from '@/testUtils/testUtils';
// import {render} from '@testing-library/react-native';
import renderer, {create, act} from 'react-test-renderer';

import {CharacterCard, EpisodesView} from '@/components/molecules';
import ApplicationNavigator, {Stack} from './navigators/Application';
import {Provider} from 'react-redux';

import {persistor, store} from '@/store';
import {GET_CHARACTERS_QUERY} from './apollo/query';
import {Character} from './types/character';
import {CharacterDetail} from './screens';
jest.useFakeTimers();
describe('Screen should render', () => {
  it('Character List should render properly', () => {
    const component = render(<ApplicationNavigator />);
    // const button = component.getByTestId('buttonID1');
    // fireEvent.press(button);

    expect(component).toBeDefined();
  });

  it('Character List should render properly', () => {
    const component = renderWithReduxNav(
      <Stack.Navigator>
        <Stack.Screen
          name="CharacterDetail"
          component={CharacterDetail}
          options={{headerBackTitle: 'Back', title: 'Character Details'}}
        />
      </Stack.Navigator>,
    );

    expect(component).toBeDefined();
  });
});
