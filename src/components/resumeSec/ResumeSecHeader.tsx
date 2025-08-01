import { Heading, HStack, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaFileAlt } from "react-icons/fa";

const ResumeSecHeader: React.FC = () => {
  return (
    <Box mb={10}>
      <HStack spacing={4} align="center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaFileAlt size={32} />
        </motion.div>
        <Box>
          <Heading as="h1" size="xl" fontWeight="700">
            My Resume
          </Heading>
          <Text fontSize="lg" color="gray.500" mt={1}>
            Education, Experience & Skills
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default ResumeSecHeader;
