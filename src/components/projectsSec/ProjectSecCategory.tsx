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
  const baseColor = colorMode === "light" ? "#262626" : "#FFFFFF";
  const surfaceColor = colorMode === "light" ? "#FFFFFF" : "#262626";
  const subtleBg =
    colorMode === "light"
      ? "rgba(38, 38, 38, 0.08)"
      : "rgba(255, 255, 255, 0.08)";

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
            bg={surfaceColor}
            borderColor={baseColor}
            color={baseColor}
            boxShadow={`0 18px 30px -24px ${baseColor}`}
          >
            {activeCategory}
            <Badge
              ml={2}
              borderRadius="full"
              px={2}
              py={1}
              border="1px solid"
              borderColor={baseColor}
              color={baseColor}
              bg="transparent"
            >
              {categories.find((cat) => cat.name === activeCategory)?.count ||
                0}
            </Badge>
          </MenuButton>
          <MenuList minWidth="200px" bg={surfaceColor} borderColor={baseColor}>
            {categories.map((category) => (
              <MenuItem
                key={category.name}
                onClick={() => onCategoryChange(category.name)}
                display="flex"
                justifyContent="space-between"
                bg={activeCategory === category.name ? subtleBg : "transparent"}
                color={baseColor}
              >
                {category.name}
                <Badge
                  borderRadius="full"
                  px={2}
                  border="1px solid"
                  borderColor={baseColor}
                  bg={
                    activeCategory === category.name ? baseColor : "transparent"
                  }
                  color={
                    activeCategory === category.name ? surfaceColor : baseColor
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
              bg={activeCategory === category.name ? baseColor : "transparent"}
              color={
                activeCategory === category.name ? surfaceColor : baseColor
              }
              border="1px solid"
              borderColor={baseColor}
              borderRadius="full"
              boxShadow={`0 18px 30px -24px ${baseColor}`}
              px={4}
              py={2}
              position="relative"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: `0 22px 36px -28px ${baseColor}`,
              }}
              transition="all 0.2s ease"
            >
              {category.name}
              <Badge
                ml={2}
                borderRadius="full"
                px={2}
                border="1px solid"
                borderColor={baseColor}
                bg={
                  activeCategory === category.name
                    ? surfaceColor
                    : "transparent"
                }
                color={activeCategory === category.name ? baseColor : baseColor}
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
                  bg={baseColor}
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
