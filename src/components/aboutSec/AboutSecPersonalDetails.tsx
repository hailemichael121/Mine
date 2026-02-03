import {
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
  Link,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { CiMicrophoneOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { PiBracketsCurlyLight } from "react-icons/pi";

// Define the type for personal details
type PersonalDetail = {
  icon: React.ElementType;
  label: string;
  value: string | { base: string; md: string; lg: string };
  isLink?: boolean;
  linkUrl?: string; // Added linkUrl for clickable links
};

const personalDetails: PersonalDetail[] = [
  { icon: CiMicrophoneOn, label: "Name", value: "Yihun Shekuri" },
  {
    icon: TfiEmail,
    label: "Email",
    value: "yihunaashe@gmail.com",
    isLink: true,
  },
  {
    icon: PiBracketsCurlyLight,
    label: "Freelance",
    value: {
      base: "Available",
      md: "Available",
      lg: "Available for hire on Upwork",
    },
    isLink: true,
    linkUrl: "https://www.upwork.com", // Example Upwork link
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: {
      base: "LinkedIn", // Shortened for small screens
      md: "www.linkedin.com/in/hailemichael121",
      lg: "www.linkedin.com/in/hailemichael121",
    },
    isLink: true,
    linkUrl: "https://www.linkedin.com/in/hailemichael121", // LinkedIn profile link
  },
];

const AboutSecPersonalDetails: React.FC = () => {
  const isSmallScreen = useBreakpointValue({ base: true, md: true, lg: false });
  const { colorMode } = useColorMode();
  const baseColor = colorMode === "light" ? "#262626" : "#FFFFFF";
  const mutedColor =
    colorMode === "light"
      ? "rgba(38, 38, 38, 0.7)"
      : "rgba(255, 255, 255, 0.7)";

  return (
    <VStack align="flex-start" spacing={4} w="100%">
      <Heading
        size="lg"
        fontSize={{ base: "20px", md: "24px" }}
        color={baseColor}
      >
        Personal Details
      </Heading>
      <VStack spacing={3} w="100%">
        {personalDetails.map((detail, index) => (
          <HStack
            key={index}
            w="100%"
            justifyContent="flex-start" // Align everything at the start
            align="flex-start"
            fontSize={{ base: "14px", md: "16px" }}
            wrap="wrap"
            spacing={4} // Ensure enough space between icon and text
          >
            <Flex color={mutedColor} align="center" flexShrink={0} w="150px">
              <detail.icon fontSize="20px" />
              <Text pl={2}>{detail.label}:</Text>
            </Flex>

            {detail.isLink ? (
              <Link
                href={detail.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                color={baseColor}
                opacity={0.8}
                _hover={{ opacity: 1, textDecoration: "none" }}
              >
                <Text textAlign="left" wordBreak="break-word">
                  {typeof detail.value === "string"
                    ? detail.value
                    : detail.value.base}
                </Text>
              </Link>
            ) : (
              <>
                {!isSmallScreen && typeof detail.value !== "string" ? (
                  <Text
                    textAlign="left"
                    wordBreak="break-word"
                    color={baseColor}
                  >
                    {detail.value.lg}
                  </Text>
                ) : (
                  <Text
                    textAlign="left"
                    wordBreak="break-word"
                    color={baseColor}
                  >
                    {typeof detail.value === "string"
                      ? detail.value
                      : detail.value.base}
                  </Text>
                )}
              </>
            )}
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
};

export default AboutSecPersonalDetails;
