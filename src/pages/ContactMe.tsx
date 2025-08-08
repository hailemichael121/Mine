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
import ContactForm from "../components/contactMeSec/ContactForm";
import ContactMeSecLocation from "../components/contactMeSec/ContactMeSecLocation";
import ContactMeEmail from "../components/contactMeSec/ContactMeEmail";
import HomeSocialMEdiaBtn from "../components/HomeSec/HomeSocialMEdiaBtn";

const ContactMe: React.FC = () => {
  const { colorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <HStack
      bgColor={colorMode === "dark" ? "#222222" : "#FFFFFF"}
      p={{ base: 4, md: 40 }}
      justifyContent="center"
      flexDir={isMobile ? "column" : "row"}
    >
      <VStack
        justifyContent="center"
        width={{ base: "100%", md: "30%" }}
        mr={{ base: 0, md: 16 }}
        gap={8}
      >
        <Flex justifyContent="Center" as="h1" fontSize="50px">
          Get in touch
        </Flex>

        <Text as="p">
          I’m looking for great new opportunities so my inbox is always open.
          Whether you have a question or just want to say hi, I’ll try my best
          to get back to you!
        </Text>

        <Box p={0} gap={24}>
          <ContactMeSecLocation />
          <ContactMeEmail />

          {/* Minimal Cute Google Map */}
          <Box
            borderRadius="lg"
            overflow="hidden"
            borderWidth="1px"
            borderColor={colorMode === "dark" ? "gray.700" : "gray.200"}
            boxShadow="md"
            transition="all 0.25s ease"
            _hover={{
              transform: "scale(1.02)",
              boxShadow: "lg",
            }}
          >
            <Box
              as="iframe"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.557612703029!2d38.75097857523276!3d9.01278988924207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85c05e60700f%3A0xa36a7386b90fa43b!2sBank%20Of%20Abyssinia%20Head%20Office!5e0!3m2!1sen!2set!4v1754695227228!5m2!1sen!2set"              width="100%"
              height="200"
              border="0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{
                filter: "grayscale(60%) contrast(0.9)",
                transition: "filter 0.3s ease",
              }}
              _hover={{
                filter: "none",
              }}
            />
          </Box>
        </Box>

        <Box width="100%">
          <HomeSocialMEdiaBtn />
        </Box>
      </VStack>

      <ContactForm />
    </HStack>
  );
};

export default ContactMe;
