import { Button, HStack, useColorMode } from "@chakra-ui/react";
import { FaRegLightbulb } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack display="flex" justifyContent="center" alignItems="center">
      <Button
        pt={45}
        onClick={toggleColorMode}
        background="transparent"
        size="100px"
        _hover={{ bg: "transparent", size: "120px" }}
        transition="1.5s"
        position="relative"
      >
        {colorMode === "dark" ? (
          <>
            <FaLightbulb
              style={{
                transform: "rotate(180deg)",
                boxShadow: "0px 0px 70px 20px  #f1c008",
                borderRadius: "100px",
              }}
              color="#f1c008"
              size={52}
            />
            <span
              style={{
                position: "absolute",
                top: "-5px", // Adjust top position for desired wire length
                left: "50%", // Center the line horizontally
                transform: "translateX(-50%)", // Offset for proper centering
                width: "0",
                height: "100",
                borderTop: "49px solid  #f1c008", // Adjust color and thickness
                borderLeft: "1px solid #f1c008",
                borderRight: "1px solid  #f1c008",
                borderBottom: "2px solid #f1c008",
              }}
            />
          </>
        ) : (
          <>
            <FaRegLightbulb
              style={{
                transform: "rotate(180deg)",
                boxShadow: "0px 5px 10px black",
                borderRadius: "50px",
              }}
              color="black"
              size={55}
            />
            <span
              style={{
                position: "absolute",
                top: "-5px", // Adjust top position for desired wire length
                left: "50%", // Center the line horizontally
                transform: "translateX(-50%)", // Offset for proper centering
                width: "0",
                height: "100",
                borderTop: "49px solid black", // Adjust color and thickness
                borderLeft: "1px solid black",
                borderRight: "3px solid none",
                borderBottom: "1px solid none",
              }}
            />
          </>
        )}
      </Button>
    </HStack>
  );
};

export default ColorModeSwitch;
