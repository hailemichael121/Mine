import React, { useState } from "react";
import { Box, SimpleGrid, useColorMode } from "@chakra-ui/react";
import { projects } from "./projectsSec/dummyData";
import { ProjectSecCard, ProjectSecCategory } from ".";

const ProjectSec: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const { colorMode } = useColorMode();

  return (
    <Box
      color={colorMode === "dark" ? "white" : "black"}
      bgColor={colorMode === "dark" ? "#222222" : "#FFFFFF"}
    >
      <Box p={{ base: "0px", md: "150px" }}>
        <ProjectSecCategory onCategoryChange={handleCategoryChange} />
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8} mt={8}>
          {filteredProjects.map((project) => (
            <ProjectSecCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              video={project.video}
              gitLink={project.gitLink}
              webLink={project.webLink}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ProjectSec;
