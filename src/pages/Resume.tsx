import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import {
  ProjectSecHeader,
  ResumeSecEducation,
  ResumeSecHeader,
  ResumeSecSkills,
  ResumeSecWorkExperience,
} from ".";

const Resume: React.FC = () => {
  return (
    <Box ml={{ base: "0px", md: "200px" }}>
      <ResumeSecHeader />
      <SimpleGrid columns={[1, null, 2]} spacing="20px">
        <ResumeSecWorkExperience />

        <Box flex="1" minWidth="0">
          <ResumeSecEducation />
        </Box>
        <Box flex="1" minWidth="0">
          <ResumeSecSkills />
        </Box>
      </SimpleGrid>
      <Box mt={16}>
        {" "}
        <ProjectSecHeader />
      </Box>
    </Box>
  );
};

export default Resume;
