import { Stack } from "@mui/material";
import { DataTable, Title } from "src/components";
import { useAppSelector } from "src/store/hooks";
import { Loader } from "src/components/Loader/Loader";

export const Main = (): JSX.Element => {
  const characters = useAppSelector((store) => store.characters.characters);

  if (characters.length < 1) {
    return <Loader />;
  }

  return (
    <Stack component="main" p="55px 102px" rowGap={3}>
      <Title />
      <DataTable />
    </Stack>
  );
};
