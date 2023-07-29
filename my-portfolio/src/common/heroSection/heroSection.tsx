import { Box, Container, Grid, Typography } from "@mui/material";
import HomeImage from "../../assets/HomeImage.svg";
const HeroSection = () => {
  return (
    <>
      <Box
        component={"div"}
        color="sucess"
        sx={{ minHeight: "60rem", backgroundColor: "#f5fcff" }}
      >
        <Container className="container">
          <Grid
            container={true}
            display={"flex"}
            flexDirection={"row"}
            flexWrap={"nowrap"}
            alignItems={"center"}
            paddingTop={"10rem"}
          >
            <Grid
              container={true}
              display={"flex"}
              flexDirection={"column"}
              flexWrap={"nowrap"}
              justifyContent={"center"}
            >
              <Grid item={true} paddingBottom={"1rem"}>
                <Typography variant="h4">Hey, I am Dhanuj </Typography>
              </Grid>
              <Grid item={true} paddingBottom={"1rem"}>
                <Typography variant="h1" sx={{ fontWeight: "bold" }}>
                  I am a Software Engineer
                </Typography>
              </Grid>
              <Grid item={true} xs={8} paddingBottom={"1rem"}>
                <Typography variant="h3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </Typography>
              </Grid>
            </Grid>
            <Grid container={true}>
              <Grid item={true}>
                <img src={HomeImage} width="600" height="500" />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default HeroSection;
