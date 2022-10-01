import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, Container, Button } from "@mui/material";
import "./style.css";
import LandingImage from "../assets/Landing-page-image.svg";
import { useNavigate } from "react-router-dom";
export default function LandingPage() {
  const history = useNavigate();
  const handleClick = () => {
    history("/create");
  };
  return (
    <Box sx={{ flexGrow: 1 }} className="LandingPage">
      <div className="Responsive-Height">
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            order={{ xs: 2, sm: 2, md: 1 }}
          >
            <Grid container justifyContent="center" alignItems="center">
              <Box sx={{ p: 4 }}>
                <img
                  src={LandingImage}
                  alt={"Landing-Image"}
                  style={{ maxWidth: "340px" }}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            order={{ xs: 1, sm: 1, md: 2 }}
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <p className="LandingPage-Heading">
                  Imagine if <br />
                  <span className="LandingPage-snapchat">
                    Snapchat
                    <br />
                  </span>
                  had events.
                </p>
                <p className="LandingPage-Subheading">
                  Snapchat Easily host and share events with your friends
                  <br /> across any social media.
                </p>
              </Box>
              <Button
                variant="contained"
                className="LandingPage-button"
                onClick={() => {
                  handleClick();
                }}
              >
                🎉 Create my event
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
