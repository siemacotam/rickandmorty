import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { ChangeEvent, useEffect, useState } from "react";
import { filterData } from "src/store/reducers/charactersReducer";
import { Conditions } from "./FilterPanel.types";
import { initialConditions, textStyles } from "./FilterPanel.const";
import { getFilteredData } from "./FilterPanel.helpers";

interface FilterPanelProps {
  setFirstPage: () => void;
}

export const FilterPanel = ({ setFirstPage }: FilterPanelProps) => {
  const [conditions, setConditions] = useState<Conditions>(initialConditions);
  const dispatch = useAppDispatch();
  const species = useAppSelector((store) => store.characters.species);
  const characters = useAppSelector((store) => store.characters.characters);

  const { speciesList, name } = conditions;

  useEffect(() => {
    dispatch(filterData(getFilteredData(characters, conditions)));
  }, [conditions, characters, dispatch]);

  const setName = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setConditions({ ...conditions, name: e.target.value });
    setFirstPage();
  };

  const handleChange = (event: SelectChangeEvent<typeof speciesList>) => {
    const {
      target: { value },
    } = event;
    setConditions({
      ...conditions,
      speciesList: typeof value === "string" ? value.split(",") : value,
    });
    setFirstPage();
  };

  return (
    <Stack direction="row" spacing={6}>
      <Tooltip title={name}>
        <TextField
          label="Search"
          sx={{
            input: textStyles,
            label: textStyles,
            width: "140px",
          }}
          value={name}
          onChange={setName}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon sx={{ cursor: "pointer" }} />
              </InputAdornment>
            ),
          }}
        />
      </Tooltip>
      <Tooltip title={speciesList.join(" ,")}>
        <FormControl
          sx={{
            input: textStyles,
            label: textStyles,
            width: "140px",
            bgcolor: "white",
          }}
        >
          <InputLabel>Species</InputLabel>
          <Select
            value={speciesList}
            label="Species"
            onChange={handleChange}
            multiple
          >
            {species.map((option) => (
              <MenuItem key={option} value={option} sx={textStyles}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Tooltip>
    </Stack>
  );
};
