import { Box, Image } from "@chakra-ui/react";

const ProfilePhoto = () => {
  return (
    <Box
      boxSize={300}
      borderLeftRadius="90px"
      overflow="hidden"
      boxShadow="md"
      width="300px"
      height="300px"
      backgroundColor="GrayText"
    >
      <Image
        objectFit="cover"
        boxSize="fit-content"
        src="src/assets/ProfilePicture.jpg"
        alt="Profile Photo"
        pb={100}
      />
    </Box>
  );
};

export default ProfilePhoto;
