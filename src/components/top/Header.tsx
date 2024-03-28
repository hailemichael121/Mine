import { Box, Image, Stack, useColorMode } from "@chakra-ui/react";

import RotatingMenu from "./RotatingMenu";
import ColorModeSwitch from "../ColorModeSwitch";

const Header = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box
        margin={2}
        backgroundColor={colorMode === "dark" ? "wheat" : "White"}
        display={"flex"}
        alignItems="center" // Vertically centers content within the Box
        justifyContent="space-between"
        minWidth={"10vh"}
        minHeight={"10vh"}
        boxShadow=" 10px 20px 20px 20px rgba(0, 0, 0, 0.2)"
      >
        <Image width="50px" height="50px" src=" src/assets/Logo2Bg.png" />
        <Stack
          margin="20px 30px 10px 0px"
          direction="row"
          justifyContent={"space-between"}
        >
          <ColorModeSwitch />
          <RotatingMenu />
        </Stack>
      </Box>
    </>
  );
};

export default Header;
