import { Box, Image, useColorMode } from "@chakra-ui/react";

const HomeProfilePhoto = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      borderTopLeftRadius={{ base: "20px", md: "30px" }}
      borderBottomLeftRadius={{ base: "100px", md: "200px" }}
      borderTopRightRadius={{ base: "20px", md: "50px" }}
      borderBottomRightRadius={{ base: "70px", md: "150px" }}
      overflow="hidden"
      boxShadow="md"
      width={{ base: "80%", sm: "60%", md: "380px" }}
      height={{ base: "auto", md: "340px" }}
      border={colorMode === "light" ? "solid 5px #FFFFFF" : "solid 5px #222222"}
      mx="auto" // Center horizontally
    >
      <Image
        backgroundColor="#F4F1F1"
        borderTopLeftRadius={{ base: "20px", md: "30px" }}
        borderBottomLeftRadius={{ base: "100px", md: "200px" }}
        borderTopRightRadius={{ base: "20px", md: "50px" }}
        borderBottomRightRadius={{ base: "70px", md: "150px" }}
        objectFit="cover"
        boxSize="cover"
        src="/images/ProfilePicture.png"
        alt="Profile Photo"
      />
    </Box>
  );
};

export default HomeProfilePhoto;
