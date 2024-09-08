import React from "react";
import { Tabs, TabList, Tab, Box } from "@chakra-ui/react";

interface Props {
  onCategoryChange: (category: string) => void;
}

const ProjectSecCategory: React.FC<Props> = ({ onCategoryChange }) => {
  const categories = [
    "All Projects",
    "FrontEnd",
    "Backend",
    "Machine Learning",
    "Mobile",
    "Others",
  ];

  return (
    <Box bg="transparent" borderRadius="none">
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
              _selected={{ color: "white", textDecoration: "underline" }}
              _focus={{ boxShadow: "none" }}
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
