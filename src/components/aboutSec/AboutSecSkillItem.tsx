import React from "react";
import {
  Flex,
  Image,
  Text,
  Box,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";

interface SkillItemProps {
  imgSrc: string;
  altText: string;
  label: string;
  imgWidth?: string;
  area: string;
  href?: string;
  onClick?: () => void;
}

const AboutSecSkillItem: React.FC<SkillItemProps> = ({
  imgSrc,
  altText,
  label,
  imgWidth = "30px",
  href,
  onClick,
}) => {
  const { colorMode } = useColorMode();
  const baseColor = colorMode === "light" ? "#262626" : "#FFFFFF";
  const cardBg = colorMode === "light" ? "#FFFFFF" : "#262626";

  return (
    <Tooltip
      label={altText}
      hasArrow
      bg={baseColor}
      color={cardBg}
      borderRadius="10px"
      p="10px"
      boxShadow={`0 6px 16px -12px ${baseColor}`}
      fontSize="14px"
      fontWeight="bold"
      textAlign="center"
      maxW="200px"
    >
      <Box
        as={href ? "a" : "div"}
        href={href}
        onClick={onClick}
        position="relative"
        role="group"
        p="10px"
        borderRadius="16px"
        border="1px solid"
        borderColor={baseColor}
        bg={cardBg}
        transition="transform 0.3s ease, box-shadow 0.3s ease"
        _hover={{
          transform: "translateY(-4px)",
          boxShadow: `0 18px 30px -24px ${baseColor}`,
        }}
        cursor={href ? "pointer" : "default"}
      >
        <Flex gap={"5px"} alignItems="center" justifyContent="center">
          <Image
            src={imgSrc}
            alt={altText}
            width={imgWidth}
            filter="grayscale(1)"
          />
        </Flex>
        <Text
          as={"b"}
          fontSize={"15px"}
          pl={"15px"}
          position="absolute"
          bottom="10px"
          left="10px"
          opacity={0}
          transition="opacity 0.3s ease-out"
          color={baseColor}
          _groupHover={{ opacity: 1 }}
        >
          {label}
        </Text>
      </Box>
    </Tooltip>
  );
};

export default AboutSecSkillItem;
