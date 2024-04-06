import 'react-native';
import React from 'react';

import {it, expect, describe} from '@jest/globals';

// Note: test renderer must be required after react-native.
import {act, create} from 'react-test-renderer';
import LoadMoreView from '.';
import {Character} from '@/types/character';

describe('LoadMoreView component should render correctly', () => {
  const characters: Character[] = [
    {
      id: 1,
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      name: 'Rick Sanchez',
      status: 'Alive',
      gender: 'Male',
      type: '',
    },
    {
      id: 2,
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      name: 'Morty Smith',
      status: 'Alive',
      gender: 'Male',
      type: '',
    },
    {
      id: 3,
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      name: 'Summer Smith',
      status: 'Alive',
      gender: 'Female',
      type: '',
    },
  ];
  const mockCallBack = jest.fn();

  const view = create(
    <LoadMoreView items={characters} isLoading={true} onPress={mockCallBack} />,
  );

  it('snapshot', () => {
    expect(view).toMatchSnapshot();
  });
});
