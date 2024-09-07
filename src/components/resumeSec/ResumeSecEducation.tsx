// ResumeSecEducation.tsx
import { Link } from "@chakra-ui/react";
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
          "Addis Ababa Science and Technology University"
        </Link>
      ),
      dateRange: "june 2022 - Present",
      description: [
        "Graduating soon with a strong foundation in full-stack development and backend services.",
      ],
    },
    {
      title: "Highschool and Preparatory",
      subtitle: "St. Daniel COmboni  Hawassa , Ethiopia",
      dateRange: "2016 - 202021",
      description: ["Attended Secondary and Preparatory School."],
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
