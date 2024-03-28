import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";

const ProfileText = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box width="90%" marginLeft={10}>
        <Text color={colorMode === "dark" ? "black" : "black"}>
          <Heading
            fontFamily="sans-serif"
            pb={20}
            fontWeight="1000"
            fontSize="70px"
          >
            Welcome.
          </Heading>
          My name is
          <Text fontWeight="100" fontSize="70px">
            Yihun Shekuri
          </Text>
          , I'm a front-end developer based in Addis Ababa , Ethiopia.I am
          junior developer. I have developed some educational purpose websites
          from hotel reservation websites to Ecommerce and game hub platforms.
          <Text pt="10px" fontWeight="300" fontStyle="oblique">
            I am Very passionate about devloping cutting-edge,pixel-perfect,
            beautiful interface and intuitively implemented UX.
          </Text>
        </Text>
      </Box>
    </>
  );
};

export default ProfileText;
