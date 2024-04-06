import 'react-native';
import React from 'react';

import {it, expect, describe} from '@jest/globals';

import {create} from 'react-test-renderer';
import NoItemFoundView from '.';

describe('NoItemFoundView component should render correctly', () => {
  const view = create(<NoItemFoundView />);

  it('snapshot', () => {
    expect(view).toMatchSnapshot();
  });
});
