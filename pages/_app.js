import "../styles/globals.css";
import ResponsiveAppBar from "./components/nav";
import Hero from "./components/hero";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
import { IfForYou } from "./components/if-4-u";
import OurTeam from "./components/our-team";
import WhatWeDo from "./components/what-we-do";
import AboutUs from "./components/about-us";
import { aboutSection } from "./components/nav";
import { useRef, useState } from "react";
import { AppBar, Container, Toolbar, Box } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "gray",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function App({ Component }) {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const whatWeDo = useRef(null);
  const about = useRef(null);
  const testimonials = useRef(null);
  const team = useRef(null);
  const hero = useRef(null);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <AppBar position="fixed" className="nav-bar">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img
              src="c2f-nav-logo.svg"
              className="c2f-nav-logo"
              onClick={() => scrollToSection(hero)}
            />
            <div className="burger-menu display-burger" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            <Box>
              <div class="nav">
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "2rem",
                  }}
                >
                  <li
                    className="nav-btn"
                    onClick={() => scrollToSection(whatWeDo)}
                  >
                    What We Do
                  </li>
                  <li
                    className="nav-btn"
                    onClick={() => scrollToSection(about)}
                  >
                    About Us
                  </li>
                  <li
                    className="nav-btn"
                    onClick={() => scrollToSection(testimonials)}
                  >
                    Testimonials
                  </li>
                  <li className="nav-btn" onClick={() => scrollToSection(team)}>
                    about
                  </li>
                </ul>
              </div>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <section id="hero" ref={hero}>
        <Hero />
      </section>
      <section id="what-we-do" ref={whatWeDo}>
        <WhatWeDo />
      </section>
      <section id="about-us" ref={about}>
        <AboutUs />
      </section>
      <section id="testimonials" ref={testimonials}>
        <Testimonials />
      </section>
      <section id="team" ref={team}>
        <OurTeam />
      </section>

      <Footer />
    </>
  );
}
