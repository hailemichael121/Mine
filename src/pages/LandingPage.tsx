import { Box, useColorMode } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  About,
  Blogs,
  ContactMe,
  NavigationBar,
  Resume,
  Services,
  SideMenu,
} from ".";
import Home from "./Home";
import Footer from "../components/shared/Footer";
import ProjectsCurtain from "../components/projectsSec/ProjectsCurtain";

// Use a div with motion and apply Chakra styles via style
const MotionDiv = motion.div;

const LandingPage = () => {
  const { colorMode } = useColorMode();
  const controlsAbout = useAnimation();
  const controlsContact = useAnimation();

  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const aboutNode = aboutRef.current;
    const contactNode = contactRef.current;

    const aboutObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controlsAbout.start({ opacity: 1, y: 0 });
          } else {
            controlsAbout.start({ opacity: 0, y: 50 }); // Reset when out of view
          }
        });
      },
      { threshold: 0.1 }
    );

    const contactObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controlsContact.start({ opacity: 1, y: 0 });
          } else {
            controlsContact.start({ opacity: 0, y: 50 }); // Reset when out of view
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutNode) aboutObserver.observe(aboutNode);
    if (contactNode) contactObserver.observe(contactNode);

    return () => {
      if (aboutNode) aboutObserver.unobserve(aboutNode);
      if (contactNode) contactObserver.unobserve(contactNode);
    };
  }, [controlsAbout, controlsContact]);

  return (
    <MotionDiv
      style={{
        backgroundColor:
          colorMode === "light"
            ? "var(--chakra-colors-primary)"
            : "var(--chakra-colors-secondary)",
      }}
    >
      <NavigationBar />
      <SideMenu />
      <Box>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <MotionDiv
            ref={aboutRef}
            initial={{ opacity: 0, y: 0 }}
            animate={controlsAbout}
            transition={{ duration: 1 }}
          >
            <About />
          </MotionDiv>
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="resume">
          <Resume />
        </div>
        <div id="projects">
          <ProjectsCurtain />
        </div>
        <div id="blogs">
          <Blogs />
        </div>
        <div id="contacts">
          <MotionDiv
            ref={contactRef}
            initial={{ opacity: 0, y: 50 }}
            animate={controlsContact}
            transition={{ duration: 0.6 }}
          >
            <ContactMe />
          </MotionDiv>
        </div>
        <Footer />
      </Box>
    </MotionDiv>
  );
};

export default LandingPage;
