import { Button, useColorMode } from "@chakra-ui/react";
import React from "react";

const HomeResumeBtn: React.FC = () => {
  const { colorMode } = useColorMode();

  const handleDownloadResume = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=1ozahY5lwU4uWIA2vOpeef5ThVuP6tLsd",
      "_blank"
    );
  };

  return (
    <Button
      _hover={{
        backgroundColor: "#30F2F2",
        color: "black",
        shadow: "inset 5px 5px 5px #E47580",
      }}
      backgroundColor={colorMode === "light" ? "primary" : "secondary"}
      border="solid 1px #30F2F2"
      borderRadius={{ base: "20px", md: "30%" }}
      shadow="0px 5px 10px #E47580"
      width={{ base: "full", md: "auto" }}
      onClick={handleDownloadResume}
    >
      Download Resume
    </Button>
  );
};

export default HomeResumeBtn;
