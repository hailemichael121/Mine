import {
  Box,
  SimpleGrid,
  VStack,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import {
  ResumeSecEducation,
  ResumeSecHeader,
  ResumeSecSkills,
  ResumeSecWorkExperience,
} from ".";

const Resume: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const { colorMode } = useColorMode();
  const fadeColor =
    colorMode === "light" ? "rgba(38, 38, 38, 0.2)" : "rgba(255, 255, 255, 0.2)";

  return (
    <Box maxW="1200px" mx="auto" px={{ base: 5, md: 8 }} py={10}>
      <ResumeSecHeader />

      {isMobile ? (
        <VStack spacing={10} align="stretch">
          <Box position="relative">
            <Box
              display="flex"
              gap={4}
              overflowX="auto"
              scrollSnapType="x mandatory"
              pb={4}
              css={{
                scrollbarWidth: "none",
              }}
              pr={6}
              _after={{
                content: '""',
                position: "absolute",
                top: 0,
                right: 0,
                width: "80px",
                height: "100%",
                bgGradient: `linear(to-l, ${fadeColor}, transparent)`,
                pointerEvents: "none",
              }}
              sx={{
                "&::-webkit-scrollbar": { display: "none" },
                "& > *": {
                  minW: "88%",
                  scrollSnapAlign: "center",
                  flexShrink: 0,
                },
              }}
            >
              <ResumeSecWorkExperience />
            </Box>
          </Box>

          <Box position="relative">
            <Box
              display="flex"
              gap={4}
              overflowX="auto"
              scrollSnapType="x mandatory"
              pb={4}
              css={{
                scrollbarWidth: "none",
              }}
              pr={6}
              _after={{
                content: '""',
                position: "absolute",
                top: 0,
                right: 0,
                width: "80px",
                height: "100%",
                bgGradient: `linear(to-l, ${fadeColor}, transparent)`,
                pointerEvents: "none",
              }}
              sx={{
                "&::-webkit-scrollbar": { display: "none" },
                "& > *": {
                  minW: "88%",
                  scrollSnapAlign: "center",
                  flexShrink: 0,
                },
              }}
            >
              <ResumeSecEducation />
              <ResumeSecSkills />
            </Box>
          </Box>
        </VStack>
      ) : (
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={16}
          alignItems="flex-start"
        >
          {/* Left Column */}
          <VStack spacing={8} align="stretch">
            <ResumeSecWorkExperience />
          </VStack>

          {/* Right Column */}
          <VStack spacing={8} align="stretch">
            <ResumeSecEducation />
            <ResumeSecSkills />
            {/* Add other sections here if needed */}
          </VStack>
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Resume;
