import { Box, Image, useColorMode, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

const AboutSecImage: React.FC = () => {
  const { colorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    !isMobile && (
      <Box
        borderTopLeftRadius="80%"
        borderBottomLeftRadius="40%"
        borderTopRightRadius="50px"
        borderBottomRightRadius="150px"
        overflow="hidden"
        boxShadow="lg"
        width="360px"
        height="340px"
        border={
          colorMode === "light" ? "solid 10px #FFFFFF" : "solid 10px #121212"
        }
      >
        <Image
          backgroundColor="#F4F1F1"
          borderRadius="30%"
          borderTopLeftRadius="20px"
          borderBottomLeftRadius="20px"
          borderTopRightRadius="40px"
          borderBottomRightRadius="90px"
          objectFit="cover"
          boxSize="min-content"
          src="/images/ProfilePicture.png"
          alt="Profile Photo"
        />
      </Box>
    )
  );
};

export default AboutSecImage;
