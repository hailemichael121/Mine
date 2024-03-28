import { Box } from "@chakra-ui/react";

const DisplayBox = () => {
  return (
    <>
      <Box
        margin={60}
        backgroundColor="white"
        display={"flex"}
        placeItems={"center"}
        minWidth={"10vh"}
        minHeight={"10vh"}
      ></Box>
    </>
  );
};

export default DisplayBox;
