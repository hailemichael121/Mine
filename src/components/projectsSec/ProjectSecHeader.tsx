import { Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { GiPapers } from "react-icons/gi";

const ProjectSecHeader: React.FC = () => {
  return (
    <HStack justifyContent={"flex-start"}>
      <Heading
        className="project-sec-header"
        alignItems="center"
        fontSize={"50px"}
        pb={10}
      >
        Top Projects
      </Heading>
      <GiPapers
        style={{
          marginTop: "-50px",
        }}
        fontSize={"25px"}
      />
    </HStack>
  );
};

export default ProjectSecHeader;
