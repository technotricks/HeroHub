import type {StackScreenProps} from '@react-navigation/stack';

export type ApplicationStackParamList = {
  MainTab: undefined;
  CharacterList: undefined;
  CharacterDetail: {id: number};
  FavouriteList: undefined;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;
