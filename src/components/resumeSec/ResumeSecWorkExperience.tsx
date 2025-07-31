import { Box, Link, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import ResumeSecCard from "./ResumeSecCard";

const ResumeSecWorkExperience: React.FC = () => {
  const experiences = [
    {
      title: "Frontend Developer / Intern",
      subtitle: (
        <Link
          href="https://www.addissystems.et/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Addis Systems
        </Link>
      ),
      dateRange: "July 2023 - september 2023",
      description: (
        <Box>
          <List spacing={3}>
            <ListItem>
              <ListIcon
                fontSize={"smaller"}
                as={CheckCircleIcon}
                color="green.500"
              />
              Developed a functional shipping connector dashboard.
            </ListItem>
          </List>
          <Text mt={4}>
            <Link
              href="https://dirlinksdev.addissystems.et/"
              target="_blank"
              rel="noopener noreferrer"
              color="blue.500"
            >
              Landing Page
            </Link>
          </Text>
          <Text mt={2}>
            <Link
              href="https://customerdashboarddev.addissystems.et/"
              target="_blank"
              rel="noopener noreferrer"
              color="blue.500"
            >
              Customer Dashboard
            </Link>
          </Text>
          <Text mt={2}>
            <Link
              href="https://admin.addissystems.et/"
              target="_blank"
              rel="noopener noreferrer"
              color="blue.500"
            >
              Admin Dashboard
            </Link>
          </Text>
        </Box>
      ),
    },
    {
      title: "Springboot Fullstack Developer",
      subtitle: (
        <Link
          href="https://www.bankofabyssinia.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bank Of Abyssinia
        </Link>
      ),
      dateRange: "July 2024 - Present",
      description: (
        <Box>
          <List spacing={3}>
            <ListItem>
              <ListIcon
                fontSize={"smaller"}
                as={CheckCircleIcon}
                color="green.500"
              />
              Hired as a fullstack Springboot adn React developer.
            </ListItem>
          </List>
        </Box>
      ),
    },
  ];

  return (
    <>
      {experiences.map((exp, index) => (
        <ResumeSecCard
          key={index}
          title={exp.title}
          subtitle={exp.subtitle}
          dateRange={exp.dateRange}
          description={exp.description}
        />
      ))}
    </>
  );
};

export default ResumeSecWorkExperience;
