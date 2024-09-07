import { Box, Text, VStack, Image, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface ServiceSecCardProps {
  iconSrc: string;
  altText: string;
  titleText: string;
  serviceText: string;
}

const ServiceSecCard: React.FC<ServiceSecCardProps> = ({
  iconSrc,
  altText,
  serviceText,
  titleText,
}) => {
  const cardBg = useColorModeValue("gray.100", "transparent");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box
      bg={cardBg}
      borderRadius="md"
      p={6}
      boxShadow="lg"
      transition="transform 0.3s"
      _hover={{ transform: "scale(1.05)" }}
      textAlign="center"
      flex={1}
      minWidth={{ base: "90%", md: "300px" }}
      maxWidth={{ base: "90%", md: "300px" }}
      whiteSpace={"normal"}
      wordBreak={"break-word"}
    >
      <VStack spacing={4}>
        <Box boxSize="80px">
          <Image
            src={iconSrc}
            alt={altText}
            boxSize="100%"
            objectFit="contain"
          />
        </Box>
        <Text fontSize="lg" fontWeight="bold" color={textColor}>
          {titleText}
        </Text>
      </VStack>
      <Text fontSize="sm" color={textColor}>
        {serviceText}
      </Text>
    </Box>
  );
};

export default ServiceSecCard;
