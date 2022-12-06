import { Character } from "src/global";

export interface State {
  characters: Character[];
  filteredData: Character[];
  species: string[];
}
