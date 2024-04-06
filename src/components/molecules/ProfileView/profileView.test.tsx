import 'react-native';
import React from 'react';

import {it, expect, describe} from '@jest/globals';

// Note: test renderer must be required after react-native.
import {create} from 'react-test-renderer';
import ProfileView from '.';
import {CharacterDetail} from '@/types/character';

describe('ProfileView component should render correctly', () => {
  const characterDetail: CharacterDetail = {
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
    type: '',
  };

  const view = create(<ProfileView item={characterDetail} />);

  it('snapshot', () => {
    expect(view).toMatchSnapshot();
  });
});
