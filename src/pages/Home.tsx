import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import {
  HomeContactBtn,
  HomeProfilePhoto,
  HomeProfileText,
  HomeResumeBtn,
  HomeSocialMEdiaBtn,
} from ".";
import GitHubActivity from "../components/shared/GitHubActivity";

const Home = () => {
  return (
    <VStack>
      <HStack
        backgroundColor="none"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        spacing={{ base: 5, md: 5 }}
        mt={{ base: "0px", md: "-100px" }}
        ml={{ base: "0px", md: "200px" }}
        fontFamily={"fantasy"}
      >
        <Box width={{ base: "100%", md: "auto" }}>
          <HomeProfilePhoto />
        </Box>
        <VStack
          spacing={{ base: 5, md: 10 }}
          pb={{ base: "30px", md: "50px" }}
          width={{ base: "100%", md: "auto" }}
          textAlign={{ base: "center", md: "left" }}
          pt={{ base: "10px", md: "140px" }}
        >
          <HomeProfileText />
          <Flex
            width="100%"
            justifyContent="center"
            gap={{ base: "20px", md: "100px" }}
            p={5}
            flexDirection={{ base: "column", md: "row" }}
          >
            <HomeResumeBtn />
            <HomeContactBtn />
          </Flex>
          <Box width={{ base: "100%", md: "50%" }}>
            <HomeSocialMEdiaBtn />
          </Box>
        </VStack>
      </HStack>
      <Box width="100%" overflowX="auto">
        <GitHubActivity />
      </Box>
    </VStack>
  );
};

export default Home;
