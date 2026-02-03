import React from "react";
import { Flex, Image, Tooltip, useColorMode, LinkBox } from "@chakra-ui/react";

interface SkillItemProps {
  imgSrc: string;
  altText: string;
  label: string;
  imgWidth?: string;
  onClick?: () => void;
}

const AboutSecSkillItem: React.FC<SkillItemProps> = ({
  imgSrc,
  altText,
  label,
  imgWidth = "30px",
  onClick,
}) => {
  const { colorMode } = useColorMode();
  const baseColor = colorMode === "light" ? "#262626" : "#FFFFFF";
  const cardBg = colorMode === "light" ? "#FFFFFF" : "#262626";

  return (
    <Tooltip label={label} hasArrow bg={baseColor} color={cardBg}>
      <LinkBox
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
      >
        <Flex alignItems="center" justifyContent="center">
          <Image
            src={imgSrc}
            alt={altText}
            width={imgWidth}
            loading="lazy"
            filter="grayscale(1)"
            _groupHover={{ filter: "grayscale(0)" }}
          />
        </Flex>
      </LinkBox>
    </Tooltip>
  );
};

export default AboutSecSkillItem;
