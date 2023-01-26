import React from "react";
import { makeStyles } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import BookCallButton from "./book-call";
import Avatar from "@mui/material/Avatar";

// const useStyles = makeStyles((theme) => ({
//   section: {
//     backgroundImage: 'url("nereus-assets/img/bg/pattern1.png")',
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//   },
//   cardHeader: {
//     paddingTop: theme.spacing(3),
//   },
// }));

export function Testimonials(props) {
  //   const classes = useStyles();

  const content = {
    badge: "LOREM IPSUM",
    "header-p1": "Testimonials",
    // 'header-p2': 'You get results',
    description:
      "Integer feugiat massa sapien, vitae tristique metus suscipit nec.",
    option1: "Monthly",
    option2: "Annual",
    "01_title": "Lorem ipsum",
    "01_price": "$9",
    "01_suffix": " / mo",
    "01_benefit1": "3 Emails",
    "01_benefit2": "1 Database",
    "01_benefit3": "Unlimited Domains",
    "01_benefit4": "10 GB Storage",
    "01_primary-action": "Select plan",
    "01_secondary-action": "Learn more",
    "02_title": "Dolor sit amet",
    "02_price": "$49",
    "02_suffix": " / mo",
    "02_benefit1": "6 Emails",
    "02_benefit2": "2 Database",
    "02_benefit3": "Unlimited Domains",
    "02_benefit4": "25 GB Storage",
    "02_primary-action": "Select plan",
    "02_secondary-action": "Learn more",
    "03_title": "Consectuter",
    "03_price": "$499",
    "03_suffix": " / mo",
    "03_benefit1": "9 Emails",
    "03_benefit2": "3 Database",
    "03_benefit3": "Unlimited Domains",
    "03_benefit4": "50 GB Storage",
    "03_primary-action": "Select plan",
    "03_secondary-action": "Learn more",
    ...props.content,
  };

  const [state, setState] = React.useState({
    checkbox: true,
  });

  const handleChange = (event) => {
    setState({ ...state, checkbox: event.target.checked });
  };

  return (
    <section className="">
      <Container className="testimonial-container">
      <Box py={8} className="title-card" width={"100%"}>
        <img src="testimonials.gif" />
      </Box>
        <Container className="testimonial-card-container">
          <Container className="testimonial-text-card">
          
         
            <Typography variant="h3" className="testimonial-title-card"> <img src="c2f-catalin.svg" width={"20%"}/>Catalin</Typography>
            <Typography variant="h5" color={"#27AE60 "}> Software Developer @Betfair </Typography>
            <br/>
            <Typography>
              What convinced me in the first place to collaborate with Alex was his
              success story of career reconversion.
              I also come from a completely different field (Cartography), with no Front-End experience.
              I trusted him because of the proof he presented.
              The provided learning resources are easy to understand for a beginner. 
              I am learning in my own rithm.
              When I needed support the trainer showed availability and patience.
              The way we collaborate plus the feedback Alex provided motivated me to
              not give up whenever I got blocked.
            </Typography>
          </Container>
          <Container className="testimonial-text-card">
            <Typography variant="h3" className="testimonial-title-card"><img src="c2f-catalin.svg" width={"20%"}/>Maria</Typography>
            <Typography variant="h5" color={"#27AE60 "}> Software Developer @Betfair </Typography>
            <br/>
            <Typography>
            What convinced me in the first place to collaborate with Alex was his
              success story of career reconversion.
              I also come from a completely different field (Cartography), with no Front-End experience.
              I trusted him because of the proof he presented.
              The provided learning resources are easy to understand for a beginner. 
              I am learning in my own rithm.
              When I needed support the trainer showed availability and patience.
              The way we collaborate plus the feedback Alex provided motivated me to
              not give up whenever I got blocked.
            </Typography>
          </Container>
          <Container className="testimonial-text-card">
            <Typography variant="h3" className="testimonial-title-card"><img src="c2f-catalin.svg" width={"20%"}/>Elena</Typography>
            <Typography variant="h5" color={"#27AE60 "}> Software Developer @Betfair </Typography>
            <br/>
            <Typography>
            What convinced me in the first place to collaborate with Alex was his
              success story of career reconversion.
              I also come from a completely different field (Cartography), with no Front-End experience.
              I trusted him because of the proof he presented.
              The provided learning resources are easy to understand for a beginner. 
              I am learning in my own rithm.
              When I needed support the trainer showed availability and patience.
              The way we collaborate plus the feedback Alex provided motivated me to
              not give up whenever I got blocked.
            </Typography>
          </Container>
        </Container>
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="money-bag-animation.gif" width={"8%"} />
        <div style={{ margin: "0 4rem" }}>
          <BookCallButton style={{ padding: "3rem 0" }} />
        </div>
        <img src="money-bag-animation.gif" width={"8%"} />
      </Container>
      </Container>
    </section>
  );
}

export default Testimonials;
