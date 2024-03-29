import { Box, Image, Stack, useColorMode } from "@chakra-ui/react";

import RotatingMenu from "./RotatingMenu";
import ColorModeSwitch from "../ColorModeSwitch";

const Header = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        mt={20}
        mr={20}
        ml={20}
        mb={1}
        backgroundColor={"transparent"}
        display={"flex"}
        alignItems="center" // Vertically centers content within the Box
        justifyContent="space-between"
        minWidth={"10vh"}
        minHeight={"10vh"}
        boxShadow=" 0px 0px 20px 0px rgba(0, 0, 0, 0.1)"
        borderLeftRadius="30px"
        borderRightRadius="45px"
        borderWidth={0}
      >
        <Image
          backgroundColor={colorMode === "dark" ? "White" : "transparent"}
          borderRadius={colorMode === "dark" ? "30px" : "30px"}
          boxShadow=" 0px 0px 20px 0px rgba(1, 1, 1)"
          width="50px"
          height="50px"
          src=" src/assets/Logo2Bg.png"
        />{" "}
        <Stack
          margin="20px 30px 10px 0px"
          direction="row"
          justifyContent={"space-between"}
        >
          <RotatingMenu />
        </Stack>
      </Box>

      <ColorModeSwitch />
    </>
  );
};

export default Header;
