import { Box, Button, HStack, VStack, useColorMode } from "@chakra-ui/react";
import { ProfileText } from "..";
import ProfilePhoto from "./ProfilePhoto";
import { Link } from "react-router-dom";

const ProfileBox = () => {
  const { colorMode } = useColorMode();

  return (
    <VStack
      margin={0}
      backgroundColor="#ced8e4"
      display="flex"
      placeItems="start"
      minWidth="60vh"
      minHeight="70vh"
      boxShadow="inset 0px 20px 20px 20px rgba(0, 0, 0, 0.2)"
      _hover={{
        backgroundcolor: "rgb(238,174,202)",
        background:
          "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
        transform: "scale(1.1)",
      }}
      transition={"1.9s"}
      mr={150}
      ml={150}
      mb={100}
      mt={70}
    >
      <HStack>
        <Box>
          <ProfileText />
        </Box>
        <Box>
          <ProfilePhoto />
        </Box>
      </HStack>
      <Button
        ml={40}
        mb={20}
        mt={20}
        backgroundColor="gray.50"
        color={colorMode === "dark" ? "AppWorkspace" : "black"}
        fontFamily="monospace"
        fontWeight="500"
        fontSize="x-large"
        width="350px"
      >
        <Link to={"/Achievments"}>Achiements 🏆 →</Link>
      </Button>
    </VStack>
  );
};

export default ProfileBox;
