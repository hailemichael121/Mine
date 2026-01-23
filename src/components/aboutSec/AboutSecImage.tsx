import { Box, Image, useColorMode, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

const AboutSecImage: React.FC = () => {
  const { colorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });

  if (isMobile) return null;

  return (
    <Box
      width="360px"
      height="340px"
      overflow="hidden"
      boxShadow="lg"
      borderTopLeftRadius="80%"
      borderBottomLeftRadius="40%"
      borderTopRightRadius="50px"
      borderBottomRightRadius="150px"
      border={
        colorMode === "light" ? "solid 10px #FFFFFF" : "solid 10px #121212"
      }
    >
      <Image
        src="/images/ProfilePicture-2.png"
        alt="Profile Photo"
        width="100%"
        height="100%"
        objectFit="cover" // 🔥 THIS IS THE KEY
        objectPosition="center"
      />
    </Box>
  );
};

export default AboutSecImage;
