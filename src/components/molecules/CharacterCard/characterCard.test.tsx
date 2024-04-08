import 'react-native';
import React from 'react';

import {it, expect, jest, describe} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer, {create, act} from 'react-test-renderer';
import {CharacterCard} from '@/components/molecules';
import {Character} from '@/types/character';

describe('CharacterCard component should render correctly', () => {
  const character: Character = {
    id: 1,
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    name: 'Rick Sanchez',
    status: 'Alive',
    gender: 'Male',
    type: '',
  };

  const mockCallBack = jest.fn();

  const view = create(
    <CharacterCard item={character} onPress={mockCallBack} />,
  );

  it('snapshot', () => {
    expect(view).toMatchSnapshot();
  });

  it('CharacterCard press', () => {
    const button = view.root.findByProps({testID: 'buttonID1'}).props;
    act(() => button.onPress());
    expect(mockCallBack).toBeCalled();
  });

  it('CharacterCard name value render', () => {
    const text = view.root.findByProps({testID: 'nameID1'}).props;
    expect(text).toBeDefined();
  });
});
