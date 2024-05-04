import {
  Centered,
  ProfileImage,
  OverlayNameBottom,
  HText,
} from '@/components/atom';
import {ProfileViewProps} from './types';

const ProfileView: React.FC<ProfileViewProps> = ({item}: ProfileViewProps) => {
  const statusColor = item?.status == 'Alive' ? '#2CB9B0' : '#FE5E33';
  return (
    <Centered>
      <ProfileImage source={{uri: item?.image}} borderColor={statusColor} />
      <OverlayNameBottom bgColor={statusColor}>
        <Centered>
          <HText color="#fefefe" aligin="center" isBold fontSize="20px">
            {item?.status !== 'unknown' ? item?.status : ''}
          </HText>
        </Centered>
      </OverlayNameBottom>
    </Centered>
  );
};

export default ProfileView;
