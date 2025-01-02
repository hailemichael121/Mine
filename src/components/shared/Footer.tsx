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
      <Text fontFamily="monospace" fontSize="14px" textAlign="center">
        Made with <span>❤</span> By Yihun Shekuri
      </Text>
    </Box>
  );
};

export default Footer;
