import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Logo from "../../assets/Logo.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f5fcff",
      }}
    >
      <Container className="container">
        <Grid container={true} spacing={2} display={"flex"} padding={"1rem"}>
          <Grid item={true} xs={3} display={"flex"} justifyContent={"center"}>
            <Box
              component="img"
              sx={{
                height: 24,
              }}
              alt="Your logo."
              src={Logo}
            />
          </Grid>
          <Grid item={true} xs={6} display={"flex"} justifyContent={"center"}>
            <Grid
              container={true}
              spacing={1}
              display={"flex"}
              justifyContent={"space-evenly"}
            >
              <Grid item={true}>
                <Typography variant="h6" color="info">
                  Home
                </Typography>
              </Grid>
              <Grid item={true}>
                <Typography variant="h6" color="info">
                  PortFolio
                </Typography>
              </Grid>
              <Grid item={true}>
                <Typography variant="h6" color="info">
                  About Me
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item={true} xs={3} display={"flex"} justifyContent={"center"}>
            <Grid
              container={true}
              spacing={2}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Grid item={true}>
                <InstagramIcon fontSize={"small"} />
              </Grid>
              <Grid item={true} fontSize={"small"}>
                <TwitterIcon />
              </Grid>
              <Grid item={true} fontSize={"small"}>
                <LinkedInIcon />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider color="secondary" />

        <Grid container={true} display={"flex"} padding={"3rem"}>
          <Grid item={true} xs={8} display={"flex"} paddingLeft={"5.5rem"}>
            <Typography variant="h6">Made with 💖 by Dhanuj</Typography>
          </Grid>
          <Grid item={true} xs={4} display={"flex"}>
            <Grid container={true} spacing={2}>
              <Grid item={true}>
                <Typography variant="h6">Privacy Policy</Typography>
              </Grid>

              <Grid item={true}>
                <Typography variant="h6"> Terms of Service</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Footer;
