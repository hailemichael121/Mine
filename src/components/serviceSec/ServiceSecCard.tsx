import { Box, Text, VStack, Image, useColorMode } from "@chakra-ui/react";
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
  const { colorMode } = useColorMode();
  const baseColor = colorMode === "light" ? "#262626" : "#FFFFFF";
  const surfaceColor = colorMode === "light" ? "#FFFFFF" : "#262626";

  return (
    <Box
      bg={surfaceColor}
      borderRadius="2xl"
      p={6}
      border="1px solid"
      borderColor={baseColor}
      boxShadow={`0 24px 44px -36px ${baseColor}`}
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{
        transform: "translateY(-6px)",
        boxShadow: `0 30px 54px -40px ${baseColor}`,
      }}
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
            filter="grayscale(1)"
          />
        </Box>
        <Text fontSize="lg" fontWeight="bold" color={baseColor}>
          {titleText}
        </Text>
      </VStack>
      <Text fontSize="sm" color={baseColor} opacity={0.75}>
        {serviceText}
      </Text>
    </Box>
  );
};

export default ServiceSecCard;
