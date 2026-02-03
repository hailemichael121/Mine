import {
  Box,
  Link,
  Text,
  List,
  ListItem,
  ListIcon,
  useColorMode,
} from "@chakra-ui/react";
import { FiCheckCircle } from "react-icons/fi";
import ResumeSecCard from "./ResumeSecCard";
import { FaBriefcase, FaLaptopCode } from "react-icons/fa";

const ResumeSecWorkExperience: React.FC = () => {
  const { colorMode } = useColorMode();
  const baseColor = colorMode === "light" ? "#262626" : "#FFFFFF";
  const experiences = [
    {
      title: "JavaScript/Go Backend Developer",
      subtitle: (
        <Link href="https://taptosign.com" isExternal color="inherit">
          TapToSign (via Upwork)
        </Link>
      ),
      dateRange: "March 2024 - May 2024",
      description: (
        <Box mt={1}>
          <List spacing={1}>
            {[
              "Maintained backend services for e-signature platform",
              "Implemented and Optimized PDF processing features with Go",
              "Collaborated with remote team on feature development",
            ].map((item, i) => (
              <ListItem key={i} display="flex" alignItems="flex-start">
                <ListIcon as={FiCheckCircle} color={baseColor} mt={1} />
                <Text>{item}</Text>
              </ListItem>
            ))}
          </List>
          <Box mt={4}>
            <Text fontSize="sm" color={baseColor} opacity={0.7}>
              <strong>Technologies:</strong> JavaScript, Go, Node.js, AWS,
              PostgreSQL
            </Text>
          </Box>
        </Box>
      ),
      icon: <FaLaptopCode color={baseColor} />,
      variant: "work",
    },
    {
      title: "Frontend Developer Intern",
      subtitle: (
        <Link href="https://www.addissystems.et/" isExternal color="inherit">
          Addis Systems
        </Link>
      ),
      dateRange: "July 2023 - September 2023",
      description: (
        <Box mt={3}>
          <List spacing={2}>
            {[
              "Developed shipping connector dashboard with React/TypeScript",
              "Implemented responsive UI components",
              "Collaborated with backend team on API integration",
            ].map((item, i) => (
              <ListItem key={i} display="flex" alignItems="flex-start">
                <ListIcon as={FiCheckCircle} color={baseColor} mt={1} />
                <Text>{item}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
      ),
    },
    {
      title: "Fullstack Developer",
      subtitle: (
        <Link
          href="https://www.bankofabyssinia.com/"
          isExternal
          color="inherit"
        >
          Bank of Abyssinia
        </Link>
      ),
      dateRange: "July 2024 - Present",
      description: (
        <List spacing={2} mt={3}>
          {[
            "Developing financial applications with Spring Boot and React",
            "Implementing secure banking features",
            "Optimizing application performance",
          ].map((item, i) => (
            <ListItem key={i} display="flex" alignItems="flex-start">
              <ListIcon as={FiCheckCircle} color={baseColor} mt={1} />
              <Text>{item}</Text>
            </ListItem>
          ))}
        </List>
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
          icon={<FaBriefcase color={baseColor} />}
          variant="work"
        />
      ))}
    </>
  );
};

export default ResumeSecWorkExperience;
