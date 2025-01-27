import React from "react";
import { Tabs, TabList, Tab, Box, useColorMode } from "@chakra-ui/react";

interface Props {
  onCategoryChange: (category: string) => void;
}

const ProjectSecCategory: React.FC<Props> = ({ onCategoryChange }) => {
  const { colorMode } = useColorMode();

  const categories = [
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
        <TabList w={"50%"}>
          {categories.map((category) => (
            <Tab
              key={category}
              _selected={{
                color: colorMode === "dark" ? "white" : "black",
                textDecoration: "underline",
              }}
              fontSize={{ base: "sm", md: "lg" }}
              borderRadius="md"
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
