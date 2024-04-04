import type {StackScreenProps} from '@react-navigation/stack';

export type ApplicationStackParamList = {
  TabNavigator: undefined;
  CharacterList: undefined;
  CharacterDetail: {id: number};
  FavouriteList: undefined;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;
