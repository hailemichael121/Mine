import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import "@fontsource/ruslan-display";

import ColorModeSwitch from "../ColorModeSwitch";
import Menu from "./Menu";
import { ElipseMold } from "..";

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
        backgroundColor="transparent"
        color="#fff"
        display={"flex"}
        alignItems="center"
        justifyContent="space-between"
        marginLeft={0}
        marginRight={0}
        borderBottomWidth="0px"
        position="fixed"
        top={0}
        left={0}
        zIndex={100}
        width="100%"
      >
        <Stack direction="row">
          <Box mr={20}>
            <ElipseMold
              id="elip5"
              backgroundColor="#7F27FF"
              borderRadius="16px"
              w="230px"
              Tw="280px"
              h="27px"
              m="80px"
              ml="-30px"
            />
            <ElipseMold
              id="elip6"
              backgroundColor="#E72929"
              borderRadius="20px"
              w="35px"
              h="35px"
              mt="25px"
              ml="-15px"
            />
            <ElipseMold
              id="elip7"
              backgroundColor="#59D5E0"
              borderRadius="20px"
              w="20px"
              h="20px"
              mt="40px"
              ml="25px"
            />
            <ElipseMold
              id="elip8"
              backgroundColor="#02576C"
              borderRadius="20px"
              w="10px"
              h="10px"
              mt="49px"
              ml="55px"
            />
            <ElipseMold
              id="elip9"
              backgroundColor="#FFE837"
              borderRadius="20px"
              w="160px"
              h="10px"
              mt="10px"
              ml="-50px"
              rotate="30deg"
            />
          </Box>
          <Image
            transition=" 0.3s "
            _hover={{ transform: "rotate(45deg)", mr: "5px" }}
            backgroundColor={"transparent"}
            borderRadius={colorMode === "dark" ? "35px" : "35px"}
            width="70px"
            height="70px"
            src="/images/Logo2B.png"
          />

          <Heading pl="10px" color="white">
            Yihun
          </Heading>
        </Stack>

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
