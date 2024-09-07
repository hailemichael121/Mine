import { Stack, Heading, Image, useColorMode } from "@chakra-ui/react";
import React from "react";

const NavLogoSection: React.FC = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      {" "}
      <Stack direction="row">
        <Image
          transition=" 0.3s "
          transform={"rotate(5deg)"}
          cursor={"pointer"}
          _hover={{ transform: "rotate(15deg)", mr: "0px" }}
          backgroundColor={"transparent"}
          borderRadius={colorMode === "dark" ? "35px" : "15px 20px 15px 30px"}
          width="50px"
          height="50px"
          src={
            colorMode == "light"
              ? "images/LogoLightMood.jpg "
              : "images/LogoDarkMood.png"
          }
        />

        <Heading
          pl="10px"
          color={colorMode == "light" ? "  #222222" : "  #FFFFFF"}
          _hover={{ textUnderlineOffset: "#7F27FF" }}
        >
          Yihun Shekuri
        </Heading>
      </Stack>
    </>
  );
};

export default NavLogoSection;
