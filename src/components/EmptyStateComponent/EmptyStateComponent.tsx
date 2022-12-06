import { Card, Grid, Stack } from "@mui/material";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import { Text } from "../Text";

export const EmptyStateComponent = (): JSX.Element => (
  <Grid item xs={12}>
    <Card variant="outlined" sx={{ p: 10 }}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <ErrorOutlineRoundedIcon />
        <Text text="There is no results for picked filters. Please change it" />
      </Stack>
    </Card>
  </Grid>
);
