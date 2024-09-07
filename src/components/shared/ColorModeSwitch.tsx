import { Button, HStack, useColorMode } from "@chakra-ui/react";
import { FaRegLightbulb } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack
      display="flex"
      ml={"40px"}
      justifyContent="right"
      alignItems="center"
      position="fixed"
      zIndex={10000}
    >
      <Button
        pt={95}
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
                transform: "rotate(-180deg)",
                boxShadow: "0px 0px 100px 0px  #f1c008",
                borderRadius: "1000px",
                backgroundColor: "#2D2711",
              }}
              color="#f1c008"
              size={55}
            />
            <span
              style={{
                position: "absolute",
                top: "-5px",
                left: "50%", // Center the line horizontally
                transform: "translateX(-50%)", // Offset for proper centering
                height: "100px",
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
                // boxShadow: "0px 0px 70px 20px  black",
                borderRadius: "100px",
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
                height: "100px",
                borderTop: "49px solid black", // Adjust color and thickness
                borderLeft: "1px solid black",
                borderRight: "3px solid black",
                borderBottom: "1px solid black",
              }}
            />
          </>
        )}
      </Button>
    </HStack>
  );
};

export default ColorModeSwitch;
