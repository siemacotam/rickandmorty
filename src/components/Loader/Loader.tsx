import { CircularProgress, Grid } from "@mui/material";

export const Loader = (): JSX.Element => (
  <Grid container height="100vh" alignItems="center" justifyContent="center">
    <CircularProgress size={100} />
  </Grid>
);
