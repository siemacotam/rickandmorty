import { Stack, TableCell } from "@mui/material";
import { Text } from "src/components/Text";
import { Status, statusses } from "src/global";

interface NameCellProps {
  name: string;
  species: string;
  status: Status;
}

export const NameCell = ({
  name,
  species,
  status,
}: NameCellProps): JSX.Element => {
  const isCharactedDead = status === statusses.dead;
  const nameColor = isCharactedDead
    ? "rgba(95, 101, 105, 1)"
    : "rgba(26, 35, 40, 1)";
  const speciesColor = isCharactedDead
    ? "rgba(140, 145, 147, 1)"
    : "rgba(72, 79, 83, 1)";

  return (
    <TableCell component="th" scope="row">
      <Stack>
        <Text weight={500} text={name} color={nameColor} />
        <Text weight={400} text={species} color={speciesColor} />
      </Stack>
    </TableCell>
  );
};
