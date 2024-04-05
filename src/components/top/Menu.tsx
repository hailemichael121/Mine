import { Button, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../../App.css";
import "../../fonts/Mova.ttf";

const Menu = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Button
        color={colorMode === "dark" ? "wheat" : "black"}
        width="150px"
        transition="0.8s"
        backgroundColor="transparent"
        _hover={{
          borderBottomWidth: "5px",
          borderColor: "black",
          backgroundColor: "transparent",
        }}
        fontFamily="Arenq"
      >
        <Link to={"/"}>About</Link>
      </Button>
      <Button
        color={colorMode === "dark" ? "wheat" : "black"}
        width="150px"
        transition="0.8s"
        backgroundColor="transparent"
        _hover={{
          borderBottomWidth: "5px",
          borderColor: "black",
          backgroundColor: "transparent",
        }}
      >
        <Link to={"/Achievments"}>Projects</Link>
      </Button>

      <Button
        color={colorMode === "dark" ? "wheat" : "black"}
        width="150px"
        backgroundColor="transparent"
        transition="0.1ms"
        _hover={{
          borderBottomWidth: "5px",
          borderColor: "black",
          backgroundColor: "transparent",
        }}
      >
        <Link to={"/Contact"}>Contact</Link>
      </Button>
    </>
  );
};

export default Menu;
