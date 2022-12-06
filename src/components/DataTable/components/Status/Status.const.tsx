import { Status, statusses } from "src/global";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

export const pickIcon = (status: Status): JSX.Element | null => {
  switch (status) {
    case statusses.alive:
      return (
        <CheckCircleOutlineOutlinedIcon
          sx={{ color: "rgba(3, 169, 159, 1)", fontSize: "18px" }}
        />
      );
    case statusses.dead:
      return (
        <ErrorOutlineOutlinedIcon
          sx={{ color: "rgba(255, 38, 38, 1)", fontSize: "18px" }}
        />
      );
    case statusses.unknown:
      return <HelpRoundedIcon sx={{ color: "#BAC6D8", fontSize: "18px" }} />;
    default:
      return null;
  }
};
