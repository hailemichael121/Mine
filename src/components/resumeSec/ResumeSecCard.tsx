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
  const baseColor = colorMode === "light" ? "#262626" : "#FFFFFF";
  const cardBg = colorMode === "light" ? "#FFFFFF" : "#262626";

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

  return (
    <Box
      as={motion.div}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      data-variant={variant}
      bg={cardBg}
      p={{ base: 5, md: 6 }}
      borderRadius="2xl"
      mb={6}
      position="relative"
      border="1px solid"
      borderColor={baseColor}
      boxShadow={`0 20px 40px -32px ${baseColor}`}
      _before={{
        content: '""',
        position: "absolute",
        top: "14px",
        left: "14px",
        right: "14px",
        height: "1px",
        backgroundColor: baseColor,
        opacity: 0.25,
      }}
      _hover={{
        transform: "translateY(-6px)",
        boxShadow: `0 26px 50px -34px ${baseColor}`,
      }}
      transition="all 0.35s ease"
    >
      {icon && (
        <Box
          position="absolute"
          top={{ base: -3, md: -4 }}
          right={{ base: 4, md: 6 }}
          p={2}
          bg={cardBg}
          border="1px solid"
          borderColor={baseColor}
          borderRadius="full"
          color={baseColor}
        >
          {icon}
        </Box>
      )}

      <Heading
        as="h2"
        size="lg"
        mb={2}
        fontWeight="600"
        color={baseColor}
      >
        {title}
      </Heading>

      <Text
        fontSize="md"
        mb={2}
        color={baseColor}
        opacity={0.8}
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
        border="1px solid"
        borderColor={baseColor}
        color={baseColor}
        borderRadius="full"
        opacity={0.8}
      >
        {dateRange}
      </chakra.span>

      <Box fontSize="md" lineHeight="tall" color={baseColor} opacity={0.9}>
        {description}
      </Box>
    </Box>
  );
};

export default ResumeSecCard;
