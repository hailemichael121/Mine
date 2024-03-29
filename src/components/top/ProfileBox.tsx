import { Box, VStack } from "@chakra-ui/react";
import { ProfileText } from "..";
import ProfilePhoto from "./ProfilePhoto";

const ProfileBox = () => {
  return (
    <VStack
      boxShadow=" 10px 20px 20px 20px rgba(0, 0, 0, 0.2)"
      mr={150}
      ml={150}
      mb={100}
      mt={70}
    >
      <Box
        margin={0}
        backgroundColor="#ced8e4"
        display="flex"
        placeItems="center"
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
      >
        <ProfileText />
        <Box>
          <ProfilePhoto />
        </Box>
      </Box>
    </VStack>
  );
};

export default ProfileBox;
