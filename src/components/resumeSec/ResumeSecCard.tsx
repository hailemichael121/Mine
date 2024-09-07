import React from "react";
import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";

interface ResumeSecCardProps {
  title?: string;
  subtitle?: React.ReactNode; // Updated to ReactNode
  dateRange?: string;
  description?: React.ReactNode; // Updated to ReactNode
}

const ResumeSecCard: React.FC<ResumeSecCardProps> = ({
  title,
  subtitle,
  dateRange,
  description,
}) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      bg="transparent"
      p={5}
      shadow="lg"
      borderRadius="md"
      mb={6}
      _hover={{
        boxShadow: "10px 10px 15px #30F2F2",
      }}
      borderColor={colorMode === "light" ? "gray.400" : "gray.600"}
      borderRight="1px solid"
      borderBottom="1px solid"
      className="resume-sec-card"
    >
      <Heading as="h2" size="lg" mb={2}>
        {title}
      </Heading>
      <Heading color={"#6C757D"} as="h3" size="md" mb={2}>
        {subtitle}
      </Heading>
      <Text color={"#6C757D"} fontSize="sm" mb={4}>
        {dateRange}
      </Text>
      <Box>{description}</Box>
    </Box>
  );
};

export default ResumeSecCard;
