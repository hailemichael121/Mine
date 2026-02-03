import { Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { GiPapers } from "react-icons/gi";

const ServicesSecHeader: React.FC = () => {
  return (
    <HStack justifyContent={"flex-start"} ml={"180px"} spacing={3}>
      <Heading fontSize={{ base: "30px", md: "50px" }} pb={4}>
        My Services
      </Heading>
      <GiPapers fontSize={"25px"} />
    </HStack>
  );
};

export default ServicesSecHeader;
