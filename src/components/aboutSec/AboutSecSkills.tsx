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
import { skillData } from "./skillData"; // Import the skill data

const AboutSecSkills: React.FC = () => {
  const { colorMode } = useColorMode();
  const prefersReducedMotion = usePrefersReducedMotion();
  const isCompact = useBreakpointValue({ base: true, md: false });
  const baseColor = colorMode === "light" ? "#262626" : "#FFFFFF";
  const pageBg = colorMode === "light" ? "#FFFFFF" : "#262626";

  const marquee = keyframes`
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  `;

  const handleSkillClick = (category?: string) => {
    if (!category) return;
    window.dispatchEvent(
      new CustomEvent("skillCategorySelect", { detail: { category } })
    );
  };

  return (
    <Box position="relative" py={{ base: 6, md: 8 }}>
      <Box
        position="relative"
        overflow="hidden"
        maxW={{ base: "100%", md: "780px", lg: "940px" }}
        mx="auto"
        px={{ base: 2, md: 4 }}
      >
        <Box
          position="absolute"
          inset="0"
          pointerEvents="none"
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: { base: "30px", md: "60px" },
            bgGradient: `linear(to-r, ${pageBg}, transparent)`,
            zIndex: 1,
          }}
          _after={{
            content: '""',
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: { base: "30px", md: "60px" },
            bgGradient: `linear(to-l, ${pageBg}, transparent)`,
            zIndex: 1,
          }}
        />

        <Flex
          gap={isCompact ? 4 : 5}
          align="center"
          width="200%"
          animation={
            prefersReducedMotion ? undefined : `${marquee} 34s linear infinite`
          }
        >
          {[...skillData, ...skillData].map((skill, index) => (
            <AboutSecSkillItem
              key={`${skill.label}-${index}`}
              imgSrc={skill.imgSrc}
              altText={skill.altText}
              label={skill.label}
              area={skill.label.toLowerCase()}
              href={skill.projectCategory ? "#projects" : undefined}
              onClick={() => handleSkillClick(skill.projectCategory)}
            />
          ))}
        </Flex>
      </Box>
      <Box mt={6} height="1px" width="100%" bg={baseColor} opacity={0.2} />
    </Box>
  );
};

export default AboutSecSkills;
