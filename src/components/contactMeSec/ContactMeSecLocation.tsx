import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { CiLocationOn } from "react-icons/ci";

const ContactMeSecLocation: React.FC = () => {
  return (
    <>
      <Box width={"100%"}>
        <Flex align={"center"}>
          <CiLocationOn />
          <Text pl={8}>Addis Abeba,Ethiopia</Text>
        </Flex>
      </Box>
    </>
  );
};

export default ContactMeSecLocation;
