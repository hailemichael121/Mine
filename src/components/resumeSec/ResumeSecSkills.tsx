import { Box, Tag, Text, Wrap } from "@chakra-ui/react";
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
  return (
    <ResumeSecCard
      title="Technical Skills"
      description={
        <Box mt={3}>
          {skillCategories.map((category) => (
            <Box key={category.name} mb={4}>
              <Text fontWeight="600" mb={2}>
                {category.name}
              </Text>
              <Wrap spacing={2}>
                {category.skills.map((skill) => (
                  <Tag
                    key={skill}
                    colorScheme="green"
                    variant="subtle"
                    size="md"
                    px={3}
                    py={1}
                    borderRadius="full"
                  >
                    {skill}
                  </Tag>
                ))}
              </Wrap>
            </Box>
          ))}
        </Box>
      }
      icon={<FaCode color="white" />}
      variant="skills"
    />
  );
};

export default ResumeSecSkills;
