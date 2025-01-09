import React, { useEffect, useRef, useState } from "react";
import {
  Flex,
  Image,
  Text,
  Box,
  Tooltip,
  TooltipProps,
} from "@chakra-ui/react";

interface SkillItemProps {
  imgSrc: string;
  altText: string;
  label: string;
  imgWidth?: string;
  area: string;
}

const CustomTooltip: React.FC<TooltipProps> = (props) => (
  <Tooltip
    {...props}
    hasArrow
    bg="gray.700"
    color="white"
    borderRadius="10px"
    p="10px"
    boxShadow="0 4px 12px rgba(0, 0, 0, 0.15)"
    fontSize="14px"
    fontWeight="bold"
    textAlign="center"
    maxW="200px"
  />
);

const AboutSecSkillItem: React.FC<SkillItemProps> = ({
  imgSrc,
  altText,
  label,
  imgWidth = "30px",
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fadeInStyle: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.3s ease-out, transform 0.6s ease-out",
  };

  return (
    <CustomTooltip label={altText}>
      <Box
        ref={ref}
        style={fadeInStyle}
        position="relative"
        p="10px"
        borderRadius="10px"
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
        bg="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(10px)"
        _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
      >
        <Flex gap={"5px"} alignItems="center">
          <Image src={imgSrc} alt={altText} width={imgWidth} />
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
          _groupHover={{ opacity: 1 }}
        >
          {label}
        </Text>
      </Box>
    </CustomTooltip>
  );
};

export default AboutSecSkillItem;
