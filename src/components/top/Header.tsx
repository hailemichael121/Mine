import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  useColorMode,
} from "@chakra-ui/react";

import ColorModeSwitch from "../ColorModeSwitch";
import Menu from "./Menu";

const Header = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        pt="15px"
        pr={5}
        pl={5}
        pb="9px"
        mb="5px"
        backgroundColor={"transparent"}
        display={"flex"}
        alignItems="center"
        justifyContent="space-between"
        marginLeft={0}
        marginRight={0}
        borderBottomWidth="thin"
        borderBottomColor="GrayText"
      >
        <Button
          backgroundColor={"transparent"}
          _hover={{ backgroundColor: "transparent" }}
        >
          <Image
            transition=" 0.3s "
            _hover={{ transform: "rotate(45deg)", mr: "5px" }}
            backgroundColor={colorMode === "dark" ? "White" : "transparent"}
            borderRadius={colorMode === "dark" ? "35px" : "35px"}
            boxShadow=" 0px 0px 20px 0px rgba(1, 1, 1)"
            width="70px"
            height="70px"
            src="/images/Logo2Bg.png"
          />
          <Heading pl="10px" fontFamily="revert">
            Yihun
          </Heading>
        </Button>

        <Stack
          margin="20px 30px 10px 0px"
          direction="row"
          justifyContent={"space-between"}
        >
          <Menu />
        </Stack>
      </Box>

      <ColorModeSwitch />
    </>
  );
};

export default Header;
