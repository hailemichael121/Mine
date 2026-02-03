import {
  Box,
  Flex,
  useBreakpointValue,
  useColorMode,
  usePrefersReducedMotion,
  keyframes,
} from "@chakra-ui/react";
import React from "react";
import AboutSecSkillItem from "./AboutSecSkillItem";
import { skillData } from "./skillData";

const AboutSecSkills: React.FC = () => {
  const { colorMode } = useColorMode();
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const baseColor = colorMode === "light" ? "#262626" : "#FFFFFF";
  const pageBg = colorMode === "light" ? "#FFFFFF" : "#262626";

  const marquee = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  `;

  const handleSkillClick = (category?: string) => {
    if (!category) return;
    window.dispatchEvent(
      new CustomEvent("skillCategorySelect", { detail: { category } }),
    );
  };

  return (
    <Box position="relative" py={{ base: 4, md: 8 }} overflow="hidden">
      <Box
        position="relative"
        maxW={{ base: "100vw", lg: "800px" }}
        mx="auto"
        px={{ base: 4, md: 0 }}
      >
        {/* Gradient Overlays (Fades) */}
        <Box
          position="absolute"
          inset="0"
          pointerEvents="none"
          zIndex={2}
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: { base: "30px", md: "60px" },
            bgGradient: `linear(to-r, ${pageBg}, transparent)`,
          }}
          _after={{
            content: '""',
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: { base: "30px", md: "60px" },
            bgGradient: `linear(to-l, ${pageBg}, transparent)`,
          }}
        />

        {/* Marquee Wrapper */}
        <Box overflow="hidden">
          <Flex
            display="inline-flex"
            gap={{ base: 3, md: 5 }}
            align="center"
            minW="max-content"
            animation={
              prefersReducedMotion
                ? undefined
                : `${marquee} 30s linear infinite`
            }
          >
            {/* Double the data for seamless looping */}
            {[...skillData, ...skillData].map((skill, index) => (
              <AboutSecSkillItem
                key={`${skill.label}-${index}`}
                imgSrc={skill.imgSrc}
                altText={skill.altText}
                label={skill.label}
                imgWidth={isMobile ? "24px" : "30px"}
                onClick={() => handleSkillClick(skill.projectCategory)}
              />
            ))}
          </Flex>
        </Box>
      </Box>

      {/* Decorative Bottom Line */}
      <Box
        mt={10}
        height="1px"
        width="100%"
        maxW={{ base: "90%", lg: "800px" }}
        mx="auto"
        bg={baseColor}
        opacity={0.1}
      />
    </Box>
  );
};

export default AboutSecSkills;
