import React, { useEffect } from "react";
import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.3, // Trigger animation when 10% of the component is in view
  });

  const boxVariants = {
    hidden: { opacity: 0, x: "-10vw" },
    visible: {
      opacity: 1,
      x: "0vw",
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <Box
      as={motion.div}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={boxVariants}
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
