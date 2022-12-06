import { PaginationItem, Pagination } from "@mui/material";
import { useAppSelector } from "src/store/hooks";
import theme from "src/Theme/Theme";

interface PaginationElementProps {
  page: number;
  changePage: (number: number) => void;
}

export const PaginationElement = ({
  page,
  changePage,
}: PaginationElementProps): JSX.Element => {
  const charactersCount = useAppSelector(
    (store) => store.characters.filteredData
  ).length;
  const pagesCount = Math.ceil(charactersCount / 5);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    changePage(value);
  };

  return (
    <Pagination
      onChange={handleChange}
      sx={{ display: "flex", justifyContent: "flex-end" }}
      count={pagesCount}
      variant="outlined"
      page={page}
      shape="rounded"
      renderItem={(item) => (
        <PaginationItem
          sx={{
            bgcolor: "white",
            fontFamily: theme.typography.fontFamily,
            fontWeight: 500,
            fontSize: "14px",
          }}
          {...item}
        />
      )}
    />
  );
};
