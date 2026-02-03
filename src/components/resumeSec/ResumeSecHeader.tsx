import { Heading, HStack, Text, Box, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaFileAlt } from "react-icons/fa";

const ResumeSecHeader: React.FC = () => {
  const { colorMode } = useColorMode();
  const baseColor = colorMode === "light" ? "#262626" : "#FFFFFF";
  return (
    <Box mb={10}>
      <HStack spacing={4} align="center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaFileAlt size={30} color={baseColor} />
        </motion.div>
        <Box>
          <Heading as="h1" size="xl" fontWeight="700" color={baseColor}>
            My Resume
          </Heading>
          <Text fontSize="lg" color={baseColor} mt={1} opacity={0.75}>
            Education, Experience & Skills
          </Text>
        </Box>
      </HStack>
      <Box
        mt={6}
        height="1px"
        width={{ base: "100%", md: "70%" }}
        bg={baseColor}
        opacity={0.2}
      />
    </Box>
  );
};

export default ResumeSecHeader;
