import { Character } from "src/global";
import { Conditions } from "./FilterPanel.types";

export const getFilteredData = (
  characters: Character[],
  conditions: Conditions
) => {
  const { name, speciesList } = conditions;
  let data = [...characters];

  if (speciesList.length > 0) {
    data = characters.filter((el) => speciesList.includes(el.species));
  }

  if (name.length > 0) {
    data = data.filter((el) =>
      el.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  return data;
};
