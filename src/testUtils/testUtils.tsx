import * as React from 'react';
import {RenderOptions} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {persistor, store} from '@/store';
import {render} from '@testing-library/react-native';
import {MockedProvider, MockedResponse} from '@apollo/client/testing';
import {GraphQLRequest} from '@apollo/client';
import {GET_CHARACTERS_QUERY, GET_CHARACTER_QUERY} from '@/apollo/query';
import {NavigationContainer} from '@react-navigation/native';

const mocks = [
  {
    request: {
      query: GET_CHARACTERS_QUERY,
      variables: {
        page: 1,
      },
    },
    result: {
      data: {
        characters: {
          results: [
            {
              id: '1',
              image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
              name: 'Rick Sanchez',
              status: 'Alive',
              gender: 'Male',
              type: '',
            },
            {
              id: '2',
              image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
              name: 'Morty Smith',
              status: 'Alive',
              gender: 'Male',
              type: '',
            },
          ],
          info: {
            count: 826,
            next: 2,
            pages: 42,
            prev: null,
          },
        },
      },
    },
  },
  {
    request: {
      query: GET_CHARACTER_QUERY,
      variables: {
        characterId: 1,
      },
    },
    result: {
      data: {
        character: {
          id: '1',
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          name: 'Rick Sanchez',
          gender: 'Male',
          status: 'Alive',
          origin: {
            name: 'Earth (C-137)',
          },
          location: {
            name: 'Citadel of Ricks',
          },
          episode: [
            {
              episode: 'S01E01',
              name: 'Pilot',
            },
            {
              episode: 'S01E02',
              name: 'Lawnmower Dog',
            },
          ],
        },
      },
    },
  },
];
export function renderWithRedux(
  ui: React.ReactElement,
  options?: RenderOptions,
) {
  const ReduxWrapper = ({children}: {children: React.ReactNode}) => (
    <Provider store={store}>
      <MockedProvider mocks={mocks} addTypename={false}>
        {children}
      </MockedProvider>
    </Provider>
  );
  return render(ui, {wrapper: ReduxWrapper, ...options});
}

export function renderWithReduxNav(
  ui: React.ReactElement,
  options?: RenderOptions,
) {
  const ReduxWrapper = ({children}: {children: React.ReactNode}) => (
    <Provider store={store}>
      <MockedProvider mocks={mocks} addTypename={false}>
        <NavigationContainer>{children}</NavigationContainer>
      </MockedProvider>
    </Provider>
  );
  return render(ui, {wrapper: ReduxWrapper, ...options});
}

export * from '@testing-library/react-native';
export {renderWithRedux as render};
