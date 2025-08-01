// components/blogsSec/BlogsSecHeader.tsx
import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaPenFancy } from "react-icons/fa";

const BlogsSecHeader: React.FC = () => {
  return (
    <HStack spacing={4} mb={10}>
      <motion.div
        animate={{ rotate: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <FaPenFancy size={32} />
      </motion.div>
      <Box>
        <Heading fontSize={{ base: "3xl", md: "4xl" }} fontWeight="800">
          My Tech Writings
        </Heading>
        <Text fontSize="lg" color="gray.500" mt={1}>
          Thoughts, tutorials and case studies
        </Text>
      </Box>
    </HStack>
  );
};

export default BlogsSecHeader;
