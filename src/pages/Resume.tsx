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
  gap="20px"
  width="100%"
  align="stretch" // stretch makes child boxes take full height if needed
>
  <Box flex={1} width="100%">
    <ResumeSecEducation />
  </Box>
  <Box flex={1} width="100%">
    <ResumeSecSkills />
  </Box>
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
