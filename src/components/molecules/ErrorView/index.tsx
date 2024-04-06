import {CenteredVH, HText} from '@/components/atom';
import {SafeScreen} from '@/components/template';

const ErrorView: React.FC = () => {
  return (
    <>
      <SafeScreen>
        <CenteredVH>
          <HText color="#5b5858" aligin="center" isBold fontSize="18px">
            An error occurred. Please try again later.
          </HText>
        </CenteredVH>
      </SafeScreen>
    </>
  );
};

export default ErrorView;
