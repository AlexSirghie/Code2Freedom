import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import BookCallButton from "./book-call";

const Hero = (props) => {

  const content = {
    "header-p1": "From 0 to Front End Job in 6 months !",
    "header-p2": "HTML | CSS | JavaScript | React | Angular",
    "header-p3": "We help you to find your first FE job in 6 months",
    "header-p4":
      "Book a free consultance call to see if you are a fit for our coaching program You want great results?",
    "row-1": "HTML | CSS | JavaScript | React | Angular",
    "row-2":
      "Our team of experts use a profesional methodology to help you transition into coding.",
    description1:
      "Code2Freedom is a coaching program with a concise roadmap and flourishing online community of Front End Developers.",
    description2:
      "You will learn the best Front-End technologies and techniques from our experienced tutors.",
    description3:
      "Join us if you wish to secure a career in IT and earn a good income!",
    pattern: "nereus-assets/img/bg/pattern2.png",
    ...props.content,
  };

  return (
    <div className="hero-section">
      <Box className="hero-box">
        {/* Left Hero Content */}
        <Box className="hero-module-container-left">
          <Typography variant="overline" color="white">
            {content["badge"]}
          </Typography>
          <Typography variant="h3" component="h1" gutterBottom={true}>
            <img
              src="from-0-to-fej.gif"
              style={{ width: "100%", marginBottom: "1rem" }}
            />
          </Typography>
          <Typography variant="h5" component="tittle" color="white"fontFamily={"monospace"}>
            {content["description1"]}
          </Typography>
          <br />
          <br />
          <Typography variant="h5" component="tittle" color="white"fontFamily={"monospace"}>
            {content["description2"]}
          </Typography>
          <br />
          <br />
          <Typography variant="h5" component="tittle" color="white" fontFamily={"monospace"}>
            {content["description3"]}
          </Typography>
          <br />
          <br />
        </Box>

        {/* Right Hero Content */}
        <Box className="hero-module-container-right">
        <Box className="hero-right-box">
          <img src="c2f-rocket-green-starz.svg" className="star-rocket" />
          <img src="code.svg" style={{ width: "70%" }} />

          <img src="network.svg" style={{ width: "60%" }} />

          <img src="job-hunt.svg" style={{ width: "50%" }} />

            <BookCallButton />
        </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Hero;
