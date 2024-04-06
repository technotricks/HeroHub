import 'react-native';
import React from 'react';

import {it, expect, describe} from '@jest/globals';

import {create} from 'react-test-renderer';
import LoadingView from '.';

describe('LoadingView component should render correctly', () => {
  const view = create(<LoadingView />);

  it('snapshot', () => {
    expect(view).toMatchSnapshot();
  });
});
