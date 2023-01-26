import React from "react";
// import makeStyles from '@mui/material/styles';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import BookCallButton from "./book-call";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { positions } from "@mui/system";
// import TaskAltOutlinedIcon from "./"

// import DnsIcon from '@mui/material/Dns';
// import TapAndPlayIcon from '@mui/material/TapAndPlay';

const Hero = (props) => {
  // const classes = useStyles();

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
      "Code2Freedom is a coaching program with a concise roadmap and flourishing online community to help you learn coding",
    description2: "You will learn the best Front-End technologies and techniques from our experienced tutors",
    description3:
      "Join us if you wish to secure a career in IT and earn a good income!",
    pattern: "nereus-assets/img/bg/pattern2.png",
    ...props.content,
  };

  return (
    <section>
      <Container maxWidth="lg" className="heroContainer">
        <Box pt={10} pb={12} style={{margin:"0 0 5rem   0"}}>
          <Grid container spacing={4} alignItems={"center"}>
            <Grid item xs={15} md={7}>
              <Container style={{padding:"3rem"}}>

              <Typography variant="overline" color="white">
                {content["badge"]}
              </Typography>
              <Typography variant="h3" component="h1" gutterBottom={true}>
              <img src="from-0-to-fej.gif" style={{width:"100%", marginBottom:"1rem"}}/>
                {/* <Typography className="secondary-yellow" variant="h2" fontFamily={"sans-serif"} fontWeight={"bold"} component="span">
                  {content["header-p1"]}{" "}
                </Typography> */}
              </Typography>
              <Typography variant="h5" component="tittle" color="white">
                {content["description1"]}
              </Typography>
              <br />
              <br />
              <Typography variant="h5" component="tittle" color="white">
                {content["description2"]}
              </Typography>
              <br />
              <br />
              <Typography variant="h5" component="tittle" color="white">
                {content["description3"]}
              </Typography>
              <br />
              <br />
              
              </Container>
            </Grid>
            <Grid item xs={12} md={5}>
              <div className="hero-right-container">
                {/* <img src="coin-animation.gif" style={{zIndex:"-5", width:"50%",positions:"relative", top:"0"}}/> */}
                  <img
                    src="c2f-rocket-green-starz.svg"
                    className="star-rocket"
                  />
                  <img src="code.svg" style={{width:"70%"}}/>
                   
                    <img src="network.svg" style={{width:"60%"}}/>
                   
                    <img src="job-hunt.svg" style={{width:"50%"}}/>
                    
                <div style={{padding:"3rem 0"}}>
                  <BookCallButton />
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default Hero;
