import { Flex, Box, Link } from "@chakra-ui/react";
import React from "react";
import { TfiEmail } from "react-icons/tfi";

const ContactMeEmail: React.FC = () => {
  return (
    <Box width={"100%"}>
      <Flex align={"center"}>
        <TfiEmail />
        <Link
          color={"#0F68F6"}
          target="_blank"
          rel="noopener noreferrer"
          href={"mailto:yihunaashe@gmail.com"}
          pl={8}
          as={"p"}
          fontSize={"large"}
        >
          Yihunaashe@gmail.com
        </Link>
      </Flex>
    </Box>
  );
};

export default ContactMeEmail;
