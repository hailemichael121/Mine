import { Box, Stack, useColorMode, useOutsideClick } from "@chakra-ui/react";
import { GiLevelFour } from "react-icons/gi";
import { useRef, useState } from "react";
import Menu from "./Menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isIconRotated, setIsIconRotated] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const { colorMode } = useColorMode();
  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsIconRotated(!isIconRotated);
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
        transition=" 1s "
        cursor="cell"
        color={colorMode === "dark" ? "white" : "black"}
        transform={isIconRotated ? "rotate(360deg)" : ""}
        onClick={handleClick}
      >
        <GiLevelFour size={35} />
      </Box>
      {isOpen && (
        <Stack
          ref={menuRef}
          direction={"column"}
          position="absolute"
          top="0px"
          right="80px"
          transformOrigin={{ top: "50%", right: "0" }}
          transition=" 1s "
          backgroundColor={colorMode === "dark" ? "gray.800" : "White"}
          color={colorMode === "dark" ? "black" : "black"}
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.15)"
          p={5}
          borderBottomRadius={20}
          borderTopRightRadius={20}
          mr="77px"
        >
          <Menu />
        </Stack>
      )}
    </>
  );
};

export default Header;
