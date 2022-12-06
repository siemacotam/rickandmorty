import { Character, Response } from "src/global";
import dataService from "src/services/data-service";

export const promices = (data: Response) => {
  let promices = [];
  for (let i = 1; i < data.info.pages + 1; i++) {
    promices.push(dataService.getCharacter(i));
  }
  return promices;
};

export const getAllChars = async (
  data: Response,
  setAllCharacters: (data: Character[]) => void
) => {
  let chars: Character[] = [];

  await Promise.all(promices(data)).then((values) => {
    values.forEach((el) => {
      const data: Response = JSON.parse(el);
      chars.push(...data.results);
    });
  });
  setAllCharacters(chars);
};
