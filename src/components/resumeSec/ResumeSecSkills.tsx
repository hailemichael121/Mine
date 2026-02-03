import { Box, Tag, Text, Wrap, useColorMode } from "@chakra-ui/react";
import ResumeSecCard from "./ResumeSecCard";
import { FaCode } from "react-icons/fa";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "TailwindCSS",
      "Chakra UI",
    ],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Spring Boot", "Express", "Python", "Java"],
  },
  {
    name: "Tools",
    skills: ["Git", "Docker", "Figma", "Postman", "VS Code"],
  },
];

const ResumeSecSkills: React.FC = () => {
  const { colorMode } = useColorMode();
  const baseColor = colorMode === "light" ? "#262626" : "#FFFFFF";
  return (
    <ResumeSecCard
      title="Technical Skills"
      description={
        <Box mt={3}>
          {skillCategories.map((category) => (
            <Box key={category.name} mb={4}>
              <Text fontWeight="600" mb={2} color={baseColor}>
                {category.name}
              </Text>
              <Wrap spacing={2}>
                {category.skills.map((skill) => (
                  <Tag
                    key={skill}
                    variant="outline"
                    size="md"
                    px={3}
                    py={1}
                    borderRadius="full"
                    borderColor={baseColor}
                    color={baseColor}
                    opacity={0.85}
                  >
                    {skill}
                  </Tag>
                ))}
              </Wrap>
            </Box>
          ))}
        </Box>
      }
      icon={<FaCode color={baseColor} />}
      variant="skills"
    />
  );
};

export default ResumeSecSkills;
