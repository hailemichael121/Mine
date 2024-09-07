import { Link, List, ListItem, ListIcon } from "@chakra-ui/react";
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
      description: [
        "Developed a functional 'Forgot Password' feature using React, Chakra UI, and Firebase.",
        "Implemented dynamic routing to redirect users to company-specific URLs after login.",
        "Built a sign-up page with email verification and role-based access management for company admins.",
        "Configured Firebase authentication for sign-up and login with real-time email verification.",
        "Worked on a sales management dashboard that fetches and displays data for different companies dynamically.",
        "Collaborated on a Git-based project with multiple branches for team development.",
        "You can view the deployed landing page at: ",
        <Link
          href="https://dirlinksdev.addissystems.et/"
          target="_blank"
          rel="noopener noreferrer"
          color="blue.500"
        >
          Landing Page
        </Link>,
        "Customer dashboard deployment: ",
        <Link
          href="https://customerdashboarddev.addissystems.et/"
          target="_blank"
          rel="noopener noreferrer"
          color="blue.500"
        >
          Customer Dashboard
        </Link>,
        "Admin dashboard deployment: ",
        <Link
          href="https://admin.addissystems.et/"
          target="_blank"
          rel="noopener noreferrer"
          color="blue.500"
        >
          Admin Dashboard
        </Link>,
      ],
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
          description={
            <List spacing={3}>
              {exp.description.map((desc, i) => (
                <ListItem key={i}>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  {desc}
                </ListItem>
              ))}
            </List>
          }
        />
      ))}
    </>
  );
};

export default ResumeSecWorkExperience;
