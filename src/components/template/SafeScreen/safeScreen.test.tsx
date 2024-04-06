import 'react-native';
import React from 'react';

import {it, expect, describe} from '@jest/globals';

// Note: test renderer must be required after react-native.
import {act, create} from 'react-test-renderer';
import SafeScreen from './SafeScreen';

describe('SafeScreen component should render correctly', () => {
  const view = create(<SafeScreen></SafeScreen>);

  it('snapshot', () => {
    expect(view).toMatchSnapshot();
  });
});
