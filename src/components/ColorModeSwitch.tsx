import { Button, HStack, useColorMode } from "@chakra-ui/react";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Button
        pb={2}
        onClick={toggleColorMode}
        background="transparent"
        size="100px"
        _hover={{ bg: "transparent", size: "120px" }}
        transition="1.5s"
      >
        {colorMode === "dark" ? (
          <IoSunnyOutline color="black" size={35} />
        ) : (
          <IoMoonOutline size={35} />
        )}
      </Button>
    </HStack>
  );
};

export default ColorModeSwitch;
