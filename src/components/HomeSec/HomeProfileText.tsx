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
import { useState, useEffect, useRef, useCallback } from "react";
import Flag from "react-world-flags";
import { motion } from "framer-motion";
import { RiMic2Fill, RiVoiceprintFill } from "react-icons/ri";

// ─────────────────────────────────────────────
// 1. TYPES & CONSTANTS
// ─────────────────────────────────────────────

type Greeting = {
  text: string;
  lang: string;
  countryCode: string | null;
};

const greetings: Greeting[] = [
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

const WELCOME_MESSAGE =
  "Welcome to my circle.... Happy to work with you onward!";

// ─────────────────────────────────────────────
// 2. ANIMATIONS (KEYFRAMES) - Only typing related
// ─────────────────────────────────────────────

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

// ─────────────────────────────────────────────
// 3. HELPERS & UTILITIES
// ─────────────────────────────────────────────

/**
 * Maps language codes to SpeechSynthesis lang strings
 */
const getSpeechLang = (lang: string): string => {
  const langMap: Record<string, string> = {
    am: "am-ET",
    ar: "ar-SA",
    es: "es-ES",
    fr: "fr-FR",
    de: "de-DE",
    it: "it-IT",
    jp: "ja-JP",
    kr: "ko-KR",
    ti: "am-ET", // Tigrinya falls back to Amharic
    sid: "am-ET", // Sidama falls back to Amharic
    om: "am-ET", // Oromo falls back to Amharic
  };
  return langMap[lang] || "en-US";
};

/**
 * Gets appropriate font family for each language
 */
const getFontFamily = (lang: string): string => {
  if (lang === "am") return "'Noto Sans Ethiopic', monospace";
  if (lang === "ar") return "'Amiri', monospace";
  return "monospace";
};

/**
 * Calculate typing speed based on text length and complexity
 */
const getTypingSpeed = (text: string, isBackspace: boolean = false): number => {
  // Check if text contains non-Latin characters
  const hasComplexChars = /[^\x00-\x7F]/.test(text);

  // Base speed: faster for Latin, slower for complex scripts
  // Backspace is slightly faster than typing
  const baseSpeed = isBackspace
    ? hasComplexChars
      ? 80
      : 60
    : hasComplexChars
      ? 120
      : 100;

  // Adjust based on text length
  const lengthAdjustment = Math.max(20, 100 - text.length * 1.5);

  return Math.max(30, Math.min(120, baseSpeed + lengthAdjustment));
};

// ─────────────────────────────────────────────
// 4. CUSTOM HOOKS (still in same file)
// ─────────────────────────────────────────────

function useRotatingGreeting(isPaused: boolean) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    // If we are currently speaking, do not progress the timer
    if (isPaused) return;

    const typingTime = 2500; // Time text stays visible before backspacing
    const backspaceTime = 1500;

    const cycleTimer = setTimeout(() => {
      // Start backspacing
      setIsTyping(false);

      setTimeout(() => {
        let nextIndex;
        do {
          nextIndex = Math.floor(Math.random() * greetings.length);
        } while (nextIndex === currentIndex && greetings.length > 1);

        setCurrentIndex(nextIndex);

        setTimeout(() => {
          setIsTyping(true);
        }, 300);
      }, backspaceTime);
    }, typingTime);

    return () => clearTimeout(cycleTimer);
  }, [currentIndex, isPaused]); // isPaused (isSpeaking) resets the timer

  return {
    currentGreeting: greetings[currentIndex],
    isTyping,
    setCurrent: (index: number) => {
      setCurrentIndex(index);
      setIsTyping(true);
    },
  };
}

// ─────────────────────────────────────────────
// 5. INTERNAL SUB-COMPONENTS
// ─────────────────────────────────────────────

interface TypingGreetingProps {
  text: string;
  isRTL: boolean;
  isTyping: boolean;
  onTypingStateChange: (isDone: boolean) => void;
}

const TypingGreeting = ({
  text,
  isRTL,
  isTyping,
  onTypingStateChange,
}: TypingGreetingProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isTyping) {
      // Start typing from where we left off (usually 0)
      onTypingStateChange(false);

      const type = () => {
        if (indexRef.current < text.length) {
          indexRef.current++;
          setDisplayedText(text.slice(0, indexRef.current));
          timer = setTimeout(type, getTypingSpeed(text, false));
        } else {
          onTypingStateChange(true); // FLAG SHOWS HERE
        }
      };
      timer = setTimeout(type, 100);
    } else {
      // Start backspacing
      onTypingStateChange(false);

      const backspace = () => {
        if (indexRef.current > 0) {
          indexRef.current--;
          setDisplayedText(text.slice(0, indexRef.current));
          timer = setTimeout(backspace, getTypingSpeed(text, true));
        }
      };
      timer = setTimeout(backspace, 100);
    }

    return () => clearTimeout(timer);
    // We only want to restart this effect when 'text' identity changes
    // or the 'isTyping' phase flips.
  }, [text, isTyping, onTypingStateChange]);

  // Reset index when the text object itself changes (new greeting selected)
  useEffect(() => {
    if (isTyping && displayedText === "") {
      indexRef.current = 0;
    }
  }, [text, isTyping]);

  return (
    <Box
      as="span"
      display="inline-block"
      dir={isRTL ? "rtl" : "ltr"}
      minW="1ch"
    >
      {displayedText}
      <Box
        as="span"
        display="inline-block"
        w="2px"
        h="1em"
        bg="currentColor"
        ml={1}
        animation={`${keyframes`0%, 100% { opacity: 1 } 50% { opacity: 0 }`} 0.8s infinite`}
        verticalAlign="middle"
      />
    </Box>
  );
};
interface SpeechButtonProps {
  text: string;
  isDark: boolean;
  onToggle: () => void;
  isSpeaking: boolean;
  isSupported: boolean;
}

const SpeechButton = ({
  text,
  isDark,
  onToggle,
  isSpeaking,
  isSupported,
}: SpeechButtonProps) => {
  if (!isSupported) return null;

  return (
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
      {/* Wave animations */}
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

      {/* Mic button */}
      <IconButton
        aria-label={isSpeaking ? "Stop reading" : `Read "${text}" aloud`}
        icon={isSpeaking ? <RiVoiceprintFill /> : <RiMic2Fill />}
        onClick={onToggle}
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
  );
};

interface GreetingHeaderProps {
  greeting: Greeting;
  isTyping: boolean;
  onSpeak: () => void;
}

const GreetingHeader = ({
  greeting,
  isTyping,
  onSpeak,
}: GreetingHeaderProps) => {
  const [showFlag, setShowFlag] = useState(false);

  // Sync the local flag state with the typing component
  const handleTypingStateChange = useCallback((isDone: boolean) => {
    setShowFlag(isDone);
  }, []);

  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent={{ base: "center", md: "flex-start" }}
      cursor="pointer"
      onClick={onSpeak}
      minH="60px"
    >
      <Heading
        as="h2"
        fontSize={{ base: "28px", md: "40px" }}
        fontFamily={getFontFamily(greeting.lang)}
      >
        <Text
          as="span"
          display="inline-block"
          animation={`${wave} 1.2s infinite`}
          mr={2}
        >
          👋
        </Text>
        <TypingGreeting
          text={greeting.text}
          isRTL={greeting.lang === "ar"}
          isTyping={isTyping}
          onTypingStateChange={handleTypingStateChange}
        />
      </Heading>

      {/* Flag logic: Only show if greeting has a code AND typing is finished */}
      <Box
        ml={{ base: 0, md: 4 }}
        mt={{ base: 2, md: 0 }}
        display="inline-block"
        transition="all 0.4s ease"
        opacity={showFlag && greeting.countryCode ? 1 : 0}
        transform={showFlag ? "scale(1)" : "scale(0.8)"}
        visibility={showFlag && greeting.countryCode ? "visible" : "hidden"}
      >
        {greeting.countryCode && (
          <Flag
            code={greeting.countryCode}
            style={{ width: "32px", height: "20px" }}
          />
        )}
      </Box>
    </Flex>
  );
};
interface NameHeadingProps {
  isDark: boolean;
}

const NameHeading = ({ isDark }: NameHeadingProps) => {
  return (
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
  );
};

const IntroText = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box fontSize={{ base: "sm", md: "md" }} mt={6} transition="all 0.3s ease">
      <Box position="relative" display="inline-block" px={4} py={1}>
        <Text as="span" position="relative" zIndex={1} fontWeight="medium">
          Full-stack developer
        </Text>

        <Box
          as="svg"
          position="absolute"
          top="40%"
          left="50%"
          width="calc(100% + 40px)"
          height="calc(100% + 34px)"
          viewBox="0 0 240 60"
          fill="none"
          transform="translate(-50%, -50%) rotate(-2deg)"
          pointerEvents="none"
          zIndex={0}
        >
          <motion.path
            d="M10,35 C10,10 230,8 230,30 C230,52 15,58 20,35 C23,20 60,18 90,18"
            stroke={isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.5)"}
            strokeWidth="1.2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              delay: 1.2,
              duration: 1.8,
              ease: "easeInOut",
            }}
          />
        </Box>
      </Box>
      <Text as="span" ml={6}>
        from Addis Ababa. I create clean & efficient web & mobile apps.
      </Text>
    </Box>
  );
};

// ─────────────────────────────────────────────
// 6. MAIN COMPONENT
// ─────────────────────────────────────────────

const HomeProfileText = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const toast = useToast();

  // Use our custom hook for greeting rotation
  const { currentGreeting, isTyping } = useRotatingGreeting(isSpeaking);

  // Check speech synthesis support
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

  // Speech synthesis logic
  const handleSpeak = () => {
    if (!isSupported) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(currentGreeting.text);
      utterance.lang = getSpeechLang(currentGreeting.lang);

      utterance.onstart = () => setIsSpeaking(true);

      utterance.onend = () => {
        // Logic for the second part of the speech
        const welcomeUtterance = new SpeechSynthesisUtterance(WELCOME_MESSAGE);
        welcomeUtterance.lang = utterance.lang;

        welcomeUtterance.onend = () => {
          setIsSpeaking(false); // Only set to false after EVERYTHING is read
        };

        window.speechSynthesis.speak(welcomeUtterance);
      };

      window.speechSynthesis.speak(utterance);
    }
  };

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
      <SpeechButton
        text={currentGreeting.text}
        isDark={isDark}
        onToggle={handleSpeak}
        isSpeaking={isSpeaking}
        isSupported={isSupported}
      />

      <GreetingHeader
        greeting={currentGreeting}
        isTyping={isTyping}
        onSpeak={handleSpeak}
      />

      <NameHeading isDark={isDark} />

      <IntroText />
    </Box>
  );
};

export default HomeProfileText;
