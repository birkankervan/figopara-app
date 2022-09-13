import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import useSwrUser from "hooks/useSwrUser";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState, MouseEvent } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { setCredentials } from "features/auth/authSlice";
import { useDispatch } from "react-redux";

const UserSection = () => {
  const { user } = useSwrUser();
  const router = useRouter();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLogout = () => {
    Cookies.remove("token");
    dispatch(setCredentials({} as any));

    setTimeout(() => {
      router.push("/login");
    }, 500);

    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        sx={{ p: 1, borderRadius: 1 }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Box display="flex" alignItems="center">
          <Avatar
            alt="Figo Para"
            src="https://pbs.twimg.com/profile_images/1069932960911110144/u_Udzuh4_400x400.jpg"
            sx={{ width: 24, height: 24, marginRight: 1 }}
          />
          <Typography
            variant="subtitle1"
            noWrap
            component="div"
            color="text.primary"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {user?.name}
          </Typography>
        </Box>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleLogout}>Çıkış Yap</MenuItem>
      </Menu>
    </>
  );
};

export default UserSection;
