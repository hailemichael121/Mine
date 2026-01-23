import { Box, Image, useColorMode, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

const HomeProfilePhoto: React.FC = () => {
  const { colorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      borderTopLeftRadius={{ base: "50px", md: "30px" }}
      borderBottomLeftRadius={{ base: "150px", md: "200px" }}
      borderTopRightRadius={{ base: "40px", md: "50px" }}
      borderBottomRightRadius={{ base: "120px", md: "150px" }}
      overflow="hidden"
      boxShadow="md"
      width={{ base: "90%", sm: "70%", md: "380px" }}
      height={{ base: "340px", md: "340px" }} // Keep consistent height
      border={colorMode === "light" ? "solid 5px #FFFFFF" : "solid 5px #222222"}
      mx="auto"
    >
      <Image
        src={
          isMobile
            ? "/images/ProfilePicture-2.png"
            : "/images/ProfilePicture.png"
        }
        alt="Profile Photo"
        width="100%"
        height="100%"
        objectFit="cover"
        display="block"
      />
    </Box>
  );
};

export default HomeProfilePhoto;
