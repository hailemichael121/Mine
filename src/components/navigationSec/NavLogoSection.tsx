import { Stack, Heading, Image, useColorMode } from "@chakra-ui/react";
import React from "react";

const NavLogoSection: React.FC = () => {
  const { colorMode } = useColorMode();
  return (
    <Stack direction="row" align="center" spacing={0} cursor="pointer">
      <Image
        transition="0.3s"
        transform={"rotate(5deg)"}
        _hover={{ transform: "rotate(15deg)" }}
        backgroundColor={"transparent"}
        borderRadius={colorMode === "dark" ? "35px" : "15px 20px 15px 30px"}
        width="100px"
        height="100px"
        m={0}
        bg={colorMode === "light" ? "white" : "var(--chakra-colors-secondary)"}
        src={
          colorMode === "light"
            ? "images/LogoLightMood.png"
            : "images/LogoDarkMood.png"
        }
      />

      <Heading
        color={colorMode === "light" ? "#222222" : "#FFFFFF"}
        _hover={{
          textDecoration: "underline",
          textUnderlineOffset: "4px",
          textDecorationColor: "#7F27FF",
        }}
      >
        Yihun Shekuri
      </Heading>
    </Stack>
  );
};

export default NavLogoSection;
