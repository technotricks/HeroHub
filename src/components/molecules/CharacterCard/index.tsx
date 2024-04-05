import {CharacterImageSmall, ItemContainer, ItemText} from '@/components/atom';
import {TouchableOpacity} from 'react-native';
import {CardProps} from './types';

const CharacterCard: React.FC<CardProps> = ({item, onPress}) => (
  <ItemContainer>
    <TouchableOpacity onPress={() => onPress(item)}>
      <CharacterImageSmall source={{uri: item.image}} />
      <ItemText>
        Name: {item.id}--{item.name}
      </ItemText>
      <ItemText>Gender: {item.gender}</ItemText>
      <ItemText>Status: {item.status}</ItemText>
    </TouchableOpacity>
  </ItemContainer>
);

export default CharacterCard;
