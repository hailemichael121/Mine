import React, { useState } from "react";
import { Box, SimpleGrid, useColorMode } from "@chakra-ui/react";
import { projects } from "./projectsSec/dummyData";
import { motion } from "framer-motion";
import { ProjectSecCard, ProjectSecCategory } from ".";

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const { colorMode } = useColorMode();

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
        <ProjectSecCategory onCategoryChange={handleCategoryChange} />
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8} mt={8}>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
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
