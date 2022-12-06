import { Box, TableCell } from "@mui/material";

interface AvatarProps {
  image: string;
}

export const Avatar = ({ image }: AvatarProps) => (
  <TableCell align="right">
    <Box
      width="50px"
      height="50px"
      sx={{
        border: "2px dashed #E5EAF0",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        borderRadius: "15px",
      }}
      overflow="hidden"
    >
      <Box component="img" src={image} alt="avatar" width="100%" />
    </Box>
  </TableCell>
);
