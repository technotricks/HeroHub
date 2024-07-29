/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import {screen, renderWithReduxNav, userEvent} from '@/testUtils/testUtils';
import {Stack} from '@/navigators/Application';
import {GET_CHARACTERS_QUERY, GET_CHARACTER_QUERY} from '@/apollo/query';
import {CharacterList} from '@/screens';
jest.useFakeTimers();

const start = 0;
const end = 30;

const characterList = Array.from({length: end - start}, (_, i) => ({
  id: i,
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  name: 'Rick Sanchez',
  status: 'Alive',
  gender: 'Male',
  type: '',
}));

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
          results: characterList,
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
          id: 1,
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
describe('Character List Screen', () => {
  it(' Character List should render properly', async () => {
    const component = renderWithReduxNav(
      <Stack.Navigator>
        <Stack.Screen name="CharacterList" component={CharacterList} />
      </Stack.Navigator>,
      {
        mockData: mocks,
        initialState: {favouriteSlice: {characters: characterList}},
      },
    );
    const scrollView = screen.getByTestId('flatlistScrollableID');

    //flatlistScrollableID
    const user = userEvent.setup();
    await user.scrollTo(scrollView, {y: 100, momentumY: 200});
    await user.scrollTo(scrollView, {y: 100, momentumY: 200});
    await user.scrollTo(scrollView, {y: 100, momentumY: 200});

    expect(component).toBeDefined();
  });
});
