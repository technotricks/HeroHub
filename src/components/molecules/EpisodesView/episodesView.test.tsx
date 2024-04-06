import 'react-native';
import React from 'react';

import {it, expect, jest, describe} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer, {create, act} from 'react-test-renderer';
import EpisodeView from '.';
import {CharacterDetail} from '@/types/character';

describe('Episode component should render correctly', () => {
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
  const characterDetailNoEpisodes: CharacterDetail = {
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
    episode: [],
    type: '',
  };

  const view = create(<EpisodeView item={characterDetail} />);
  const noEpisodesView = create(
    <EpisodeView item={characterDetailNoEpisodes} />,
  );

  it('snapshot', () => {
    expect(view).toMatchSnapshot();
  });

  it('snapshot empty eposodes', () => {
    expect(noEpisodesView).toMatchSnapshot();
  });
});
