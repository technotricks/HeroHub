import {StatusBar} from 'react-native';

import type {PropsWithChildren} from 'react';
import {MainContainer} from '@/components/atom';

function SafeScreen({children}: PropsWithChildren) {
  return (
    <MainContainer>
      <StatusBar barStyle={'light-content'} backgroundColor={'red'} />
      {children}
    </MainContainer>
  );
}

export default SafeScreen;
