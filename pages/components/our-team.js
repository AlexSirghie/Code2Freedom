import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { margin, padding } from "@mui/system";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BookCallButton from "./book-call";
import SouthEastOutlinedIcon from '@mui/icons-material/SouthEastOutlined';
import SouthWestOutlinedIcon from '@mui/icons-material/SouthWestOutlined';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const cards = [1, 2];

// const theme = createTheme();

export default function OurTeam() {
  return (
    <Container
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box py={8} className="title-card" width={"100%"}>
        <img src="team.gif" width={"50%"}/>
      </Box>
      <Container
        className="trainer-card"
        style={{ justifyItems: "center", alignItems: "center" }}
      >
        <Grid className="trainer-box text-card" xs>
          <Avatar
            sx={{
              width: "50%",
              height: "50%",
            }}
            src="c2f-alex.svg"
          />
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
           
          <Typography variant="h6" alignItems={"center"}>
          <SouthEastOutlinedIcon/>WORKED WITH<SouthWestOutlinedIcon/>
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
          <Box alignContent={"flex-start"}>
            <Typography variant="h6" alignContent={"center"}>
              <RocketLaunchIcon style={{ margin: "0.2rem" }} />
              Front End Software Developer,
            </Typography>
            <Typography variant="h6">
              <RocketLaunchIcon style={{ margin: "0.2rem" }} />2 years of
              experience in IT
            </Typography>
            <Typography variant="h6">
              <RocketLaunchIcon style={{ margin: "0.2rem" }} />
              Tech enthusiast & Entrepreneur
            </Typography>
          </Box>
          <Box marginTop={3} width={"100%"}>
            <BookCallButton style={{ width: "50%", marginTop: "2rem" }} />
          </Box>
        </Grid>
        <Grid className="trainer-box text-card" xs>
          <Avatar
            sx={{
              width: "50%",
              height: "50%",
            }}
            src="c2f-alex.svg"
          />
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
           
          <Typography variant="h6" alignItems={"center"}>
          <SouthEastOutlinedIcon/>WORKED WITH<SouthWestOutlinedIcon/>
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
          <Box alignContent={"flex-start"}>
            <Typography variant="h6" alignContent={"center"}>
              <RocketLaunchIcon style={{ margin: "0.2rem" }} />
              Front End Software Developer,
            </Typography>
            <Typography variant="h6">
              <RocketLaunchIcon style={{ margin: "0.2rem" }} />2 years of
              experience in IT
            </Typography>
            <Typography variant="h6">
              <RocketLaunchIcon style={{ margin: "0.2rem" }} />
              Tech enthusiast & Entrepreneur
            </Typography>
          </Box>
          <Box marginTop={3} width={"100%"}>
            <BookCallButton style={{ width: "50%", marginTop: "2rem" }} />
          </Box>
        </Grid>
      </Container>
    </Container>
    // <ThemeProvider
    //   theme={theme}

    // >
    //   <CssBaseline />
    //   <div style={{ display: "flex", flexDirection: "row", justifyContent:"center" }}>
    //     <div>
    //       <Container sx={{ py: 8 }} maxWidth="md">
    //         {/* End hero unit */}
    //         <Grid container spacing={4}>
    //           <Grid item xs={12} sm={6} md={4}>
    //             <Card
    //               sx={{
    //                 height: "100%",
    //                 display: "flex",
    //                 flexDirection: "column",
    //               }}
    //             >
    //                 <Avatar style={{width:"150px", height:"150px"}}alt="Remy Sharp" image="../../public/c2f-alex.svg" />
    //               {/* <CardMedia
    //                 component="img"
    //                 sx={{
    //                   // 16:9
    //                   pt: "56.25%",
    //                 }}
    //                 // image="https://source.unsplash.com/random"
    //                 alt="random"
    //               /> */}
    //               <CardContent sx={{ flexGrow: 1 }}>
    //                 <Typography gutterBottom variant="h5" component="h2">
    //                   Heading
    //                 </Typography>
    //                 <Typography>
    //                   This is a media card. You can use this section to describe
    //                   the content.
    //                 </Typography>
    //               </CardContent>
    //               <CardActions>
    //                 {/* <Button size="small">View</Button>
    //                 <Button size="small">Edit</Button> */}
    //               </CardActions>
    //             </Card>
    //           </Grid>
    //         </Grid>
    //       </Container>
    //     </div>
    //     <div>
    //       <Container sx={{ py: 8 }} maxWidth="md">
    //         {/* End hero unit */}
    //         <Grid container spacing={4}>
    //           <Grid item xs={12} sm={6} md={4}>
    //             <Card
    //               sx={{
    //                 height: "100%",
    //                 display: "flex",
    //                 flexDirection: "column",
    //               }}
    //             >
    //               <CardMedia
    //                 component="img"
    //                 sx={{
    //                   // 16:9
    //                   pt: "56.25%",
    //                 }}
    //                 image="https://source.unsplash.com/random"
    //                 alt="random"
    //               />
    //               <CardContent sx={{ flexGrow: 1 }}>
    //                 <Typography gutterBottom variant="h5" component="h2">
    //                   Heading
    //                 </Typography>
    //                 <Typography>
    //                   This is a media card. You can use this section to describe
    //                   the content.
    //                 </Typography>
    //               </CardContent>
    //               <CardActions>
    //                 {/* <Button size="small">View</Button>
    //                 <Button size="small">Edit</Button> */}
    //               </CardActions>
    //             </Card>
    //           </Grid>
    //         </Grid>
    //       </Container>
    //     </div>
    //   </div>
    // </ThemeProvider>
  );
}
