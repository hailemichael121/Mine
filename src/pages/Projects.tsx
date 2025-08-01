// components/projectsSec/Projects.tsx
import React, { useState } from "react";
import { Box, SimpleGrid, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ProjectSecCard, ProjectSecCategory } from ".";
import { projects } from "../components/projectsSec/dummyData";

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const { colorMode } = useColorMode();

  // Calculate project counts for each category
  const projectCounts = {
    all: projects.length,
    frontend: projects.filter((p) => p.category === "FrontEnd").length,
    backend: projects.filter((p) => p.category === "Backend").length,
    ml: projects.filter((p) => p.category === "Machine Learning").length,
    mobile: projects.filter((p) => p.category === "Mobile").length,
    others: projects.filter((p) => p.category === "Others").length,
    fullstack: projects.filter((p) => p.category === "Full Stack").length,
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <Box
      color={colorMode === "dark" ? "white" : "black"}
      bgColor={colorMode === "dark" ? "#222222" : "#FFFFFF"}
      pl={{ base: "20px", md: "200px" }}
      pr={{ base: "20px", md: "100px" }}
      pb={{ base: "20px", md: "50px" }}
      pt={8}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <ProjectSecCategory
          onCategoryChange={handleCategoryChange}
          activeCategory={activeCategory}
          projectCounts={projectCounts}
        />
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6} mt={8}>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ProjectSecCard
                title={project.title}
                description={project.description}
                images={project.images}
                video={project.video}
                tags={project.tags}
                siteLink={project.siteLink}
                sourceLink={project.sourceLink}
              />
            </motion.div>
          ))}
        </SimpleGrid>
      </motion.div>
    </Box>
  );
};

export default Projects;
