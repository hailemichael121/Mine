import { Box, Button, useColorMode } from "@chakra-ui/react";
import React from "react";

const NavMenu: React.FC = () => {
  const { colorMode } = useColorMode();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box pl={20}>
      <Button
        borderRadius={"90px"}
        borderBottomLeftRadius={"95px"}
        borderTopRightRadius={"200px"}
        width="150px"
        transition="0.1s"
        color={colorMode === "dark" ? "#D5D5D5" : "black"}
        fontSize={"15px"}
        onClick={() => scrollToSection("about")}
        backgroundColor="transparent"
        _hover={{
          color: " #30F2F2",
          backgroundColor: "transparent",
        }}
      >
        About
      </Button>
      <Button
        borderRadius={"30%"}
        borderBottomLeftRadius={"25px"}
        borderTopRightRadius={"20px"}
        color={colorMode === "dark" ? "#D5D5D5" : "black"}
        fontSize={"15px"}
        onClick={() => scrollToSection("projects")}
        width="150px"
        transition="0.1s"
        backgroundColor="transparent"
        _hover={{
          color: " #30F2F2",
          backgroundColor: "transparent",
        }}
      >
        Projects
      </Button>

      <Button
        borderRadius={"30%"}
        borderBottomLeftRadius={"25px"}
        borderTopRightRadius={"20px"}
        color={colorMode === "dark" ? "#D5D5D5" : "black"}
        fontSize={"15px"}
        onClick={() => scrollToSection("contact")}
        width="150px"
        backgroundColor="transparent"
        transition="0.1s"
        _hover={{
          color: " #30F2F2",
          backgroundColor: "transparent",
        }}
      >
        Contact
      </Button>
    </Box>
  );
};

export default NavMenu;
