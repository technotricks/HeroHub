import {createSelector} from 'reselect';
import {favouriteState} from './favourite.slice';
import {
  createParameterSelector,
  customSelectorCreator,
  useTypedSelector,
} from '.';

const _getFavouriteCharacters = createSelector(
  favouriteState,
  ({characters}) => {
    return characters;
  },
);

export const getFavouriteCharacters = () =>
  useTypedSelector(state => _getFavouriteCharacters(state));

const _getFavCharacter = customSelectorCreator(
  favouriteState,
  createParameterSelector((id: number) => id),
  ({characters}, id: number): boolean => {
    return characters.find(item => item.id === id) != undefined;
  },
);

export const isFavCharacter = (id: number) =>
  useTypedSelector(state => _getFavCharacter(state, id));
