import {
  Box,
  Button,
  Stack,
  useColorMode,
  useOutsideClick,
} from "@chakra-ui/react";
import { GiLevelFour } from "react-icons/gi";
import { Link } from "@chakra-ui/react"; // Import Link for navigation
import { useRef, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Start menu closed
  const menuRef = useRef<HTMLDivElement>(null);

  const { colorMode } = useColorMode();
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  useOutsideClick({
    ref: menuRef,
    handler: closeMenu,
  });

  return (
    <>
      <Box
        as="span"
        transition=" 10s " // Adjust transition for menu swing
        cursor="cell"
        _active={{ transform: "rotate(360deg)" }}
        color={colorMode === "dark" ? "white" : "black"}
        onClick={handleClick}
      >
        <GiLevelFour size={35} />
      </Box>
      {isOpen && ( // Conditionally render menu based on isOpen state
        <Stack
          ref={menuRef}
          direction={"column"}
          position="absolute"
          top={70}
          right={2}
          transformOrigin={{ top: "50%", right: "0" }}
          transition=" 10s "
          backgroundColor={colorMode === "dark" ? "wheat" : "White"}
          color={colorMode === "dark" ? "black" : "black"}
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.15)"
          p={5}
          borderBottomRadius={20}
        >
          <Button
            color={colorMode === "dark" ? "black" : "black"}
            boxShadow="0px 4px 8px rgba(0, 0, 1, 0.15)"
          >
            <Link>Home</Link>
          </Button>
          <Button
            color={colorMode === "dark" ? "black" : "black"}
            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.15)"
          >
            <Link>Achievements</Link>
          </Button>
          <Button
            color={colorMode === "dark" ? "black" : "black"}
            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.15)"
          >
            <Link>Gallery</Link>
          </Button>
          <Button
            color={colorMode === "dark" ? "black" : "black"}
            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.15)"
          >
            <Link>Contact Me</Link>
          </Button>
        </Stack>
      )}
    </>
  );
};

export default Header;
