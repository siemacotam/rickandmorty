import { Character } from "src/global";
import { State } from "./characterReducer.types";

export const initialState: State = {
  characters: [],
  filteredData: [],
  species: [],
};

export const getSpecies = (data: Character[]) => {
  let species: string[] = [];
  for (const character of data) {
    if (!species.includes(character.species)) {
      species.push(character.species);
    }
  }
  return species;
};
