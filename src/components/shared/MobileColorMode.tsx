import { HStack, IconButton, useColorMode } from "@chakra-ui/react";
import { IoIosSwitch } from "react-icons/io";

const MobileColorModeSwitch = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <HStack
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="fixed"
      top={10}
      right={20}
      zIndex={1000}
    >
      <IconButton
        aria-label="Toggle color mode"
        icon={<IoIosSwitch size={30} />}
        onClick={toggleColorMode}
        background="transparent"
        _hover={{ bg: "gray.100" }}
        _focus={{ outline: "none" }}
      />
    </HStack>
  );
};

export default MobileColorModeSwitch;
