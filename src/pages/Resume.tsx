import { Box, SimpleGrid, VStack, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import {
  ResumeSecEducation,
  ResumeSecHeader,
  ResumeSecSkills,
  ResumeSecWorkExperience,
} from ".";

const Resume: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  return (
    <Box maxW="1200px" mx="auto" px={{ base: 5, md: 8 }} py={10}>
      <ResumeSecHeader />

      {isMobile ? (
        <VStack spacing={6} align="stretch">
          <Box
            display="flex"
            gap={4}
            overflowX="auto"
            scrollSnapType="x mandatory"
            pb={2}
            sx={{
              "& > *": {
                flex: "0 0 85%",
                scrollSnapAlign: "center",
              },
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            <ResumeSecWorkExperience />

            <ResumeSecEducation />

            <ResumeSecSkills />
          </Box>
        </VStack>
      ) : (
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={16}
          alignItems="flex-start"
        >
          {/* Left Column */}
          <VStack spacing={8} align="stretch">
            <ResumeSecWorkExperience />
          </VStack>

          {/* Right Column */}
          <VStack spacing={8} align="stretch">
            <ResumeSecEducation />
            <ResumeSecSkills />
            {/* Add other sections here if needed */}
          </VStack>
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Resume;
