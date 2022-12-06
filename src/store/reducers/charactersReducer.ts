import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character } from "src/global";
import type { RootState } from "../store";

interface State {
  characters: Character[];
  filteredData: Character[];
  species: string[];
}

const initialState: State = {
  characters: [],
  filteredData: [],
  species: [],
};

const getSpecies = (data: Character[]) => {
  let species: string[] = [];
  for (const character of data) {
    if (!species.includes(character.species)) {
      species.push(character.species);
    }
  }
  return species;
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<Character[]>) => {
      return {
        characters: action.payload,
        filteredData: action.payload,
        species: getSpecies(action.payload),
      };
    },
    filterData: (state, action: PayloadAction<Character[]>) => {
      return {
        ...state,
        filteredData: action.payload,
      };
    },
  },
});

export const { setCharacters, filterData } = charactersSlice.actions;

export const selectCount = (state: RootState) => state.characters;

export default charactersSlice.reducer;
