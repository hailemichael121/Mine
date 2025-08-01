// components/projectsSec/ProjectSecCategory.tsx
import React from "react";
import {
  Box,
  HStack,
  Tag,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Badge,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiFilter, FiChevronDown } from "react-icons/fi";

interface Props {
  onCategoryChange: (category: string) => void;
  activeCategory: string;
  projectCounts: {
    all: number;
    frontend: number;
    backend: number;
    ml: number;
    mobile: number;
    others: number;
    fullstack?: number;
  };
}

const ProjectSecCategory: React.FC<Props> = ({
  onCategoryChange,
  activeCategory,
  projectCounts,
}) => {
  const { colorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const categories = [
    { name: "All Projects", count: projectCounts.all },
    { name: "FrontEnd", count: projectCounts.frontend },
    { name: "Backend", count: projectCounts.backend },
    { name: "Machine Learning", count: projectCounts.ml },
    { name: "Mobile", count: projectCounts.mobile },
    { name: "Others", count: projectCounts.others },
    ...(projectCounts.fullstack
      ? [{ name: "Full Stack", count: projectCounts.fullstack }]
      : []),
  ];

  // Mobile view - dropdown menu
  if (isMobile) {
    return (
      <Box mb={8} textAlign="center">
        <Menu>
          <MenuButton
            as={Button}
            aria-label="Filter projects"
            rightIcon={<FiChevronDown />}
            leftIcon={<FiFilter />}
            variant="outline"
            size="lg"
            borderRadius="full"
            bg={colorMode === "dark" ? "gray.700" : "white"}
            boxShadow="md"
          >
            {activeCategory}
            <Badge ml={2} colorScheme="blue" borderRadius="full" px={2} py={1}>
              {categories.find((cat) => cat.name === activeCategory)?.count ||
                0}
            </Badge>
          </MenuButton>
          <MenuList
            minWidth="200px"
            bg={colorMode === "dark" ? "gray.700" : "white"}
          >
            {categories.map((category) => (
              <MenuItem
                key={category.name}
                onClick={() => onCategoryChange(category.name)}
                display="flex"
                justifyContent="space-between"
                bg={
                  activeCategory === category.name
                    ? colorMode === "dark"
                      ? "gray.600"
                      : "gray.100"
                    : "transparent"
                }
              >
                {category.name}
                <Badge
                  colorScheme="blue"
                  borderRadius="full"
                  px={2}
                  variant={
                    activeCategory === category.name ? "solid" : "outline"
                  }
                >
                  {category.count}
                </Badge>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    );
  }

  // Desktop view - horizontal tags
  return (
    <Box bg="transparent" mb={8} px={4}>
      <HStack spacing={3} flexWrap="wrap" justifyContent="center">
        {categories.map((category) => (
          <motion.div
            key={category.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Tag
              size="lg"
              cursor="pointer"
              onClick={() => onCategoryChange(category.name)}
              bg={
                activeCategory === category.name
                  ? colorMode === "dark"
                    ? "blue.600"
                    : "blue.100"
                  : colorMode === "dark"
                  ? "gray.700"
                  : "gray.100"
              }
              color={
                activeCategory === category.name
                  ? colorMode === "dark"
                    ? "white"
                    : "blue.800"
                  : colorMode === "dark"
                  ? "white"
                  : "gray.800"
              }
              borderRadius="full"
              boxShadow="sm"
              px={4}
              py={2}
              position="relative"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "md",
              }}
              transition="all 0.2s ease"
            >
              {category.name}
              <Badge
                ml={2}
                colorScheme="blue"
                borderRadius="full"
                px={2}
                variant={activeCategory === category.name ? "solid" : "subtle"}
              >
                {category.count}
              </Badge>
              {activeCategory === category.name && (
                <Box
                  position="absolute"
                  bottom="-5px"
                  left="50%"
                  transform="translateX(-50%)"
                  width="60%"
                  height="3px"
                  bg="blue.500"
                  borderRadius="full"
                />
              )}
            </Tag>
          </motion.div>
        ))}
      </HStack>
    </Box>
  );
};

export default ProjectSecCategory;
