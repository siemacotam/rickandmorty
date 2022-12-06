import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Avatar, NameCell, Status as StatusElement } from "./components";
import { useAppSelector } from "src/store/hooks";
import { PaginationElement } from "../PaginationElement";
import { Text, EmptyStateComponent, FilterPanel } from "src/components";
import { headCells, StyledCheckbox } from "./DataTable.const";
import { Status, statusses } from "src/global";
import theme from "src/Theme/Theme";
import { TableCharacter } from "./DataTable.types";

export const DataTable = (): JSX.Element => {
  const [page, setPage] = useState(1);
  const [charactersToShow, setCharactersToShow] = useState<TableCharacter[]>(
    []
  );
  const characters = useAppSelector((store) => store.characters.filteredData);

  useEffect(() => {
    const charactersList = characters
      .filter((el, index) => {
        if (index + 1 <= page * 5 && index + 1 > page * 5 - 5) {
          return el;
        }
        return null;
      })
      .map((character) => ({ ...character, checked: false }));
    setCharactersToShow(charactersList);
  }, [page, characters]);

  const isAllPicked = charactersToShow.some((hero) => !hero.checked);

  const pickAll = () => {
    const pickedAll = charactersToShow.map((hero) => ({
      ...hero,
      checked: isAllPicked ? true : false,
    }));
    setCharactersToShow(pickedAll);
  };

  const handleChange = (id: string) => {
    const updatedArray = charactersToShow.map((hero) => {
      if (hero.id === id) {
        return { ...hero, checked: !hero.checked };
      }
      return hero;
    });
    setCharactersToShow(updatedArray);
  };

  const setFirstPage = () => setPage(1);
  const changePage = (number: number) => setPage(number);
  const isCharacterDead = (status: Status) =>
    status === statusses.dead
      ? "rgba(246, 248, 250, 1)"
      : theme.palette.common.white;

  return (
    <Stack rowGap={3}>
      <FilterPanel setFirstPage={setFirstPage} />
      <Box sx={{ width: "100%" }}>
        <Card elevation={1}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <StyledCheckbox onChange={pickAll} checked={!isAllPicked} />
                  </TableCell>
                  {headCells.map((headCell) => (
                    <TableCell key={headCell}>
                      <Text
                        text={headCell}
                        weight={500}
                        size="14px"
                        color="rgba(72, 79, 83, 1)"
                      />
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {charactersToShow.map(
                  ({
                    id,
                    name,
                    status,
                    species,
                    gender,
                    origin,
                    image,
                    checked,
                  }) => (
                    <TableRow
                      hover
                      role="checkbox"
                      key={id}
                      sx={{
                        bgcolor: isCharacterDead(status),
                      }}
                    >
                      <TableCell padding="checkbox">
                        <StyledCheckbox
                          checked={checked}
                          onChange={() => handleChange(id)}
                        />
                      </TableCell>
                      <NameCell name={name} species={species} status={status} />
                      <Avatar image={image} />
                      <TableCell>
                        <Text text={origin.name} />
                      </TableCell>
                      <TableCell>
                        <Text text={gender} />
                      </TableCell>
                      <StatusElement status={status} />
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Box>
      {charactersToShow.length === 0 && <EmptyStateComponent />}
      <PaginationElement page={page} changePage={changePage} />
    </Stack>
  );
};
