import { Box, SimpleGrid,Flex } from "@chakra-ui/react";
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
        <Flex
          direction={{ base: 'column', md: 'row' }}
          width="100%"
          justify="space-between"
        >
          <ResumeSecEducation />
          <ResumeSecSkills />
      </Flex>

      </SimpleGrid>
      <Box mt={16}>
        {" "}
        <ProjectSecHeader />
      </Box>
    </Box>
  );
};

export default Resume;
