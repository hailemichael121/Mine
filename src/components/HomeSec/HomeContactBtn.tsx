import {
  Button,
  useColorMode,
  HStack,
  Text,
  keyframes,
} from "@chakra-ui/react";
import React from "react";
import { FaPhone } from "react-icons/fa6";

// subtle glowing animation
const glow = keyframes`
  0% { box-shadow: 0 0 8px rgba(245,197,66,0.4); }
  50% { box-shadow: 0 0 16px rgba(245,197,66,0.7); }
  100% { box-shadow: 0 0 8px rgba(245,197,66,0.4); }
`;

const HomeContactBtn: React.FC = () => {
  const { colorMode } = useColorMode();
  const isLight = colorMode === "light";

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button
      onClick={() => scrollToSection("contacts")}
      width={{ base: "full", md: "auto" }}
      borderRadius={{ base: "20px", md: "30% 12px 45px" }}
      background={isLight ? "#1E2A4A" : "#F5C542"}
      color={isLight ? "#FFFFFF" : "#0B0F1A"}
      border="1px solid #F5C542"
      fontWeight="semibold"
      fontSize={{ base: "md", md: "lg" }}
      transition="all 0.4s ease"
      position="relative"
      overflow="hidden"
      _hover={{
        background: isLight
          ? "linear-gradient(45deg, #F5C542, #FFD966)"
          : "linear-gradient(45deg, #FFD966, #E0B93F)",
        color: "#0B0F1A",
        transform: "translateY(-3px)",
        animation: `${glow} 1.5s infinite alternate`,
      }}
      _active={{
        transform: "translateY(0)",
        boxShadow: "0 0 12px rgba(245,197,66,0.5)",
      }}
    >
      <HStack spacing={3}>
        <FaPhone
          style={{
            transition: "all 0.3s ease",
          }}
          className="icon-hover"
        />{" "}
        <Text>Contact</Text>
      </HStack>
      <style>{`
        .icon-hover:hover {
          transform: translateX(4px) rotate(10deg);
        }
      `}</style>
    </Button>
  );
};

export default HomeContactBtn;
