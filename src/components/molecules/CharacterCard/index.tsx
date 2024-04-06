import {
  CharacterImageSmall,
  ItemContainer,
  ItemText,
  HText,
} from '@/components/atom';
import {TouchableOpacity} from 'react-native';
import {CardProps} from './types';

const CharacterCard: React.FC<CardProps> = ({item, onPress}) => (
  <ItemContainer>
    <TouchableOpacity onPress={() => onPress(item)}>
      <CharacterImageSmall source={{uri: item.image}} />
      <HText color="#FF87A2" aligin="center" isBold fontSize="18px">
        {item.name}
      </HText>

      <HText
        color={item?.status == 'Alive' ? '#2CB9B0' : '#FF3600'}
        aligin="left"
        isBold
        fontSize="16px">
        {item?.status !== 'unknown' ? item?.status : ''}
      </HText>
    </TouchableOpacity>
  </ItemContainer>
);

export default CharacterCard;
