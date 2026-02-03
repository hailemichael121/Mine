import React from "react";
import { Flex, Image, Tooltip, useColorMode, Box } from "@chakra-ui/react";

interface SkillItemProps {
  imgSrc: string;
  altText: string;
  label: string;
  imgWidth?: string;
  onClick?: () => void;
  href?: string; // optional link
}

const AboutSecSkillItem: React.FC<SkillItemProps> = ({
  imgSrc,
  altText,
  label,
  imgWidth = "30px",
  onClick,
  href,
}) => {
  const { colorMode } = useColorMode();
  const baseColor = colorMode === "light" ? "#262626" : "#FFFFFF";
  const cardBg = colorMode === "light" ? "#FFFFFF" : "#262626";

  const Wrapper = href ? "a" : "div"; // Conditional tag

  return (
    <Tooltip label={label} hasArrow bg={baseColor} color={cardBg}>
      <Box
        as={Wrapper}
        href={href}
        target={href ? "_blank" : undefined}
        rel={href ? "noopener noreferrer" : undefined}
        p={{ base: "8px", md: "12px" }}
        borderRadius={{ base: "12px", md: "16px" }}
        border="1px solid"
        borderColor={baseColor}
        bg={cardBg}
        minW={{ base: "45px", md: "60px" }}
        transition="all 0.3s ease"
        _hover={{
          transform: "translateY(-4px)",
          boxShadow: `0 12px 20px -10px ${baseColor}`,
        }}
        onClick={onClick}
        cursor="pointer"
        display="inline-block"
      >
        <Flex alignItems="center" justifyContent="center">
          <Image
            src={imgSrc}
            alt={altText}
            width={imgWidth}
            loading="lazy"
            filter="grayscale(1)"
            _hover={{ filter: "grayscale(0)" }}
          />
        </Flex>
      </Box>
    </Tooltip>
  );
};

export default AboutSecSkillItem;
