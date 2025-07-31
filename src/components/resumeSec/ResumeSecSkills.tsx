// ResumeSecSkills.tsx
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import ResumeSecCard from "./ResumeSecCard";
import { CheckCircleIcon } from "@chakra-ui/icons";

const ResumeSecSkills: React.FC = () => {
  const skills = [
    "Python",
    "Java",
    "JavaScript",
    "React",
    "Next.js",
    "Angular",
    "Node.js",
    "TailwindsCSS",
  ];

  return (
    <>
      <ResumeSecCard
        title={"Technical Skills"}
        description={
          <List spacing={3}>
            {skills.map((desc, i) => (
              <ListItem key={i}>
                <ListIcon
                  fontSize={"smaller"}
                  as={CheckCircleIcon}
                  color="green.500"
                />
                {desc}
              </ListItem>
            ))}
          </List>
        }
      />
    </>
  );
};

export default ResumeSecSkills;
