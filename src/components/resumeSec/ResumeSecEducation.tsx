import { Link, Text, Box } from "@chakra-ui/react";
import ResumeSecCard from "./ResumeSecCard";
import { FaGraduationCap } from "react-icons/fa";

const ResumeSecEducation: React.FC = () => {
  const education = [
    {
      title: "B.Sc. in Software Engineering",
      subtitle: (
        <Link href="http://www.aastu.edu.et/" isExternal color="inherit">
          Addis Ababa Science and Technology University
        </Link>
      ),
      dateRange: "June 2022 - June 2024",
      description: (
        <Box mt={2}>
          <Text>Graduated with distinction (CGPA: 3.49)</Text>
          <Text mt={2} fontSize="sm" color="gray.500">
            Relevant coursework: Algorithms, Data Structures, Web Development
          </Text>
        </Box>
      ),
    },
    {
      title: "High School Diploma",
      subtitle: "St. Daniel Comboni, Hawassa",
      dateRange: "2016 - 2021",
      description: (
        <Text>Completed secondary education with focus on sciences</Text>
      ),
    },
  ];

  return (
    <>
      {education.map((edu, index) => (
        <ResumeSecCard
          key={index}
          title={edu.title}
          subtitle={edu.subtitle}
          dateRange={edu.dateRange}
          description={edu.description}
          icon={<FaGraduationCap color="white" />}
          variant="education"
        />
      ))}
    </>
  );
};

export default ResumeSecEducation;
