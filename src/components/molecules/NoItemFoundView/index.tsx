import {CenteredVH, HText} from '@/components/atom';
import {SafeScreen} from '@/components/template';

const NoItemFoundView: React.FC = () => {
  return (
    <>
      <SafeScreen>
        <CenteredVH>
          <HText color="#5b5858" aligin="center" isBold fontSize="18px">
            No favorite characters added
          </HText>
        </CenteredVH>
      </SafeScreen>
    </>
  );
};

export default NoItemFoundView;
