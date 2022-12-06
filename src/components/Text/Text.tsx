import { Typography } from "@mui/material";
import theme from "src/Theme/Theme";

export interface TextProps {
  text: string;
  weight?: number;
  size?: string;
  color?: string;
}

export const Text = ({ text, weight, size, color }: TextProps): JSX.Element => (
  <Typography
    variant="subtitle1"
    sx={{
      fontFamily: theme.typography.fontFamily,
      fontWeight: weight || 400,
      fontSize: size || "15px",
      lineHeight: "130% ",
      color: color || theme.palette.common.black,
    }}
  >
    {text}
  </Typography>
);
