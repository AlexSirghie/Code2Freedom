import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BookCallButton from "./book-call";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export function Testimonials() {
  return (
    <Box className="testimonial-container">
      <Box className="title-card">
        <img src="testimonials.gif" id="testimonial-title"/>
      </Box>
      {/* 1st Testimonial */}
      <Box className="testimonial-card-box">
        <Box className="testimonial-text-card">
          <Box variant="h3" className="testimonial-title-card">
            <Typography variant="h4" className="testimonial-name-flex">
            <img src="maria.png" width={"20%"} className="testimonial-avatar"/>
              Maria C.</Typography>
            <Typography  color={"#27AE60"}>
              {" "}
              Junior UI Developer{" "}
            </Typography>
          </Box>
          <Typography fontFamily={"monospace"}>
            <FormatQuoteIcon color="primary" />
            What convinced me in the first place to collaborate with Alex was
            his success story of career reconversion. I also come from a
            completely different field (Cartography), with no Front-End
            experience. I trusted him because of the proof he presented. The
            provided learning resources are easy to understand for a beginner. I
            am learning in my own rithm. <br />
            When I needed support the trainer showed availability and patience.
            The way we collaborate plus the feedback Alex provided motivated me
            to not give up whenever I got blocked.
            <FormatQuoteIcon color="primary" />
          </Typography>
        </Box>
      </Box>
      {/* 2nd Testimonial */}
      {/* <Box className="testimonial-card-box">
        <Box className="testimonial-text-card">
          <Box variant="h3" className="testimonial-title-card">
            <Typography variant="h4" className="testimonial-name-flex">
            <img src="c2f-catalin.svg" width={"20%"} />
              Catalin Ilea</Typography>
            <Typography  color={"#27AE60"}>
              {" "}
              Senior DevOps@Betfair{" "}
            </Typography>
          </Box>
          <Typography fontFamily={"monospace"}>
            <FormatQuoteIcon color="primary" />
            What convinced me in the first place to collaborate with Alex was
            his success story of career reconversion. I also come from a
            completely different field (Cartography), with no Front-End
            experience. I trusted him because of the proof he presented. The
            provided learning resources are easy to understand for a beginner. I
            am learning in my own rithm. <br />
            When I needed support the trainer showed availability and patience.
            The way we collaborate plus the feedback Alex provided motivated me
            to not give up whenever I got blocked.
            <FormatQuoteIcon color="primary" />
          </Typography>
        </Box>
      </Box> */}

      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="money-bag-animation.gif" id="testimonial-mb-1" width={"8%"} />
        <div className="testimonial-button">
          <BookCallButton style={{ padding: "3rem 0" }} />
        </div>
        <img src="money-bag-animation.gif" id="testimonial-mb-2" width={"8%"} />
      </Box>
    </Box>
  );
}

export default Testimonials;
