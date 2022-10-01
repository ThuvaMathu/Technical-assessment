import * as React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import "./style.css";
import BirthDayCake from "../assets/Birthday-cake.png";
import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LocationOnIcon from "@mui/icons-material/LocationOn";
export default function EventPage() {
  const history = useNavigate();
  const handleClick = () => {
    history("/event");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className="Responsive-Height">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Grid container justifyContent="center" alignItems="center">
              <Box sx={{ p: 5 }}>
                <img
                  src={BirthDayCake}
                  alt={"Landing-Image"}
                  className="BirthdayCakeImg"
                />
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <p className="Birthday-Bash">Birthday Bash</p>
                <p className="Birthday-Bash-secondary">Hosted by Elysia</p>
                <List>
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end">
                        <ArrowForwardIosIcon />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "white" }}>
                        <CalendarMonthIcon style={{ color: "#8456EC" }} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="18 August 6:00PM"
                      secondary="to 19 August 1:00PM UTC +10"
                    />
                  </ListItem>

                  <ListItem
                    secondaryAction={
                      <IconButton edge="end">
                        <ArrowForwardIosIcon />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "white" }}>
                        <LocationOnIcon style={{ color: "#8456EC" }} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Street name"
                      secondary="Suburb, State, Postcode"
                    />
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
