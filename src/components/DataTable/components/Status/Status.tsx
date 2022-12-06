import { Stack, TableCell } from "@mui/material";
import { Text } from "src/components/Text";
import { capitalize, statusses } from "src/global";
import { pickIcon } from "./Status.const";

interface StatusProps {
  status: string;
}

export const Status = ({ status }: StatusProps): JSX.Element => {
  const statusUnknownColor =
    status === statusses.unknown ? "rgba(95, 101, 105, 1)" : undefined;

  return (
    <TableCell>
      <Stack direction="row" spacing={1} alignItems="center">
        {pickIcon(status)}
        <Text
          weight={500}
          size="14px"
          text={capitalize(status)}
          color={statusUnknownColor}
        />
      </Stack>
    </TableCell>
  );
};
