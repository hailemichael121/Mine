// components/projectsSec/ProjectsCurtain.tsx
import React, { useState, useRef, useEffect } from "react";
import { Box, Icon, Flex, useColorMode } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { Projects } from "../../pages";

const ProjectsCurtain = () => {
  const { colorMode } = useColorMode();
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleHeight, setVisibleHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const firstCard = containerRef.current.querySelector(".project-card");
      if (firstCard) {
        const cardHeight = firstCard.clientHeight;
        setVisibleHeight(cardHeight * 1.1);
      }
    }
  }, []);

  // Updated gradient with completely transparent top
  const gradient =
    colorMode === "dark"
      ? "linear-gradient(to bottom, rgba(34,34,34,0) 0%, rgba(34,34,34,0.3) 30%, rgba(34,34,34,0.7) 70%, rgba(34,34,34,1) 100%)"
      : "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0.7) 70%, rgba(255,255,255,1) 100%)";

  return (
    <Box position="relative" overflow="hidden">
      <Box
        ref={containerRef}
        style={{
          height: isExpanded ? "auto" : `${visibleHeight}px`,
          overflow: "hidden",
        }}
      >
        <Projects />
      </Box>

      {/* Curtain overlay with smooth fade */}
      {!isExpanded && (
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          background={gradient}
          pointerEvents="none"
          opacity={0.9}
        />
      )}

      {/* Animated arrow button */}
      <Flex justify="center" mt={4}>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
          style={{ cursor: "pointer" }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Icon
            as={ChevronDownIcon}
            w={10}
            h={10}
            color={colorMode === "dark" ? "white" : "gray.700"}
            transform={isExpanded ? "rotate(180deg)" : "rotate(0deg)"}
            transition="transform 0.3s ease"
          />
        </motion.div>
      </Flex>
    </Box>
  );
};

export default ProjectsCurtain;
