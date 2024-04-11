import { Box, Heading, Image, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react"; // Import useState hook

import ProfileBox from "./ProfileBox";
import DisplayBox from "../middle/DisplayBox";
import ContactBox from "../footer/ContactBox";

const PageHero = () => {
  const [isJumping, setIsJumping] = useState(false); // State for jump animation

  useEffect(() => {
    const handleKeyPress = (event: { key: string }) => {
      if (event.key === " ") {
        setIsJumping(true);
        setTimeout(() => setIsJumping(false), 500); // Simulate jump duration
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress); // Cleanup
  }, []);
  return (
    <Box margin="0px" padding="0px" overflow="hidden">
      <Image
        id="dino"
        src="/dino.png" // Replace with your dino image
        position="absolute"
        bottom="30px"
        left="50%"
        transform="translateX(-50%)"
        width="80px"
        height="80px"
        // Add styles for jumping animation (use CSS or inline styles)
        style={isJumping ? { transform: "translateY(-100px)" } : {}}
      />

      <Box
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={"100vh"}
      >
        <Image
          position="absolute"
          id="hill1"
          top={0}
          left={0}
          width={"100%"}
          pointerEvents={"none"}
          src="/hill1.png"
        />
        <Image
          position="absolute"
          id="hill2"
          top={0}
          left={0}
          width={"100%"}
          pointerEvents={"none"}
          src="/hill2.png"
        />
        <Image
          position="absolute"
          id="hill3"
          top={0}
          left={0}
          width={"100%"}
          pointerEvents={"none"}
          src="/hill3.png"
        />
        <Image
          position="absolute"
          id="hill4"
          top={0}
          left={0}
          width={"100%"}
          pointerEvents={"none"}
          src="/hill4.png"
        />
        <Image
          position="absolute"
          id="hill5"
          top={0}
          left={0}
          width={"100%"}
          pointerEvents={"none"}
          src="/hill5.png"
        />
        <Image
          id="tree"
          position="absolute"
          top={0}
          left={0}
          width={"100%"}
          pointerEvents={"none"}
          src="/tree.png"
        />
        <Heading
          as="h2"
          id="text"
          position={"absolute"}
          fontSize={"5em"}
          color="#fff"
          textShadow="2px 2px 4px rgba(0,0,0,.2"
        >
          Hey, Welcome !
        </Heading>
        <Image
          position="absolute"
          id="leaf"
          top={0}
          left={0}
          width={"100%"}
          pointerEvents={"none"}
          src="/leaf.png"
        />
        <Image
          position="absolute"
          id="plant"
          top={0}
          left={0}
          width={"100%"}
          pointerEvents={"none"}
          src="/plant.png"
        />
      </Box>
    </Box>
  );
};

export default PageHero;

const text = document.getElementById("text");
const leaf = document.getElementById("leaf");
const hill1 = document.getElementById("hill1");
const hill4 = document.getElementById("hill4");
const hill5 = document.getElementById("hill5");
window.addEventListener("scroll", () => {
  const value = window.scrollY;

  text.style.marginTop = value * 2.5 + "px";
  leaf.style.top = value * -1.5 + "px";
  leaf.style.left = value * 1.6 + "px";
  hill5.style.left = value * 1.5 + "px";
  hill4.style.left = value * -1.5 + "px";
  hill1.style.top = value * 1 + "px";
});
