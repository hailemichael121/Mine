import {
  Box,
  Flex,
  HStack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import "@fontsource/ruslan-display";

import ColorModeSwitch from "./shared/ColorModeSwitch";
import NavLogoSection from "./navigationSec/NavLogoSection";
import NavMenu from "./navigationSec/NavMenu";
import SideMenu from "./shared/SideMenu";
import MobileColorModeSwitch from "./shared/MobileColorMode";

const NavigationBar = () => {
  const { onOpen } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });
  return (
    <>
      <HStack
        pt={50}
        pb="9px"
        mb="5px"
        backgroundColor="transparent"
        borderBottomWidth="0px"
        top={0}
        left={0}
        width="100%"
        zIndex={1000}
        justifyContent="space-between"
      >
        {isMobile ? (
          <>
            <MobileColorModeSwitch />

            <Box onClick={onOpen} cursor="pointer">
              <NavLogoSection />
            </Box>

            <Box>
              <SideMenu />
            </Box>
          </>
        ) : (
          <>
            <ColorModeSwitch />
            <Flex width={"100%"} ml={"100px"} justifyContent={"space-between"}>
              <NavLogoSection />
              <NavMenu />
            </Flex>
          </>
        )}
      </HStack>
    </>
  );
};

export default NavigationBar;
