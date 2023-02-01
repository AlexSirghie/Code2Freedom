import {
  Box,
  Typography,
} from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import React from "react";
import BookCallButton from "./book-call";

const WhatWeDo = () => {
  return (
    <Box
      className="section-box">
      <Box className="w-w-d-box">

        {/* w-w-d title */}
          <img src="we-kickstart.svg" id="w-w-d-title"/>
        {/* w-w-d- text chunks */}
        <Box className="w-w-d-flex">
          <Box className="w-w-d-content">
            <Typography
              variant="h5"
              component="div"
              className="w-w-d-content-title"
            >
              Who do we work with?
            </Typography>

            <Typography className="what-we-do-text-chunck" fontFamily={"monospace"}>
              <HowToRegIcon className="w-w-d-icon" />
              Anyone who has a laptop & a decent internet connection that is
              older then 18 years old and younger then 45 years.
            </Typography>
            <Typography className="what-we-do-text-chunck"fontFamily={"monospace"}>
              <HowToRegIcon className="w-w-d-icon" />
              We work only with the ones who are willing to put in the hours &
              achieve the learning and career objectives that they comit to
            </Typography>
            <Typography className="what-we-do-text-chunck"fontFamily={"monospace"}>
              {/* <span> */}
              <HowToRegIcon className="w-w-d-icon" />
              {/* </span> */}
              With those who are passionate about technology and those who have
              decent problem solving skills
            </Typography>
            <Typography className="what-we-do-text-chunck"fontFamily={"monospace"}>
              <HowToRegIcon className="w-w-d-icon"/>
              Only with those who understand that this is a long therm
              commitment
            </Typography>
          </Box>
          <Box className="w-w-d-content">
            <Typography
              variant="h5"
              component="div"
              className="w-w-d-content-title"
            >
              How do we help you?
            </Typography>
            <Typography className="what-we-do-text-chunck"fontFamily={"monospace"}>
              <HowToRegIcon className="w-w-d-icon"/>
              We will teach you the best technologies and practices for
              Front-End development
            </Typography>
            <Typography className="what-we-do-text-chunck"fontFamily={"monospace"}>
              <HowToRegIcon className="w-w-d-icon"/>
              We will help you get a IT job so you don’t have to work strenuous
              or boring jobs.
            </Typography>
            <Typography className="what-we-do-text-chunck"fontFamily={"monospace"}>
              <HowToRegIcon className="w-w-d-icon"/>
              By joining our online community of like minded people you will
              boost your network and knowledge.
            </Typography>
            <Typography className="what-we-do-text-chunck"fontFamily={"monospace"}>
              <HowToRegIcon className="w-w-d-icon"/>
              Our mentors will provide support for any problem you encounter in
              your coding & job-hunting journey
            </Typography>
          </Box>
        </Box>

        {/* Button area */}
        <Box
         className="button-Box"
        >
          <img src="money-grow.gif" className="money-grow" id="money-grow-1"/>
          <div className="w-w-d-button-spacer">
            <BookCallButton/>
          </div>
          <img src="money-grow.gif" className="money-grow" id="money-grow-2" />
        </Box>
      </Box>
    </Box>
  );
};

export default WhatWeDo;
