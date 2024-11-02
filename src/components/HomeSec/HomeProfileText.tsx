import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";

const HomeProfileText = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      width={{ base: "70%", md: "80%" }}
      marginX="auto"
      color={colorMode === "dark" ? "White" : "black"}
      textAlign={{ base: "center", md: "left" }}
      pt={"70px"}
    >
      <Heading
        fontFamily="monospace"
        pb={5}
        as={"h2"}
        fontSize={{ base: "30px", md: "50px" }}
      >
        👋 Hi,
      </Heading>
      <Text fontSize={{ base: "small", md: "lg" }}>My name is</Text>
      <Text
        as={"h1"}
        fontSize={{ base: "40px", md: "50px" }}
        fontFamily={"monospace"}
      >
        Yihun Shekuri
      </Text>
      <Text
        fontSize={{ base: "sm", md: "md" }}
        fontFamily={"monospace"}
        as={"p"}
      >
        I’m a Software Developer from Addis Ababa, Ethiopia. With a solid
        foundation in full-stack development. I enhance user experiences and
        optimize performance. Whether it’s developing complex web applications
        or optimizing user interfaces, I’m committed to crafting scalable and
        maintainable software solutions.
      </Text>
      <Text as="p" fontSize={{ base: "sm", md: "md" }}>
        Let’s connect and create something impactful together!
      </Text>
    </Box>
  );
};

export default HomeProfileText;
