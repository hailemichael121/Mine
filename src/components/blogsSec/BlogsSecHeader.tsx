// components/blogsSec/BlogsSecHeader.tsx
import { Box, Heading, HStack, Text, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaPenFancy } from "react-icons/fa";

const BlogsSecHeader: React.FC = () => {
  const { colorMode } = useColorMode();
  const baseColor = colorMode === "light" ? "#262626" : "#FFFFFF";
  return (
    <HStack spacing={4} mb={10} align="center">
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
      >
        <FaPenFancy size={28} color={baseColor} />
      </motion.div>
      <Box>
        <Heading
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="800"
          color={baseColor}
        >
          My Tech Writings
        </Heading>
        <Text fontSize="lg" color={baseColor} mt={1} opacity={0.75}>
          Thoughts, tutorials and case studies
        </Text>
      </Box>
      <Box
        flex="1"
        height="1px"
        bg={baseColor}
        opacity={0.2}
        display={{ base: "none", md: "block" }}
        ml={4}
      />
    </HStack>
  );
};

export default BlogsSecHeader;
