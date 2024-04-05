import { useColorMode, useOutsideClick } from "@chakra-ui/react";
import { RiMenu4Line } from "react-icons/ri";
import { RiMenu5Fill } from "react-icons/ri";

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
      {isOpen && <Menu />}
      {isOpen === false ? (
        <RiMenu5Fill
          color={colorMode === "dark" ? "white" : "black"}
          size={35}
          transform={isIconRotated ? "rotate(360deg)" : ""}
          cursor="pointer"
          onClick={handleClick}
        />
      ) : (
        <RiMenu4Line
          color={colorMode === "dark" ? "white" : "black"}
          size={35}
          transform={isIconRotated ? "rotate(360deg)" : ""}
          cursor="pointer"
          onClick={handleClick}
        />
      )}
    </>
  );
};

export default Header;
