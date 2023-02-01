import { Box, Typography } from "@mui/material";
import React from "react";

const AboutUs = () => {
  return (
    <Box className="section-box">
      <Box className="text-card about-us">
        <Box>
          <img src="about-us-animated.gif" id="about-us-title"/>
        </Box>
        <br />
        <br />
        <Typography variant="h5" fontFamily={"monospace"}>
          We are a team of tech enthusiasts who want to make a habit from
          helping others reach their highest career potential in the software
          development field of work.
          <br />
          <br />
          Our goal is to to provide support, guide and enhance our students
          capabilities in order to optimise their problem solving capabilities
          and technological know-how.
          <br />
          <br />
          We also strongly believe in creating great online communities.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutUs;
