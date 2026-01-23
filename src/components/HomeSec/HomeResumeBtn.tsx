import {
  Button,
  useColorMode,
  HStack,
  Text,
  keyframes,
} from "@chakra-ui/react";
import React from "react";
import { FaDownload } from "react-icons/fa";

// subtle glowing animation for hover
const glow = keyframes`
  0% { box-shadow: 0 0 8px rgba(245,197,66,0.4); }
  50% { box-shadow: 0 0 18px rgba(245,197,66,0.7); }
  100% { box-shadow: 0 0 8px rgba(245,197,66,0.4); }
`;

const HomeResumeBtn: React.FC = () => {
  const { colorMode } = useColorMode();
  const isLight = colorMode === "light";

  const handleDownloadResume = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=1ozahY5lwU4uWIA2vOpeef5ThVuP6tLsd",
      "_blank",
    );
  };

  return (
    <Button
      onClick={handleDownloadResume}
      width={{ base: "full", md: "auto" }}
      borderRadius={{ base: "60px", md: "30% 50px 10px" }}
      backgroundColor={isLight ? "primary" : "secondary"}
      color={!isLight ? "#FFFFFF" : "#0B0F1A"}
      border="1px solid #F5C542"
      fontWeight="semibold"
      fontSize={{ base: "md", md: "lg" }}
      position="relative"
      overflow="hidden"
      shadow="0px 5px 10px rgba(245, 197, 66, 0.6)"
      transition="all 0.3s ease"
      _hover={{
        background: isLight
          ? "linear-gradient(45deg, #F5C542, #FFD966)"
          : "linear-gradient(45deg, #FFD966, #E0B93F)",
        color: "#0B0F1A",
        transform: "translateY(-2px)",
        animation: `${glow} 1.5s infinite alternate`,
      }}
      _active={{
        transform: "translateY(0)",
        boxShadow: "0 0 10px rgba(245, 197, 66, 0.4)",
      }}
    >
      <HStack spacing={2}>
        <FaDownload
          style={{
            transition: "all 0.3s ease",
          }}
          className="icon-hover"
        />{" "}
        <Text>Download Resume</Text>
      </HStack>
      <style>{`
        .icon-hover:hover {
          transform: translateY(-2px) rotate(-10deg);
        }
      `}</style>
    </Button>
  );
};

export default HomeResumeBtn;
