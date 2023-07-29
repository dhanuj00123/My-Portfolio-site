import * as React from "react";
import AppBar from "@mui/material/AppBar";
import {
  CssBaseline,
  Divider,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material/";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../assets/Logo.svg";
import { themeSettings } from "../../theam";
import MoreIcon from "@mui/icons-material/MoreVert";

import Person2TwoToneIcon from "@mui/icons-material/Person2TwoTone";

const NavBar = (image: any) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const img = image ? image : "/static/images/avatar/2.jpg";
  const tablet = useMediaQuery(themeSettings.breakpoints.up("md"));
  const mobile = useMediaQuery(themeSettings.breakpoints.up("sm"));
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <ThemeProvider theme={themeSettings}>
      <CssBaseline />

      <AppBar position="static" color="transparent">
        <Container className="container">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box
              component="img"
              sx={{
                height: 34,
              }}
              alt="Your logo."
              src={Logo}
            />
            {tablet && (
              <Box
                component={"div"}
                minWidth={"20rem"}
                display={"flex"}
                justifyContent={"space-between"}
                children={
                  <>
                    <Typography component={"p"} variant="body2" color="info">
                      Home
                    </Typography>
                    <Typography component={"p"} variant="body2" color="info">
                      PortFolio
                    </Typography>
                    <Typography component={"p"} variant="body2" color="info">
                      About Me
                    </Typography>
                  </>
                }
              />
            )}
            {tablet ? (
              <Button variant="outlined" type="button" size="small">
                Login With Git
              </Button>
            ) : (
              <>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  onClick={handleClick}
                >
                  <MoreIcon />
                </IconButton>
                <Menu
                  id="fade-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  // TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleClose}>
                    {/* <Person2TwoToneIcon fontSize="small" fontWeight={300} /> */}
                    <Typography variant="h5">Profile </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Typography variant="h5">Home</Typography>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose}>
                    <Typography variant="h5" color="error">
                      LogOut
                    </Typography>
                  </MenuItem>
                </Menu>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default NavBar;
