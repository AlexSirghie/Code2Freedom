import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BookCallButton from "./book-call";
import SouthEastOutlinedIcon from "@mui/icons-material/SouthEastOutlined";
import SouthWestOutlinedIcon from "@mui/icons-material/SouthWestOutlined";

export default function OurTeam() {
  return (
    <Box className="team-container">
      <Box  className="title-card">
        <img src="team.gif" id="team-title"/>
      </Box>
      <Box
        className="trainer-card"
      >
        {/* Trainer 1 */}
        <Box className="trainer-box text-card">
          <img src="c2f-alex.svg" width={"40%"}/>
          <img src="alex-trainer.svg" style={{ width: "80%" }} />

          <Box>
            <img
              src="html-logo.svg"
              width={"10%"}
              style={{ margin: "0 0.2rem" }}
            />
            <img
              src="css-logo.svg"
              width={"10%"}
              style={{ margin: "0 0.2rem" }}
            />
            <img
              src="javascript-logo.svg"
              width={"10%"}
              style={{ margin: "0 0.2rem" }}
            />
            <img
              src="react-logo.svg"
              width={"10%"}
              style={{ margin: "0 0.2rem" }}
            />
            <img
              src="angular-logo.svg"
              width={"10%"}
              style={{ margin: "0 0.2rem" }}
            />
          </Box>
          <br />
          <Box>
            <Typography >
              WORKED WITH
            </Typography>

            <img src="ibm.svg" width={"20%"} style={{ margin: "0 0.5rem" }} />
            <br />
            <img
              src="betfair.svg"
              width={"40%"}
              style={{ margin: "0 0.5rem" }}
            />
          </Box>
          <br />
          <Box className="trainer-text-box">
            <Typography>
              <RocketLaunchIcon style={{ margiRight: "0.2rem" }} />
              Front End Software Developer,
            </Typography>
            <Typography >
              <RocketLaunchIcon style={{ margiRight: "0.2rem" }} />2 years of
              experience in IT
            </Typography>
            <Typography>
              <RocketLaunchIcon style={{ margiRight: "0.2rem" }} />
              Tech enthusiast & Entrepreneur
            </Typography>
          </Box>
            <BookCallButton />
        </Box>
        {/* Trainer 2 */}
        {/* <Box className="trainer-box text-card">
          <img src="c2f-alex.svg" width={"40%"}/>
          <img src="alex-trainer.svg" style={{ width: "80%" }} />

          <Box>
            <img
              src="html-logo.svg"
              width={"10%"}
              style={{ margin: "0 0.2rem" }}
            />
            <img
              src="css-logo.svg"
              width={"10%"}
              style={{ margin: "0 0.2rem" }}
            />
            <img
              src="javascript-logo.svg"
              width={"10%"}
              style={{ margin: "0 0.2rem" }}
            />
            <img
              src="react-logo.svg"
              width={"10%"}
              style={{ margin: "0 0.2rem" }}
            />
            <img
              src="angular-logo.svg"
              width={"10%"}
              style={{ margin: "0 0.2rem" }}
            />
          </Box>
          <br />
          <Box>
            <Typography >
              WORKED WITH
            </Typography>

            <img src="ibm.svg" width={"20%"} style={{ margin: "0 0.5rem" }} />
            <br />
            <img
              src="betfair.svg"
              width={"40%"}
              style={{ margin: "0 0.5rem" }}
            />
          </Box>
          <br />
          <Box >
            <Typography>
              <RocketLaunchIcon style={{ margiRight: "0.2rem" }} />
              Front End Software Developer,
            </Typography>
            <Typography >
              <RocketLaunchIcon style={{ margiRight: "0.2rem" }} />2 years of
              experience in IT
            </Typography>
            <Typography>
              <RocketLaunchIcon style={{ margiRight: "0.2rem" }} />
              Tech enthusiast & Entrepreneur
            </Typography>
          </Box>
            <BookCallButton />
        </Box> */}
       
      </Box>
    </Box>
  );
}
