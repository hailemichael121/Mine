import {
  Heading,
  Box,
  useColorMode,
  keyframes,
  Flex,
  Text,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import Flag from "react-world-flags";

import { RiMic2Fill, RiVoiceprintFill } from "react-icons/ri";

// Greetings
const greetings = [
  { text: "ሰላም", lang: "am", countryCode: "ET" },
  { text: "Haayyo", lang: "ti", countryCode: "ET" },
  { text: "Hitoti ", lang: "sid", countryCode: "ET" },
  { text: "Ak'am", lang: "om", countryCode: "ET" },
  { text: "Hello", lang: "en", countryCode: null },
  { text: "Sup", lang: "en", countryCode: null },
  { text: "Howdy", lang: "en", countryCode: null },
  { text: "Yo", lang: "en", countryCode: null },
  { text: "Hola", lang: "es", countryCode: "ES" },
  { text: "Bonjour", lang: "fr", countryCode: "FR" },
  { text: "Ciao", lang: "it", countryCode: "IT" },
  { text: "Hallo", lang: "de", countryCode: "DE" },
  { text: "Olá", lang: "pt", countryCode: "PT" },
  { text: "こんにちは", lang: "jp", countryCode: "JP" },
  { text: "안녕하세요", lang: "kr", countryCode: "KR" },
  { text: "مرحبا", lang: "ar", countryCode: "SA" },
];

const bounce = keyframes`
  0% { transform: translateY(-50px) rotate(-15deg); opacity: 0; }
  30% { transform: translateY(10px) rotate(10deg); opacity: 1; }
  60% { transform: translateY(-5px) rotate(-5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const wave = keyframes`
  0% { transform: rotate(0deg); }
  15% { transform: rotate(20deg); }
  30% { transform: rotate(-10deg); }
  45% { transform: rotate(20deg); }
  60% { transform: rotate(-10deg); }
  100% { transform: rotate(0deg); }
`;

const irregularWave1 = keyframes`
  0% {
    transform: scale(1) rotate(0deg) skew(0deg, 0deg);
    border-radius: 50% 45% 55% 50% / 50% 55% 45% 50%;
    opacity: 0.5;
  }
  20% {
    transform: scale(1.15) rotate(7deg) skew(5deg, -3deg);
    border-radius: 55% 40% 60% 50% / 50% 60% 40% 50%;
    opacity: 0.35;
  }
  40% {
    transform: scale(1.3) rotate(-6deg) skew(-4deg, 5deg);
    border-radius: 45% 50% 55% 60% / 60% 45% 50% 55%;
    opacity: 0.2;
  }
  60% {
    transform: scale(1.2) rotate(5deg) skew(3deg, -2deg);
    border-radius: 50% 55% 45% 50% / 50% 45% 55% 50%;
    opacity: 0.3;
  }
  80% {
    transform: scale(1.25) rotate(-3deg) skew(-2deg, 4deg);
    border-radius: 48% 52% 50% 50% / 52% 48% 50% 50%;
    opacity: 0.35;
  }
  100% {
    transform: scale(1) rotate(0deg) skew(0deg, 0deg);
    border-radius: 50% 45% 55% 50% / 50% 55% 45% 50%;
    opacity: 0;
  }
`;

const irregularWave2 = keyframes`
  0% {
    transform: scale(1) rotate(0deg) skew(0deg, 0deg);
    border-radius: 50% 50% 45% 55% / 50% 55% 50% 45%;
    opacity: 0.45;
  }
  15% {
    transform: scale(1.2) rotate(-5deg) skew(-3deg, 4deg);
    border-radius: 52% 48% 55% 45% / 48% 52% 45% 55%;
    opacity: 0.3;
  }
  35% {
    transform: scale(1.35) rotate(6deg) skew(4deg, -5deg);
    border-radius: 55% 50% 45% 50% / 50% 45% 55% 50%;
    opacity: 0.15;
  }
  55% {
    transform: scale(1.25) rotate(-4deg) skew(-2deg, 3deg);
    border-radius: 50% 55% 50% 45% / 55% 50% 45% 50%;
    opacity: 0.25;
  }
  75% {
    transform: scale(1.3) rotate(3deg) skew(2deg, -3deg);
    border-radius: 53% 47% 50% 50% / 47% 53% 50% 50%;
    opacity: 0.3;
  }
  100% {
    transform: scale(1) rotate(0deg) skew(0deg, 0deg);
    border-radius: 50% 50% 45% 55% / 50% 55% 50% 45%;
    opacity: 0;
  }
`;
const irregularWave3 = keyframes`
  0% {
    transform: scale(1) rotate(0deg) skew(0deg, 0deg);
    border-radius: 50% 45% 50% 55% / 55% 50% 45% 50%;
    opacity: 0.4;
  }
  20% {
    transform: scale(1.18) rotate(6deg) skew(5deg, -4deg);
    border-radius: 55% 50% 45% 50% / 50% 55% 50% 45%;
    opacity: 0.25;
  }
  40% {
    transform: scale(1.35) rotate(-7deg) skew(-5deg, 3deg);
    border-radius: 52% 48% 50% 50% / 48% 52% 50% 50%;
    opacity: 0.15;
  }
  60% {
    transform: scale(1.22) rotate(4deg) skew(3deg, -2deg);
    border-radius: 50% 55% 45% 50% / 55% 50% 50% 45%;
    opacity: 0.3;
  }
  80% {
    transform: scale(1.28) rotate(-3deg) skew(-2deg, 3deg);
    border-radius: 53% 47% 50% 50% / 47% 53% 50% 50%;
    opacity: 0.25;
  }
  100% {
    transform: scale(1) rotate(0deg) skew(0deg, 0deg);
    border-radius: 50% 45% 50% 55% / 55% 50% 45% 50%;
    opacity: 0;
  }
`;

const HomeProfileText = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [current, setCurrent] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextGreetingIndex, setNextGreetingIndex] = useState<number | null>(
    null,
  );
  const toast = useToast();
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  const welcomeMessage =
    "Welcome to my circle.... Happy to work with you onward!";
  useEffect(() => {
    if ("speechSynthesis" in window) {
      setIsSupported(true);
    } else {
      toast({
        title: "Speech synthesis not supported",
        description: "Your browser doesn't support text-to-speech",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [toast]);

  // Text to speak - ONLY THE GREETING TEXT
  const currentGreeting = greetings[current];
  const textToSpeak = currentGreeting.text;

  const handleSpeak = () => {
    if (!isSupported) {
      toast({
        title: "Feature not available",
        description: "Text-to-speech is not supported in your browser",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (isSpeaking) {
      // Stop speaking gracefully
      if (speechRef.current) {
        speechRef.current = null;
      }
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      // Start speaking ONLY the greeting text
      const utterance = new SpeechSynthesisUtterance(textToSpeak);

      // Set language based on current greeting
      try {
        utterance.lang =
          currentGreeting.lang === "am"
            ? "am-ET"
            : currentGreeting.lang === "ar"
              ? "ar-SA"
              : currentGreeting.lang === "es"
                ? "es-ES"
                : currentGreeting.lang === "fr"
                  ? "fr-FR"
                  : currentGreeting.lang === "de"
                    ? "de-DE"
                    : currentGreeting.lang === "it"
                      ? "it-IT"
                      : currentGreeting.lang === "jp"
                        ? "ja-JP"
                        : currentGreeting.lang === "kr"
                          ? "ko-KR"
                          : "en-US";
      } catch (e) {
        utterance.lang = "en-US";
      }

      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.volume = 1;

      utterance.onstart = () => {
        setIsSpeaking(true);
        // Pause the auto-rotation while speaking
        setIsTransitioning(false);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        speechRef.current = null;

        if (nextGreetingIndex !== null) {
          setCurrent(nextGreetingIndex);
          setNextGreetingIndex(null);
        }

        // Speak the welcome message in the SAME language as the greeting
        setTimeout(() => {
          const welcomeUtterance = new SpeechSynthesisUtterance(welcomeMessage);
          welcomeUtterance.lang = utterance.lang; // <-- reuse greeting lang
          welcomeUtterance.rate = 1;
          welcomeUtterance.pitch = 1;
          welcomeUtterance.volume = 1;
          window.speechSynthesis.speak(welcomeUtterance);
        }, 500);
      };

      utterance.onerror = (event) => {
        if (event.error !== "interrupted") {
          console.error("Speech synthesis error:", event);
          setIsSpeaking(false);
          speechRef.current = null;

          toast({
            title: "Speech error",
            description: "Could not read text aloud",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      };

      speechRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Random greeting every 2s, but wait if speaking
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isSpeaking && !isTransitioning) {
        const nextIndex = Math.floor(Math.random() * greetings.length);

        // Start smooth transition
        setIsTransitioning(true);

        // Wait 300ms for fade out, then change greeting
        setTimeout(() => {
          setCurrent(nextIndex);
          // Wait another 300ms for fade in
          setTimeout(() => setIsTransitioning(false), 300);
        }, 300);
      } else if (isSpeaking) {
        // If currently speaking, queue the next greeting
        const nextIndex = Math.floor(Math.random() * greetings.length);
        setNextGreetingIndex(nextIndex);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isSpeaking, isTransitioning]);

  return (
    <Box
      width={{ base: "90%", md: "70%" }}
      mx="auto"
      fontFamily="monospace"
      color={isDark ? "white" : "black"}
      textAlign={{ base: "center", md: "left" }}
      pt={{ base: 10, md: "70px" }}
      position="relative"
    >
      {/* Speech button with wave animation */}
      {isSupported && (
        <Box
          position="absolute"
          top={0}
          right={0}
          width="60px"
          height="60px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* Irregular wave circles - only show when speaking */}
          {isSpeaking && (
            <>
              <Box
                position="absolute"
                width="100%"
                height="100%"
                borderRadius="50%"
                border="2px solid"
                borderColor={isDark ? "gray.400" : "gray.600"}
                animation={`${irregularWave1} 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite`}
              />
              <Box
                position="absolute"
                width="100%"
                height="100%"
                borderRadius="50%"
                border="2px solid"
                borderColor={isDark ? "gray.500" : "gray.700"}
                animation={`${irregularWave2} 3s cubic-bezier(0.4, 0, 0.2, 1) infinite`}
              />
              <Box
                position="absolute"
                width="100%"
                height="100%"
                borderRadius="50%"
                border="2px solid"
                borderColor={isDark ? "gray.600" : "gray.800"}
                animation={`${irregularWave3} 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite`}
              />
            </>
          )}

          {/* Mic button - transparent and centered */}
          <IconButton
            aria-label={
              isSpeaking ? "Stop reading" : `Read "${textToSpeak}" aloud`
            }
            icon={isSpeaking ? <RiVoiceprintFill /> : <RiMic2Fill />}
            onClick={handleSpeak}
            variant="ghost"
            colorScheme={isSpeaking ? "red" : isDark ? "white" : "black"}
            size="lg"
            width="100%"
            height="100%"
            borderRadius="50%"
            backgroundColor={
              isSpeaking
                ? isDark
                  ? "blackAlpha.300"
                  : "whiteAlpha.300"
                : "transparent"
            }
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            _hover={{
              backgroundColor: isSpeaking
                ? isDark
                  ? "blackAlpha.400"
                  : "whiteAlpha.400"
                : isDark
                  ? "blackAlpha.200"
                  : "whiteAlpha.200",
              transform: "scale(1.05)",
            }}
            sx={{
              "& svg": {
                fontSize: "24px",
                // animation: isSpeaking
                //   ? `${wave} 2s cubic-bezier(0.4, 0, 0.2, 1) infinite`
                //   : "none",
                color: isSpeaking
                  ? isDark
                    ? "white"
                    : "black"
                  : isDark
                    ? "gray.300"
                    : "gray.700",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              },
            }}
          />
        </Box>
      )}

      {/* Greeting with waving hand - Clickable to speak */}
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent={{ base: "center", md: "flex-start" }}
        animation={`${bounce} 0.8s cubic-bezier(0.4, 0, 0.2, 1)`}
        cursor="pointer"
        onClick={handleSpeak}
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        opacity={isTransitioning ? 0.5 : 1}
        _hover={{
          opacity: 0.9,
          transform: "translateY(-2px)",
        }}
      >
        <Heading
          as="h2"
          fontSize={{ base: "28px", md: "40px" }}
          fontFamily={
            currentGreeting.lang === "am"
              ? "'Noto Sans Ethiopic', monospace"
              : currentGreeting.lang === "ar"
                ? "'Amiri', monospace"
                : "monospace"
          }
          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        >
          <Text
            as="span"
            display="inline-block"
            animation={`${wave} 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite`}
            mr={2}
          >
            👋
          </Text>
          {currentGreeting.text}
        </Heading>

        {currentGreeting.countryCode && (
          <Box
            ml={{ base: 0, md: 2 }}
            mt={{ base: 2, md: 0 }}
            display="inline-block"
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            opacity={isTransitioning ? 0.5 : 1}
          >
            <Flag
              code={currentGreeting.countryCode}
              style={{
                width: "32px",
                height: "20px",
                display: "block",
                margin: "0 auto",
                transition: "all 0.3s ease",
              }}
            />
          </Box>
        )}
      </Flex>

      {/* Name */}
      <Heading
        as="h1"
        fontSize={{ base: "32px", md: "52px" }}
        fontWeight="bold"
        mb={2}
        position="relative"
        display="inline-block"
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        _after={{
          content: '""',
          position: "absolute",
          left: 0,
          bottom: "4px",
          width: { base: "100%", md: "0%" },
          height: "3px",
          bg: isDark ? "white" : "black",
          borderRadius: "2px",
          transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        _hover={{
          _after: { width: "100%" },
        }}
      >
        Yihun Shekuri
      </Heading>

      {/* Intro text */}
      <Box
        fontSize={{ base: "sm", md: "md" }}
        mt={2}
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      >
        Full-stack developer from Addis Ababa. I create clean & efficient web &
        mobile apps.
      </Box>
    </Box>
  );
};

export default HomeProfileText;
