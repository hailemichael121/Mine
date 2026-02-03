import { Heading, HStack, useColorMode } from "@chakra-ui/react";
import React from "react";
import { GiPapers } from "react-icons/gi";

const ServicesSecHeader: React.FC = () => {
  const { colorMode } = useColorMode();
  const baseColor = colorMode === "light" ? "#262626" : "#FFFFFF";
  return (
    <HStack justifyContent={"flex-start"} spacing={3}>
      <Heading
        fontSize={{ base: "30px", md: "50px" }}
        pb={4}
        color={baseColor}
      >
        My Services
      </Heading>
      <GiPapers fontSize={"25px"} color={baseColor} />
    </HStack>
  );
};

export default ServicesSecHeader;
