import { Box, Button, HStack, useColorMode } from "@chakra-ui/react";
import { FaRegLightbulb } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack
      display="flex"
      ml={"40px"}
      justifyContent="right"
      alignItems="center"
      position="fixed"
      zIndex={10000}
    >
      <Button
        onClick={toggleColorMode}
        background="transparent"
        size="lg"
        _hover={{ bg: "transparent" }}
        transition="0.4s ease"
        position="relative"
        padding="0"
        minH="140px"
        minW="120px"
      >
        <Box position="absolute" top="0" left="50%" transform="translateX(-50%)">
          <Box
            w="2px"
            h="60px"
            bg={colorMode === "dark" ? "#f1c008" : "#262626"}
            mx="auto"
            opacity={0.9}
          />
          <Box
            w="34px"
            h="18px"
            borderRadius="999px"
            border="1px solid"
            borderColor={colorMode === "dark" ? "#f1c008" : "#262626"}
            bg={colorMode === "dark" ? "#2D2711" : "#FFFFFF"}
            mx="auto"
            mt="-2px"
          />
        </Box>

        <Box position="relative" mt="48px">
          {colorMode === "dark" ? (
            <FaLightbulb
              style={{
                transform: "rotate(-180deg)",
                boxShadow: "0px 0px 80px 0px rgba(241, 192, 8, 0.7)",
                borderRadius: "1000px",
                backgroundColor: "#2D2711",
              }}
              color="#f1c008"
              size={52}
            />
          ) : (
            <FaRegLightbulb
              style={{
                transform: "rotate(180deg)",
                borderRadius: "100px",
              }}
              color="#262626"
              size={52}
            />
          )}
        </Box>

        <Box
          position="absolute"
          top="88px"
          left="50%"
          transform="translateX(-50%)"
          width={{ base: "160px", md: "190px" }}
          height={{ base: "140px", md: "170px" }}
          opacity={colorMode === "dark" ? 0.85 : 0.35}
          filter="blur(0.5px)"
          clipPath="polygon(50% 0%, 18% 100%, 82% 100%)"
          bgGradient={
            colorMode === "dark"
              ? "linear(to-b, rgba(241,192,8,0.55), rgba(241,192,8,0))"
              : "linear(to-b, rgba(38,38,38,0.3), rgba(38,38,38,0))"
          }
        />
      </Button>
    </HStack>
  );
};

export default ColorModeSwitch;
