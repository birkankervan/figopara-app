import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import menuItems from "./menuItems";
import { useRouter } from "next/router";

type MenuSectionProps = {
  open: boolean;
};

const MenuSection = ({ open }: MenuSectionProps) => {
  const router = useRouter();
  const { pathname } = router;
  const handleListItemClick = (path: string) => {
    router.push(path);
  };

  return (
    <List>
      {menuItems.map((menuItem) => (
        <ListItem
          key={menuItem.name}
          disablePadding
          sx={{ display: "block" }}
          onClick={() => handleListItemClick(menuItem.path)}
          disableGutters
          dense
        >
          <ListItemButton
            selected={
              pathname === menuItem.path || pathname === menuItem.subPath
            }
            sx={{
              minHeight: 24,
              px: 2.5,
              mx: 1.3,
              borderRadius: 1,
              justifyContent: open ? "initial" : "center",
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {menuItem.icon}
            </ListItemIcon>
            <ListItemText
              primary={menuItem.name}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default MenuSection;
