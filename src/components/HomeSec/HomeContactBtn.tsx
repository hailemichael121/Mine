import { Button, useColorMode } from "@chakra-ui/react";
import React from "react";

const HomeContactBtn: React.FC = () => {
  const { colorMode } = useColorMode();
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      border="solid 1px #30F2F2"
      borderRadius={{ base: "20px", md: "30% 12px 45px" }}
      _hover={{
        backgroundColor: "#E8FCCF",
        color: "black",
        shadow: "none",
      }}
      shadow={
        colorMode === "dark" ? "0px 5px 10px #30F2F2" : "0px 5px 10px #E47580"
      }
      backgroundColor={colorMode === "light" ? "primary" : "secondary"}
      width={{ base: "full", md: "auto" }}
      onClick={() => scrollToSection("contacts")}
    >
      Contact
    </Button>
  );
};

export default HomeContactBtn;
