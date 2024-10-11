import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import { ServiceBox, ServicesSecHeader } from ".";

const Services: React.FC = () => {
  return (
    <Box
      p={{ base: 6, md: 20 }}
      display={{ base: "none", md: "block" }} // Hide on mobile (base), visible on tablets and up (md)
    >
      <VStack align={"start"} pl={{ base: 4, md: 10 }}>
        <ServicesSecHeader />
        <ServiceBox />
      </VStack>
    </Box>
  );
};

export default Services;
