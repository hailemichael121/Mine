import { Button, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Menu = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Button
        color={colorMode === "dark" ? "wheat" : "black"}
        boxShadow="0px 4px 8px rgba(0, 0, 1, 0.15)"
      >
        <Link to={"/"}>Home</Link>
      </Button>
      <Button
        color={colorMode === "dark" ? "wheat" : "black"}
        boxShadow="0px 4px 8px rgba(0, 0, 0, 0.15)"
      >
        <Link to={"/Achievments"}>Achievements</Link>
      </Button>
      <Button
        color={colorMode === "dark" ? "wheat" : "black"}
        boxShadow="0px 4px 8px rgba(0, 0, 0, 0.15)"
      >
        <Link to={"/Gallery"}>Gallery</Link>
      </Button>
      <Button
        color={colorMode === "dark" ? "wheat" : "black"}
        boxShadow="0px 4px 8px rgba(0, 0, 0, 0.15)"
      >
        <Link to={"/Contact"}>Contact Me</Link>
      </Button>
    </>
  );
};

export default Menu;
