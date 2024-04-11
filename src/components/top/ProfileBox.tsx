import { Box, Button, HStack, VStack, useColorMode } from "@chakra-ui/react";
import { Elipse, ElipseMold, ProfileText } from "..";
import ProfilePhoto from "./ProfilePhoto";
import { Link } from "react-router-dom";

const ProfileBox = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box>
        <Elipse />
      </Box>

      <VStack
        margin={0}
        backgroundColor="Transparent"
        display="flex"
        placeItems="start"
        minWidth="60vh"
        minHeight="70vh"
        boxShadow="inset 0px 20px 20px 20px rgba(0, 0, 0, 0.2)"
        mr={10}
        ml={200}
        mb={100}
        mt={70}
      >
        <HStack>
          <Box>
            <ProfileText />
          </Box>

          <Box>
            {" "}
            <ElipseMold
              backgroundColor="#FFE837"
              borderRadius="20px"
              w="190px"
              h="40px"
              mt="-10px"
              ml="-15px"
              rotate="-29deg"
            />
            <ProfilePhoto />
            <ElipseMold
              backgroundColor="#7F27FF"
              borderRadius="16px"
              w="410px"
              h="27px"
              mt="0px"
              Tml="-20px"
              Tmr="10px"
            />
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
    </>
  );
};

export default ProfileBox;
