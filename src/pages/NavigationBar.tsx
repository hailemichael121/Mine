import {
  Box,
  Flex,
  HStack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import "@fontsource/ruslan-display";

import ColorModeSwitch from "../components/shared/ColorModeSwitch";
import NavLogoSection from "../components/navigationSec/NavLogoSection";
import NavMenu from "../components/navigationSec/NavMenu";
import SideMenu from "../components/shared/SideMenu";
import { useState, useEffect } from "react";
import ThemeToggle from "../components/shared/ThemeToggleBtn";

const NavigationBar = () => {
  const { onOpen } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, lg: false }); // Updated logic
  const [floatingToggle, setFloatingToggle] = useState(false);

  useEffect(() => {
    const onScroll = () => setFloatingToggle(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <HStack
      pt={{ base: 4, md: 10 }} // Reduced padding on mobile
      px={{ base: 4, md: 10 }} // Added horizontal padding so it's not touching edges
      pb="9px"
      mb="5px"
      backgroundColor="transparent"
      position="relative"
      width="100%"
      zIndex={1000}
      justifyContent="space-between"
    >
      {isMobile ? (
        <>
          <Box onClick={onOpen} cursor="pointer">
            <NavLogoSection />
          </Box>
          <ThemeToggle floating={floatingToggle} />
          <SideMenu />
        </>
      ) : (
        <>
          <ColorModeSwitch isFloating={floatingToggle} />
          <Flex
            width={"100%"}
            ml={{ base: "20px", lg: "100px" }}
            justifyContent={"space-between"}
          >
            <NavLogoSection />
            <NavMenu floatingToggle={floatingToggle} />
          </Flex>
        </>
      )}
    </HStack>
  );
};

export default NavigationBar;
