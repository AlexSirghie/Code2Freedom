import {
  Card,
  Container,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import React from "react";
import BookCallButton from "./book-call";
import { useRef } from "react";
import { width } from "@mui/system";

const card = (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#202020",
        color: "white",
        border: "solid gold",
        padding: "3rem",
      }}
      maxWidth={"100%"}
    >
      <Box py={1} px={3}>
        <Typography
          variant="h6"
          style={{ margin: "0 2rem 2rem 2rem", justifyItems: "center" }}
        >
          <img src="we-kickstart.svg" />
        </Typography>
      </Box>
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-arround",
        }}
      >
        <Container className="what-we-do-content">
          <Typography
            variant="h5"
            component="div"
            style={{ color: "#27AE60", marginLeft: "0,7rem" }}
          >
            Who do we work with?
          </Typography>

          <Typography className="what-we-do-text-chunck">
            <HowToRegIcon style={{ color: "#27AE60" }} />
            Anyone who has a laptop & a decent internet connection that is older
            then 18 years old and younger then 45 years.
          </Typography>
          <Typography className="what-we-do-text-chunck">
            <HowToRegIcon style={{ color: "#27AE60" }} />
            We work only with the ones who are willing to put in the hours &
            achieve the learning and career objectives that they comit to
          </Typography>
          <Typography className="what-we-do-text-chunck">
            {/* <span> */}
            <HowToRegIcon style={{ color: "#27AE60" }} />
            {/* </span> */}
            With those who are passionate about technology and those who have
            decent problem solving skills
          </Typography>
          <Typography className="what-we-do-text-chunck">
            <HowToRegIcon style={{ color: "#27AE60" }} />
            Only with those who understand that this is a long therm commitment
          </Typography>
        </Container>
        <Container className="what-we-do-content">
          <Typography
            variant="h5"
            component="div"
            style={{ color: "#27AE60", marginLeft: "1rem" }}
          >
            How do we help you?
          </Typography>
          <Typography className="what-we-do-text-chunck">
            <HowToRegIcon style={{ color: "#27AE60" }} />
            We will teach you the best technologies and practices for Front-End
            development
          </Typography>
          <Typography className="what-we-do-text-chunck">
            <HowToRegIcon style={{ color: "#27AE60" }} />
            We will help you get a IT job so you don’t have to work strenuous or
            boring jobs.
          </Typography>
          <Typography className="what-we-do-text-chunck">
            <HowToRegIcon style={{ color: "#27AE60" }} />
            By joining our online community of like minded people you will boost
            your network and knowledge.
          </Typography>
          <Typography className="what-we-do-text-chunck">
            <HowToRegIcon style={{ color: "#27AE60" }} />
            Our mentors will provide support for any problem you encounter in
            your coding & job-hunting journey
          </Typography>
        </Container>
      </Container>

      <Container style={{display:"flex", flexDirection:"row", alignItems:"center",justifyContent:"center"}}>
        <img src="money-grow.gif" width={"10%"} />
        <div style={{margin:"0 4rem"}}>
        <BookCallButton style={{  padding: "3rem 0" }}/>
        </div>
        <img src="money-grow.gif"  width={"10%"} my={2}/>
      </Container>
    </Container>
);

const WhatWeDo = () => {
  return (
    <Container
      className="section-container heroContainer"
      // maxWidth="100%"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "10rem",
      }}
    >
      <div>
        <Card>{card}</Card>
      </div>
    </Container>

  );
};

export default WhatWeDo;
