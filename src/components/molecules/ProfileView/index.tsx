import {Centered, ProfileImage, ItemText} from '@/components/atom';
import {TouchableOpacity} from 'react-native';
import {ProfileViewProps} from './types';

const ProfileView: React.FC<ProfileViewProps> = ({item}) => (
  <Centered>
    <ProfileImage
      source={{uri: item?.image}}
      borderColor={item?.status == 'Alive' ? '#2CB9B0' : '#FE5E33'}
    />
  </Centered>
);

export default ProfileView;
