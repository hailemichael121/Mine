import { Box, useColorMode } from "@chakra-ui/react";
import {
  About,
  ContactBox,
  NavigationBar,
  Projects,
  Resume,
  Services,
  SideMenu,
} from ".";
import Home from "./Home";

const LandingPage = () => {
  const { colorMode } = useColorMode();

  return (
    <Box bg={colorMode === "light" ? "primary" : "secondary"}>
      <NavigationBar />
      <SideMenu />
      <Box>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="resume">
          <Resume />
        </div>{" "}
        <div id="projects">
          <Projects />
        </div>
        {/* <div id="blogs">...</div>
      ..
       */}
        <div id="contact">
          <ContactBox />
        </div>
      </Box>
    </Box>
  );
};

export default LandingPage;
