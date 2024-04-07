import {createSelector} from '@reduxjs/toolkit';
import {favouriteState} from './favourite.slice';
import {useTypedSelector} from '.';

const _getFavouriteCharacters = createSelector(
  [favouriteState],
  favouriteState => {
    return favouriteState.characters;
  },
);

export const getFavouriteCharacters = () =>
  useTypedSelector(state => _getFavouriteCharacters(state));

const isFav = createSelector(
  [favouriteState, (favouriteState, id: number) => id],
  (favouriteState, id) => {
    return favouriteState.characters.find(item => item.id === id) != undefined;
  },
);
export const isFavCharacter = (id: number) =>
  useTypedSelector(state => isFav(state, id));
