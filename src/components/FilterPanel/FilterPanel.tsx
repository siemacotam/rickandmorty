import {
  FormControl,
  InputAdornment,
  MenuItem,
  Typography,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  OutlinedInput,
  Tooltip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { ChangeEvent, useEffect, useState } from "react";
import { filterData } from "src/store/reducers/characterReducer/charactersReducer";
import { Conditions, FilterPanelProps } from "./FilterPanel.types";
import { initialConditions, textStyles } from "./FilterPanel.const";
import { getFilteredData } from "./FilterPanel.helpers";

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
      <Tooltip title={name} placement="right">
        <TextField
          placeholder="Search"
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
      <Tooltip title={speciesList.join(" ,")} placement="right">
        <FormControl
          sx={{
            input: textStyles,
            label: textStyles,
            width: "140px",
            bgcolor: "white",
          }}
        >
          <Select
            value={speciesList}
            onChange={handleChange}
            multiple
            displayEmpty
            input={<OutlinedInput sx={textStyles} />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <Typography sx={textStyles}>Species</Typography>;
              }
              return selected.join(", ");
            }}
          >
            <MenuItem disabled value="">
              <Typography sx={textStyles}>Pick species</Typography>
            </MenuItem>
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
