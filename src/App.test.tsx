/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: import explicitly to use the types shipped with jest.
import {NavigationContainer} from '@react-navigation/native';

// Note: test renderer must be required after react-native.
import {render} from '@/testUtils/testUtils';
import ApplicationNavigator from './navigators/Application';

import {GET_CHARACTERS_QUERY, GET_CHARACTER_QUERY} from '@/apollo/query';

jest.useFakeTimers();

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
describe('Screen should render', () => {
  it('Character List should render properly', () => {
    const component = render(<ApplicationNavigator />, {mockData: mocks});
    expect(component).toBeDefined();
  });
});
