import {
  CharacterImageSmall,
  ItemContainer,
  ItemText,
  HText,
} from '@/components/atom';
import {TouchableOpacity} from 'react-native';
import {CardProps} from './types';

const CharacterCard: React.FC<CardProps> = ({item, onPress}) => (
  <ItemContainer key={item.id}>
    <TouchableOpacity
      testID={'buttonID' + item.id}
      onPress={() => onPress(item)}>
      <CharacterImageSmall
        testID={'imageID' + item.id}
        source={{uri: item.image}}
      />
      <HText
        testID={`nameID${item.id}`}
        color="#FF87A2"
        aligin="center"
        isBold
        fontSize="18px">
        {item.name}
      </HText>

      <HText
        testID={'statusID' + item.id}
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
