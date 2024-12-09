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
        <Text fontSize="xx-small">
          Design Copied From{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://chapimenge.com/"}
          >
            <span style={{ fontSize: "5px", color: "#205CDA" }}>
              Temekin Mengstu(Hapi Mengi)
            </span>
          </a>
        </Text>
      </Text>
    </Box>
  );
};

export default Footer;
