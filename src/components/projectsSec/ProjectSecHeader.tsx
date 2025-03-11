import { Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { GiPapers } from "react-icons/gi";
import { motion } from "framer-motion";

const ProjectSecHeader: React.FC = () => {
  return (
    <HStack justifyContent={"flex-start"}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Heading
          className="project-sec-header"
          alignItems="center"
          fontSize={"50px"}
          pb={10}
        >
          Top Projects
        </Heading>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <GiPapers
          style={{
            marginTop: "-50px",
          }}
          fontSize={"25px"}
        />
      </motion.div>
    </HStack>
  );
};

export default ProjectSecHeader;
