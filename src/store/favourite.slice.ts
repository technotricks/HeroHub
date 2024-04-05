import {Character} from '@/types/character';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '.';

export const FAVOURITE_STATE_NAME = 'favouriteSlice';

export interface Favouritetate {
  characters: Character[];
}

const initialState: Favouritetate = {
  characters: [],
};

export interface BaseCustomerPortFolioFetchState extends RootState {
  [FAVOURITE_STATE_NAME]: Favouritetate;
}

export const favouriteSlice = createSlice({
  name: FAVOURITE_STATE_NAME,
  initialState,
  reducers: {
    saveCharacter: (state, action: PayloadAction<Character>) => {
      state.characters.push(action.payload);
    },
    removeCharacter: (state, action: PayloadAction<number>) => {
      state.characters = state.characters.filter(
        item => item.id !== action.payload,
      );
    },
  },
});

export const {saveCharacter, removeCharacter} = favouriteSlice.actions;

// export default favouriteSlice;

const favouriteState = (state: BaseCustomerPortFolioFetchState) =>
  state?.[FAVOURITE_STATE_NAME] || initialState;
export {favouriteState};
export default favouriteSlice;
