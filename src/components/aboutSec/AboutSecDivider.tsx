import { AbsoluteCenter, Box, Divider, useColorMode } from "@chakra-ui/react";
import React from "react";

const AboutSecDivider: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Box position="relative" width="70%" padding={5}>
      <Divider bg="#30F2F2" h="2px" />
      <AbsoluteCenter
        bgColor={colorMode === "dark" ? "#222222" : "#FFFFFF"}
        px="50px"
        fontSize="20px"
        as="b"
      >
        My Skills
      </AbsoluteCenter>
    </Box>
  );
};

export default AboutSecDivider;
