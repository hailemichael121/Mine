import { Box, SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";
import {
  ResumeSecEducation,
  ResumeSecHeader,
  ResumeSecSkills,
  ResumeSecWorkExperience,
} from ".";

const Resume: React.FC = () => {
  return (
    <Box maxW="1200px" mx="auto" px={{ base: 5, md: 8 }} py={10}>
      <ResumeSecHeader />

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
    </Box>
  );
};

export default Resume;
