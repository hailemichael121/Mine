// ResumeSecEducation.tsx
import { Link, Text } from "@chakra-ui/react";
import ResumeSecCard from "./ResumeSecCard";

const ResumeSecEducation: React.FC = () => {
  const education = [
    {
      title: "Bachelor of Science in Software Engineering",
      subtitle: (
        <Link
          href="http://www.aastu.edu.et/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Addis Ababa Science and Technology University
        </Link>
      ),
      dateRange: "June 2022 - Present",
      description: (
        <Text>
          Graduated  with a CGPA of <h1>3.49</h1> 
        </Text>
      ),
    },
    {
      title: "High School and Preparatory",
      subtitle: "St. Daniel Comboni, Hawassa, Ethiopia",
      dateRange: "2016 - 2021",
      description: <Text>Attended Secondary and Preparatory School.</Text>,
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
        />
      ))}
    </>
  );
};

export default ResumeSecEducation;
