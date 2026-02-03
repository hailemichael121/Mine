import {
  Box,
  useColorMode,
  chakra,
  shouldForwardProp,
  keyframes,
} from "@chakra-ui/react";
import { motion, isValidMotionProp, Transition } from "framer-motion";

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const twinkle = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
`;

type Props = {
  floating: boolean;
};

const ThemeToggle = ({ floating }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const springTransition: Transition = {
    type: "spring",
    stiffness: 300,
    damping: 24,
  };

  return (
    <MotionBox
      onClick={toggleColorMode}
      cursor="pointer"
      zIndex={10000}
      layout
      position={floating ? "fixed" : "relative"}
      top={floating ? "24px" : "auto"}
      right={floating ? "24px" : "24px"}
      initial={false}
      animate={{
        scale: 0.85,
      }}
      whileTap={{ scale: 0.9 }}
      transition={springTransition as any}
    >
      <Box
        width="80px"
        height="42px"
        borderRadius="999px"
        bg={isDark ? "#0B0E14" : "#bbb5b5"}
        display="flex"
        alignItems="center"
        px="4px"
        boxShadow={
          floating
            ? "0 4px 20px rgba(0,0,0,0.2)"
            : "inset 0 2px 10px rgba(0,0,0,0.4)"
        }
        overflow="hidden"
        position="relative"
        transition="background 0.5s ease"
      >
        {/* Stars */}
        {isDark && (
          <>
            <Box
              position="absolute"
              top="10px"
              left="20px"
              width="2px"
              height="2px"
              bg="white"
              borderRadius="50%"
              animation={`${twinkle} 2s infinite ease-in-out`}
            />
            <Box
              position="absolute"
              top="25px"
              left="45px"
              width="1.5px"
              height="1.5px"
              bg="white"
              borderRadius="50%"
              animation={`${twinkle} 3s infinite ease-in-out 1s`}
            />
            <Box
              position="absolute"
              top="15px"
              left="55px"
              width="2px"
              height="2px"
              bg="white"
              borderRadius="50%"
              animation={`${twinkle} 2.5s infinite ease-in-out 0.5s`}
            />
          </>
        )}

        <MotionBox
          width="34px"
          height="34px"
          borderRadius="50%"
          position="relative"
          animate={{
            x: isDark ? 38 : 0,
            rotate: isDark ? 360 : 0,
          }}
          transition={springTransition as any}
          bg={
            isDark
              ? "radial-gradient(circle at 30% 30%, #D1D5DB, #A0AEC0)"
              : "#F6E05E"
          }
          boxShadow={
            isDark ? "0 0 15px rgba(255,255,255,0.1)" : "0 0 20px #F6E05E"
          }
          sx={{
            "&::before": {
              content: '""',
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: isDark
                ? `radial-gradient(circle at 30% 30%, #718096 12%, transparent 12.5%),
                   radial-gradient(circle at 70% 45%, #718096 15%, transparent 15.5%),
                   radial-gradient(#CBD5E0 1px, transparent 0) 0 0 / 4px 4px`
                : `radial-gradient(circle at 50% 50%, rgba(237, 137, 54, 0.6) 0%, transparent 70%)`,
              filter: isDark ? "none" : "blur(2px)",
            },
          }}
        />
      </Box>
    </MotionBox>
  );
};

export default ThemeToggle;
