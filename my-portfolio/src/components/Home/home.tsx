import {
  Avatar,
  Button,
  Container,
  Grid,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import NavBar from "../../common/navBar/navBar";
import { useEffect, useState } from "react";
import HeroSection from "../../common/heroSection/heroSection";

const CLIENT_ID = "996163ec51a4769e7186";

const Home = () => {
  const loginWithGitHub = () => {
    window.location.assign(
      "https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID
    );
  };
  const [reRender, setRerender] = useState(false);
  const [userInfo, setUserInfo] = useState<any[]>([]);
  async function getAccessToken(codeParam: string) {
    await fetch("http://localhost:4000/getAcessToken?code=" + codeParam, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.access_token) {
          localStorage.setItem("acessToken", data.access_token);
          setRerender(!reRender);
        }
      });
  }
  useEffect(() => {
    const querryString = window.location.search;
    const urlParams = new URLSearchParams(querryString);
    const codeParam = urlParams.get("code");
    if (codeParam && localStorage.getItem("accessToken") === null) {
      getAccessToken(codeParam);
    }
  }, []);

  async function getUserData() {
    await fetch("http://localhost:4000/getUserData", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("acessToken"),
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUserInfo([data]);
      });
  }

  const getUserImage = () => {
    let img: string;
    userInfo.map((data) => {
      img = data.avatar_url.toString();
      return img;
    });
  };
  return (
    <>
      <NavBar image={getUserImage()} />
      <HeroSection />
      {/* <Container className="container">
        <Grid container={true} paddingTop={"2rem"}>
          <Grid item={true} xs={12} display={"flex"} alignItems={"center"}>
            <Button fullWidth={true} onClick={loginWithGitHub}>
              Login With GIT HUB
            </Button>

            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
          </Grid>

          {localStorage.getItem("acessToken") && (
            <Grid
              item={true}
              xs={12}
              paddingTop={"2rem"}
              display={"flex"}
              alignItems={"center"}
            >
              <Button fullWidth={true} onClick={getUserData}>
                Get User Data
              </Button>
              <Button
                fullWidth={true}
                onClick={() => {
                  localStorage.removeItem("acessToken");
                  setRerender(!reRender);
                }}
              >
                LogOut
              </Button>
              {userInfo.map((data) => {
                return (
                  <>
                    <img src={data.avatar_url} />
                    <Typography variant="h3">User ID: {data.login}</Typography>
                    <a href={`${data.html_url}`}>Link</a>
                    <IconButton sx={{ p: 0 }}>
                      <Avatar src={data.avatar_url} />
                    </IconButton>
                  </>
                );
              })}
            </Grid>
          )}
        </Grid>
      </Container> */}
    </>
  );
};
export default Home;
