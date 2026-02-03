import {
  Box,
  Button,
  HStack,
  useColorMode,
  chakra,
  shouldForwardProp,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaRegLightbulb, FaLightbulb } from "react-icons/fa";
import { motion, isValidMotionProp } from "framer-motion";

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

interface ColorModeSwitchProps {
  isFloating: boolean;
}

const ColorModeSwitch = ({ isFloating }: ColorModeSwitchProps) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const activeColor = "#f1c008";
  const warmGlow = "rgba(241, 192, 8, 0.7)";
  const inactiveColor = "#262626";

  const responsiveLeft = useBreakpointValue({
    base: "20px",
    md: isFloating ? "20px" : "32%",
    lg: isFloating ? "20px" : "38%",
    xl: isFloating ? "20px" : "40%",
  });

  return (
    <HStack
      position="fixed"
      top="0"
      left={responsiveLeft}
      zIndex={10000}
      alignItems="flex-start"
      transition="left 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
    >
      <Button
        onClick={toggleColorMode}
        variant="unstyled"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
        transition="0.4s ease"
        minH="240px"
        width="120px"
        _focus={{ outline: "none" }}
      >
        {/* Wire, Socket, and Bulb code remains same... */}
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            w="1.5px"
            h="70px"
            bg={isDark ? activeColor : inactiveColor}
            opacity={0.6}
          />
          <Box
            w="30px"
            h="14px"
            borderRadius="4px 4px 10px 10px"
            border="1px solid"
            borderColor={isDark ? activeColor : inactiveColor}
            bg={isDark ? "#1A1608" : "#F7F7F7"}
            mt="-1px"
          />
        </Box>

        <Box position="relative" mt="-2px">
          {isDark ? (
            <MotionBox
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                position="absolute"
                w="70px"
                h="70px"
                sx={{
                  background: `radial-gradient(circle, ${warmGlow} 0%, transparent 70%)`,
                }}
                filter="blur(10px)"
              />
              <FaLightbulb
                style={{
                  transform: "rotate(-180deg)",
                  filter: `drop-shadow(0 0 15px ${warmGlow})`,
                }}
                color={activeColor}
                size={48}
              />
            </MotionBox>
          ) : (
            <FaRegLightbulb
              style={{ transform: "rotate(180deg)" }}
              color={inactiveColor}
              size={48}
            />
          )}
        </Box>

        {/* Ambient Light Cone */}
        <MotionBox
          position="absolute"
          top="95px"
          left="50%"
          initial={false}
          animate={{
            opacity: isDark ? (!isFloating ? 0 : 0.6) : 0,
            width: isFloating ? "180px" : "480px",
            height: isFloating ? "160px" : "200px",
          }}
          transition={{ duration: 0.8, ease: "easeInOut" } as any}
          style={{ x: "-50%" }}
          pointerEvents="none"
          filter="blur(20px)"
          clipPath="polygon(50% 0%, 0% 100%, 100% 100%)"
          bgGradient={`linear(to-b, ${activeColor}99, transparent)`}
        />
      </Button>
    </HStack>
  );
};

export default ColorModeSwitch;
