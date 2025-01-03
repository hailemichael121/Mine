import { Grid, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import AboutSecSkillItem from "./AboutSecSkillItem";
import { skillData } from "./skillData"; // Import the skill data

const AboutSecSkills: React.FC = () => {
  const gridTemplateColumns = useBreakpointValue({
    base: "repeat(3, 1fr)", // 3 items per row for small screens
    md: "repeat(3, 1fr)", // Same for medium devices
    lg: "repeat(7, 1fr)", // Adjust to fit 4 items per row for large screens
  });

  return (
    <Grid
      templateColumns={gridTemplateColumns}
      templateRows={{
        lg: "repeat(3, auto)", // Define custom rows for large screens
      }}
      gap={5}
      p={5}
      pb={20}
      justifyContent="center" // Center items horizontally
      alignItems="center" // Center items vertically
    >
      {skillData.map((skill, index) => (
        <AboutSecSkillItem
          key={index}
          imgSrc={skill.imgSrc}
          altText={skill.altText}
          label={skill.label}
          area={skill.label.toLowerCase()}
        />
      ))}
    </Grid>
  );
};

export default AboutSecSkills;
