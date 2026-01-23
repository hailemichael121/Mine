import {
  Button,
  HStack,
  Text,
  useColorMode,
  keyframes,
} from "@chakra-ui/react";
import React from "react";
import { FaDownload, FaPhone } from "react-icons/fa";

// subtle glowing animation
const glow = keyframes`
  0% { box-shadow: 0 0 6px rgba(245,197,66,0.3); }
  50% { box-shadow: 0 0 14px rgba(245,197,66,0.7); }
  100% { box-shadow: 0 0 6px rgba(245,197,66,0.3); }
`;

const HomeMobileActionBtns: React.FC = () => {
  const { colorMode } = useColorMode();
  const isLight = colorMode === "light";

  const handleDownloadResume = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=1ozahY5lwU4uWIA2vOpeef5ThVuP6tLsd",
      "_blank",
    );
  };

  const scrollToContacts = () => {
    const section = document.getElementById("contacts");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HStack
      spacing={4}
      mt={6}
      justify="center"
      position="relative"
      w="100%"
      zIndex={10}
    >
      {/* Floating Resume Button */}
      <Button
        onClick={handleDownloadResume}
        borderRadius="50px 30% 20% 50%"
        background={isLight ? "#1E2A4A" : "#F5C542"}
        color={isLight ? "#FFF" : "#0B0F1A"}
        border="1px solid #F5C542"
        w="48%"
        fontWeight="bold"
        fontSize="md"
        shadow="0px 5px 12px rgba(245,197,66,0.6)"
        transition="all 0.4s ease"
        position="relative"
        overflow="hidden"
        _hover={{
          background: isLight
            ? "linear-gradient(45deg, #F5C542, #FFD966)"
            : "linear-gradient(45deg, #FFD966, #E0B93F)",
          color: "#0B0F1A",
          transform: "translateY(-4px) rotate(-2deg)",
          animation: `${glow} 1.5s infinite alternate`,
        }}
      >
        <HStack spacing={2} justify="center">
          <FaDownload /> <Text>Resume</Text>
        </HStack>
      </Button>

      {/* Floating Contact Button */}
      <Button
        onClick={scrollToContacts}
        borderRadius="30% 50% 50% 20%"
        background={isLight ? "#1E2A4A" : "#F5C542"}
        color={isLight ? "#FFF" : "#0B0F1A"}
        border="1px solid #F5C542"
        w="48%"
        fontWeight="bold"
        fontSize="md"
        shadow="0px 5px 12px rgba(245,197,66,0.6)"
        transition="all 0.4s ease"
        position="relative"
        overflow="hidden"
        _hover={{
          background: isLight
            ? "linear-gradient(45deg, #F5C542, #FFD966)"
            : "linear-gradient(45deg, #FFD966, #E0B93F)",
          color: "#0B0F1A",
          transform: "translateY(-4px) rotate(2deg)",
          animation: `${glow} 1.5s infinite alternate`,
        }}
      >
        <HStack spacing={2} justify="center">
          <FaPhone /> <Text>Contact</Text>
        </HStack>
      </Button>
    </HStack>
  );
};

export default HomeMobileActionBtns;
