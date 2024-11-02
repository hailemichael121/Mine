import {
  Box,
  Flex,
  HStack,
  Text,
  useBreakpointValue,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import ContactForm from "./contactMeSec/ContactForm";
import ContactMeSecLocation from "./contactMeSec/ContactMeSecLocation";
import ContactMeEmail from "./contactMeSec/ContactMeEmail";
import HomeSocialMEdiaBtn from "./HomeSec/HomeSocialMEdiaBtn";

const ContactMe: React.FC = () => {
  const { colorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <HStack
        bgColor={colorMode === "dark" ? "#222222" : "#FFFFFF"}
        p={{ base: 4, md: 40 }}
        justifyContent={"center"}
        flexDir={isMobile ? "column" : "row"}
        fontFamily={"fantasy"}
      >
        <VStack
          justifyContent={"center"}
          width={{ base: "100%", md: "30%" }}
          mr={{ base: 0, md: 16 }}
          gap={8}
        >
          <Flex justifyContent={"Center"} as={"h1"} fontSize={"50px"}>
            Get in touch
          </Flex>
          <Text as={"p"}>
            I’m looking for great new opportunities so my inbox is always open.
            Whether you have a question or just want to say hi, I’ll try my best
            to get back to you!
          </Text>
          <Box p={0} gap={24}>
            <ContactMeSecLocation />
            <ContactMeEmail />
          </Box>
          <Box width={"100%"}>
            <HomeSocialMEdiaBtn />
          </Box>
        </VStack>

        <ContactForm />
      </HStack>
    </>
  );
};

export default ContactMe;
