import React from "react";
import { makeStyles, fade } from "@mui/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

import ApartmentIcon from "@mui/material";
import DnsIcon from "@mui/material";
import TapAndPlayIcon from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import BookCallButton from "./book-call";
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';

const useStyles = makeStyles(() => ({
  features: {
    paddingTop: "2rem",
    paddingLeft: "2rem",
    borderLeftWidth: 1,
    borderLeftStyle: "solid",
  },
  iconWrapper: {
    backgroundColor: "white",
  },
}));

export function IfForYou(props) {
  const classes = useStyles();

  const content = {
    badge: "LOREM IPSUM",
    "header-p1": "Wondering if C2f is for?",
    "header-p2": "If you check the boxes on the right, call us!",
    description:
      "Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus. Aenean et ornare erat.",
    "primary-action": "Action",
    "col1-header": "Lorem ipsum dolor sit amet",
    "col1-desc":
      "Libero tincidunt vulputate fermentum, nisi nulla cursus turpis.",
    "col2-header": "Lorem ipsum dolor sit amet",
    "col2-desc":
      "Libero tincidunt vulputate fermentum, nisi nulla cursus turpis.",
    "col3-header": "Lorem ipsum dolor sit amet",
    "col3-desc":
      "Libero tincidunt vulputate fermentum, nisi nulla cursus turpis.",
    ...props.content,
  };

  return (
    // <div>HDHASSA</div>
    <section>
      <Container maxWidth="lg">
        <Box pt={10} pb={12}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={7}>
              <Typography variant="overline" color="textSecondary">
                {content["badge"]}
              </Typography>
              <Typography variant="h3" component="h2" gutterBottom={true}>
                <Typography color="primary" variant="h3" component="span">
                  {content["header-p1"]}{" "}
                </Typography>
                <Typography variant="h3" component="span">
                  {content["header-p2"]}
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                color="textSecondary"
              >
                {content["description"]}
              </Typography>
              <Box mt={3}>
                <BookCallButton />
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <div className={classes.features}>
                <Box display="flex" mb={5}>
                  <Box pr={5}>
                    <Avatar className={classes.iconWrapper} variant="rounded">
                      <TaskAltOutlinedIcon color="primary" />
                    </Avatar>
                  </Box>
                  <div>
                    <Typography variant="h6" component="h3" gutterBottom={true}>
                      {content["col1-header"]}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      color="textSecondary"
                    >
                      {content["col1-desc"]}
                    </Typography>
                  </div>
                </Box>
                <Box display="flex" mb={5}>
                  <Box pr={5}>
                    <Avatar className={classes.iconWrapper} variant="rounded">
                      <TaskAltOutlinedIcon color="primary" />
                    </Avatar>
                  </Box>
                  <div>
                    <Typography variant="h6" component="h3" gutterBottom={true}>
                      {content["col1-header"]}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      color="textSecondary"
                    >
                      {content["col1-desc"]}
                    </Typography>
                  </div>
                </Box>
                <Box display="flex">
                  <Box pr={5}>
                    <Avatar className={classes.iconWrapper} variant="rounded">
                      <TaskAltOutlinedIcon color="primary" />
                    </Avatar>
                  </Box>
                  <div>
                    <Typography variant="h6" component="h3" gutterBottom={true}>
                      {content["col1-header"]}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      color="textSecondary"
                    >
                      {content["col1-desc"]}
                    </Typography>
                  </div>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}

export default IfForYou;
