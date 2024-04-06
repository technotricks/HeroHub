import {Centered, CenteredVH, Container} from '@/components/atom';
import {SafeScreen} from '@/components/template';
import {ActivityIndicator} from 'react-native';

const LoaderView: React.FC = () => {
  return (
    <>
      <SafeScreen>
        <CenteredVH>
          <ActivityIndicator size="large" color={'red'} />
        </CenteredVH>
      </SafeScreen>
    </>
  );
};

export default LoaderView;
