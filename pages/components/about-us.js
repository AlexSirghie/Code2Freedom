import {
  Card,
  Container,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box
} from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import React from "react";

const AboutUs = () => {
  return (
    <Container
      className="section-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
      }}
      // maxWidth={"100%"}
    >
      <Box py={8} className="text-card" alignItems={"center"}>
        <Box>
        <img src="about-us-animated.gif" />
        </Box>
        <br/>
        <br/>
      <Typography variant="h4" >
      We are a team of tech enthusiasts who want to make a habit from helping others reach their highest career potential in the software development field of work.
<br/>
<br/>
Our goal is to to provide support, guide and enhance our students capabilities in order to optimise their problem solving capabilities and technological know-how.
<br/>
<br/>
We also strongly believe in creating great online communities.
      </Typography>
      </Box>
      {/* <div>
          <Card variant="outlined" style={{color:"white", backgroundColor:"black"}}>{card}</Card>
        </div> */}
    </Container>
  );
};

export default AboutUs;
