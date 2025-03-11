import React from "react";
import { Box, HStack, Tag, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props {
  onCategoryChange: (category: string) => void;
}

const ProjectSecCategory: React.FC<Props> = ({ onCategoryChange }) => {
  const { colorMode } = useColorMode();

  const categories = [
    "All Projects",
    "FrontEnd",
    "Backend",
    "Machine Learning",
    "Mobile",
    "Others",
  ];

  return (
    <Box bg="transparent" borderRadius="none" mb={8}>
      <HStack spacing={4} flexWrap="wrap">
        {categories.map((category) => (
          <motion.div
            key={category}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Tag
              size="lg"
              cursor="pointer"
              onClick={() => onCategoryChange(category)}
              bg={colorMode === "dark" ? "gray.700" : "gray.200"}
              color={colorMode === "dark" ? "white" : "black"}
              _hover={{
                bg: colorMode === "dark" ? "gray.600" : "gray.300",
              }}
            >
              {category}
            </Tag>
          </motion.div>
        ))}
      </HStack>
    </Box>
  );
};

export default ProjectSecCategory;
