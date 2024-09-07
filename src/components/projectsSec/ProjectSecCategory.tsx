import React from "react";
import { Tabs, TabList, Tab, Box } from "@chakra-ui/react";

interface Props {
  onCategoryChange: (category: string) => void;
}

const ProjectSecCategory: React.FC<Props> = ({ onCategoryChange }) => {
  const categories = [
    "All Projects",
    "Bot Development",
    "Backend",
    "Automation",
  ];

  return (
    <Box p={4} bg="transparent" borderRadius="none">
      <Tabs
        align="center"
        variant="unstyled"
        onChange={(index) => onCategoryChange(categories[index])}
        defaultIndex={0}
      >
        <TabList>
          {categories.map((category) => (
            <Tab
              key={category}
              _selected={{ color: "white", borderBottom: "2px solid #30F2F2" }}
              _focus={{ boxShadow: "none" }}
              py={2}
              px={4}
              mx={2}
              fontSize="lg"
              borderRadius="md"
              _hover={{ bg: "gray.600" }}
            >
              {category}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Box>
  );
};

export default ProjectSecCategory;
