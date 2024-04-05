import {ItemClickCallback} from '@/types/base';
import {Character} from '@/types/character';

export type CardProps = {
  item: Character;
  onPress: ItemClickCallback;
};
