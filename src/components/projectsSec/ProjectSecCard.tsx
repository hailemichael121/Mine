import React from "react";
import { Box, Image, Text, Heading } from "@chakra-ui/react";

interface Props {
  title: string;
  description: string;
  image: string;
}

const ProjectSecCard: React.FC<Props> = ({ title, description, image }) => {
  return (
    <Box
      borderRadius="md"
      overflow="hidden"
      bg="gray.700"
      boxShadow="lg"
      _hover={{ transform: "scale(1.05)", transition: "0.3s ease" }}
    >
      <Image src={image} alt={title} />
      <Box p={4}>
        <Heading size="md" mb={2}>
          {title}
        </Heading>
        <Text>{description}</Text>
      </Box>
    </Box>
  );
};

export default ProjectSecCard;
