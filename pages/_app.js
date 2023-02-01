import "../styles/globals.css";
import Hero from "./components/hero";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
import OurTeam from "./components/our-team";
import WhatWeDo from "./components/what-we-do";
import AboutUs from "./components/about-us";
import { useRef, useState } from "react";
import { Box } from "@mui/material";



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
    {/* NAV */}
      <Box  className="nav">
        {/* Logo */}
          <Box>
            <img
              src="c2f-nav-logo.svg"
              className="c2f-nav-logo"
              onClick={() => scrollToSection(hero)}
            />
          </Box>
            {/* Burger menu */}
            {/* <Box className="burger-menu display-burger" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
            </Box> */}
            {/* Nav Bar */}
            <Box>
              <div>
                <ul
                  className="nav-menu"
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
                    Our Team
                  </li>
                </ul>
              </div>
            </Box>
      </Box>
      {/* Sections */}
      <section className="section-column-flex" id="hero" ref={hero}>
        <Hero />
      </section>
      <section className="section-column-flex" id="what-we-do" ref={whatWeDo}>
        <WhatWeDo />
      </section>
      <section className="section-column-flex" id="about-us" ref={about}>
        <AboutUs />
      </section>
      <section className="section-column-flex" id="testimonials" ref={testimonials}>
        <Testimonials />
      </section>
      <section className="section-column-flex" id="team" ref={team}>
        <OurTeam />
      </section>

      <Footer />
    </>
  );
}
