import { Box, Flex, Heading, useColorMode } from "@chakra-ui/react";
import { BlogsSecHeader } from ".";

const Blogs = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box p={{ base: 4, md: 40 }}>
        <BlogsSecHeader />
        <Flex
          justifyContent={"Center"}
          p={40}
          bgColor={colorMode === "dark" ? "#222222" : "#FFFFFF"}
        >
          <Heading justifyContent={"center"} fontSize={"50px"}>
            Blogs Soon!
          </Heading>
        </Flex>
      </Box>
    </>
  );
};

export default Blogs;
