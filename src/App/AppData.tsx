import { Character, Response } from "src/global";
import { useEffect, useState } from "react";
import dataService from "src/services/data-service";
import { useAppDispatch } from "src/store/hooks";
import { setCharacters } from "src/store/reducers/charactersReducer";
import { getAllChars } from "./App.helpers";
import { AlertMessage, Loader } from "src/components";

interface AppDataProps {
  children: JSX.Element;
}

export const AppData = ({ children }: AppDataProps): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useAppDispatch();
  const setAllCharacters = (data: Character[]) => {
    dispatch(setCharacters(data));
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError("");
      await dataService
        .getCharacter(1)
        .then((res) => {
          const data: Response = JSON.parse(res);
          getAllChars(data, setAllCharacters);
        })
        .catch(() =>
          setError(
            "Error with downloading the data. Please refresh or try again later"
          )
        );
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <AlertMessage message={error} />;
  }

  return children;
};
