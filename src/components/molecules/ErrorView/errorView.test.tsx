import 'react-native';
import React from 'react';

import {it, expect, jest, describe} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer, {create, act} from 'react-test-renderer';
import ErrorView from '.';

describe('ErrorView component should render correctly', () => {
  const view = create(<ErrorView />);

  it('snapshot', () => {
    expect(view).toMatchSnapshot();
  });
});
