import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding="10px"
      borderRadius="5px"
    >
      <Text fontFamily="cursive" fontSize="1px" textAlign="center">
        Copyright © 2024 all rights reserved, Developed by Yihun S
      </Text>
    </Box>
  );
};

export default Footer;
