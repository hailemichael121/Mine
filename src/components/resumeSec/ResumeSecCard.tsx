import React, { useEffect } from "react";
import { Box, Heading, Text, useColorMode, chakra } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ResumeSecCardProps {
  title?: string;
  subtitle?: React.ReactNode;
  dateRange?: string;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "education" | "work" | "skills";
}

const ResumeSecCard: React.FC<ResumeSecCardProps> = ({
  title,
  subtitle,
  dateRange,
  description,
  icon,
  variant = "work",
}) => {
  const { colorMode } = useColorMode();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  // Color variants
  const variants = {
    work: {
      bg: colorMode === "light" ? "white" : "#222222",
      borderColor: "blue.400",
      accent: "blue.500",
    },
    education: {
      bg: colorMode === "light" ? "white" : "#222222",
      borderColor: "purple.400",
      accent: "purple.500",
    },
    skills: {
      bg: colorMode === "light" ? "white" : "#222222",
      borderColor: "green.400",
      accent: "green.500",
    },
  };

  return (
    <Box
      as={motion.div}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      bg={variants[variant].bg}
      p={6}
      borderRadius="xl"
      mb={6}
      position="relative"
      borderLeft="4px solid"
      borderColor={variants[variant].borderColor}
      boxShadow={
        colorMode === "light"
          ? "0 4px 24px rgba(0, 0, 0, 0.05)"
          : "0 4px 24px rgba(0, 0, 0, 0.2)"
      }
      _hover={{
        transform: "translateY(-4px)",
        boxShadow:
          colorMode === "light"
            ? `0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 2px ${variants[variant].borderColor}`
            : `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 2px ${variants[variant].borderColor}`,
      }}
      transition="all 0.3s ease"
    >
      {icon && (
        <Box
          position="absolute"
          top={-4}
          right={6}
          p={2}
          bg={variants[variant].accent}
          borderRadius="full"
        >
          {icon}
        </Box>
      )}

      <Heading
        as="h2"
        size="lg"
        mb={2}
        fontWeight="600"
        color={colorMode === "light" ? "gray.800" : "white"}
      >
        {title}
      </Heading>

      <Text
        fontSize="md"
        mb={2}
        color={variants[variant].accent}
        fontWeight="500"
      >
        {subtitle}
      </Text>

      <chakra.span
        display="inline-block"
        px={2}
        py={1}
        mb={4}
        fontSize="sm"
        bg={colorMode === "light" ? "gray.100" : "gray.700"}
        color={colorMode === "light" ? "gray.600" : "gray.300"}
        borderRadius="md"
      >
        {dateRange}
      </chakra.span>

      <Box fontSize="md" lineHeight="tall">
        {description}
      </Box>
    </Box>
  );
};

export default ResumeSecCard;
