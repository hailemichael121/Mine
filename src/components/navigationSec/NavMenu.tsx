import { Button, useColorMode, Flex } from "@chakra-ui/react";
import ThemeToggle from "../shared/ThemeToggleBtn";

const NavMenu: React.FC<{ floatingToggle: boolean }> = ({ floatingToggle }) => {
  const { colorMode } = useColorMode();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Flex pl={20} align="center" gap={3}>
      <Button
        width="150px"
        fontSize="15px"
        variant="ghost" // Simplified background="transparent"
        color={colorMode === "dark" ? "#D5D5D5" : "black"}
        onClick={() => scrollToSection("about")}
        _hover={{ color: "#30F2F2" }}
      >
        About
      </Button>

      <Button
        width="150px"
        fontSize="15px"
        variant="ghost"
        color={colorMode === "dark" ? "#D5D5D5" : "black"}
        onClick={() => scrollToSection("projects")}
        _hover={{ color: "#30F2F2" }}
      >
        Projects
      </Button>

      <Flex align="center" gap={2}>
        <Button
          width="150px"
          fontSize="15px"
          variant="ghost"
          color={colorMode === "dark" ? "#D5D5D5" : "black"}
          onClick={() => scrollToSection("contacts")}
          _hover={{ color: "#30F2F2" }}
        >
          Contact
        </Button>

        <ThemeToggle floating={floatingToggle} />
      </Flex>
    </Flex>
  );
};

export default NavMenu;
