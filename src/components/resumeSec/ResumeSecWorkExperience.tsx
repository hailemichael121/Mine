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
      dateRange: "July 2023 - Present",
      description: (
        <Box>
          <List spacing={3}>
            <ListItem>
              <ListIcon
                fontSize={"smaller"}
                as={CheckCircleIcon}
                color="green.500"
              />
              Developed a functional 'Forgot Password' feature using React,
              Chakra UI, and Firebase.
            </ListItem>
            <ListItem>
              <ListIcon
                fontSize={"smaller"}
                as={CheckCircleIcon}
                color="green.500"
              />
              Implemented dynamic routing to redirect users to company-specific
              URLs after login.
            </ListItem>
            <ListItem>
              <ListIcon
                fontSize={"smaller"}
                as={CheckCircleIcon}
                color="green.500"
              />
              Built a sign-up page with email verification and role-based access
              management for company admins.
            </ListItem>
            <ListItem>
              <ListIcon
                fontSize={"smaller"}
                as={CheckCircleIcon}
                color="green.500"
              />
              Configured Firebase authentication for sign-up and login with
              real-time email verification.
            </ListItem>
            <ListItem>
              <ListIcon
                fontSize={"smaller"}
                as={CheckCircleIcon}
                color="green.500"
              />
              Worked on a sales management dashboard that fetches and displays
              data for different companies dynamically.
            </ListItem>
            <ListItem>
              <ListIcon
                fontSize={"smaller"}
                as={CheckCircleIcon}
                color="green.500"
              />
              Collaborated on a Git-based project with multiple branches for
              team development.
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
