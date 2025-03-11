import {
  Box,
  useColorMode,
  HStack,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import {
  AboutMeParagraph,
  AboutSecDivider,
  AboutSecHeader,
  AboutSecImage,
  AboutSecPersonalDetails,
  AboutSecSkills,
} from ".";

const About: React.FC = () => {
  const { colorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <VStack
      bgColor={colorMode === "dark" ? "#222222" : "#FFFFFF"}
      spacing={6}
      align="center"
      p={5}
    >
      <HStack
        spacing={6}
        justifyContent="center"
        align="flex-start"
        direction={isMobile ? "column" : "row"}
        w="100%"
      >
        <VStack spacing={4} w={isMobile ? "100%" : "50%"} align="flex-start">
          <AboutSecHeader />
          <AboutMeParagraph />
          <Box p={10}>
            <AboutSecPersonalDetails />
          </Box>
        </VStack>
        {!isMobile && (
          <Box>
            <AboutSecImage />
          </Box>
        )}
      </HStack>
      <AboutSecDivider />
      <AboutSecSkills />
    </VStack>
  );
};

export default About;
