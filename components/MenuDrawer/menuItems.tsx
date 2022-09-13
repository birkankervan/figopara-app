import RequestPageIcon from "@mui/icons-material/RequestPage";
import HomeIcon from "@mui/icons-material/Home";
const menuItems = [
  { name: "Ana Sayfa", icon: <HomeIcon />, path: "/", subPath: "/" },
  {
    name: "Faturalar",
    icon: <RequestPageIcon />,
    path: "/faturalar",
    subPath: "/fatura-onay",
  },
];
export default menuItems;
