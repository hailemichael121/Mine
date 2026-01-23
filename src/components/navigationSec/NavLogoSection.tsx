import React, { useState } from "react";
import {
  Stack,
  Heading,
  Image,
  useColorMode,
  Box,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
  useBreakpointValue,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import {
  FaTelegram,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaExpandAlt,
} from "react-icons/fa";
import { FaShareNodes, FaXTwitter } from "react-icons/fa6";

const NavLogoSection: React.FC = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const { isOpen, onOpen, onClose } = useDisclosure(); // original modal
  const {
    isOpen: isShareOpen,
    onOpen: onShareOpen,
    onClose: onShareClose,
  } = useDisclosure(); // share modal

  const [hovered, setHovered] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const imageSrc = isDark
    ? "images/LogoDarkMood.png"
    : "images/LogoLightMood.png";

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = "Yihun_Shekuri_Logo.png";
    link.click();
  };

  const shareText = encodeURIComponent(
    "I'm Yihun Shekuri! Check out my portfolio! I'm a passionate Software Developer specializing in modern web and mobile apps. 🚀",
  );

  const shareOptions = [
    {
      icon: <FaXTwitter />,
      label: "Twitter",
      url: `https://twitter.com/intent/tweet?text=${shareText}&url=https://yihun.netlify.app/`,
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=https://yihun.netlify.app/`,
    },
    {
      icon: <FaTelegram />,
      label: "Telegram",
      url: `https://t.me/share/url?url=https://yihun.netlify.app/&text=${shareText}`,
    },
  ];

  const ConnectOptions = [
    {
      icon: <FaGithub />,
      url: "https://github.com/Hailemichael121",
      label: "GitHub",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/haile_michael_121",
      label: "Instagram",
    },
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/hailemichael121/",
      label: "LinkedIn",
    },
    { icon: <FaTelegram />, url: "https://t.me/Sholet1234", label: "Telegram" },
    {
      icon: <FaXTwitter />,
      url: "https://www.x.com/hailemichael121",
      label: "X / Twitter",
    },
  ];

  const radius = 50; // orbit radius

  return (
    <>
      <Stack direction="row" align="center" spacing={4} cursor="pointer">
        <Box
          position="relative"
          width="80px"
          height="80px"
          borderRadius={isDark ? "35px" : "15px 20px 15px 30px"}
          overflow="visible"
          onMouseEnter={() => !isMobile && setHovered(true)}
          onMouseLeave={() => !isMobile && setHovered(false)}
          onClick={() => isMobile && onOpen()}
        >
          <Image
            src={imageSrc}
            alt="Logo"
            objectFit="contain"
            width="100%"
            height="100%"
            borderRadius="inherit"
            transition="all 0.3s ease-in-out"
            _hover={{ transform: !isMobile ? "scale(1.05)" : "none" }}
          />

          {/* Desktop circular buttons */}
          {!isMobile &&
            hovered &&
            (() => {
              const center = 40;
              const angleStep = (2 * Math.PI) / (ConnectOptions.length + 3);
              const buttons = [
                { icon: <FaExpandAlt />, onClick: onOpen },
                { icon: <FaShareNodes />, onClick: onShareOpen },
                { icon: <DownloadIcon />, onClick: downloadImage },
                ...ConnectOptions.map((opt) => ({
                  icon: opt.icon,
                  onClick: () => window.open(opt.url, "_blank"),
                })),
              ];

              return buttons.map((btn, i) => {
                const angle = i * angleStep - Math.PI / 2;
                const x = center + radius * Math.cos(angle);
                const y = center + radius * Math.sin(angle);
                return (
                  <IconButton
                    key={i}
                    aria-label={`button-${i}`}
                    icon={btn.icon}
                    position="absolute"
                    left={`${x}px`}
                    top={`${y}px`}
                    transform="translate(-50%, -50%)"
                    variant="ghost"
                    color={isDark ? "white" : "black"}
                    onClick={btn.onClick}
                  />
                );
              });
            })()}
        </Box>

        <Heading
          color={isDark ? "#fff" : "#000"}
          _hover={{ textDecoration: "underline", textUnderlineOffset: 4 }}
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
          whiteSpace="nowrap"
        >
          Yihun Shekuri
        </Heading>
      </Stack>

      {/* Original Logo Modal (mobile) */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(5px)" />
        <ModalContent bg="transparent" boxShadow="none">
          <ModalCloseButton color="white" />
          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={4}
          >
            <Image src={imageSrc} alt="Logo Enlarged" maxH="200px" mb={2} />
            <Text color="white" textAlign="center">
              Yihun Shekuri - Software Engineer - (BSc)
            </Text>
            <HStack spacing={3} mt={3}>
              <IconButton
                icon={<FaExpandAlt />}
                aria-label="Enlarge"
                variant="ghost"
                color="white"
                onClick={() => {}}
              />
              <IconButton
                icon={<DownloadIcon />}
                aria-label="Download"
                variant="ghost"
                color="white"
                onClick={downloadImage}
              />
              {ConnectOptions.map((opt, i) => (
                <IconButton
                  key={i}
                  icon={opt.icon}
                  aria-label={opt.label}
                  variant="ghost"
                  color="white"
                  onClick={() => window.open(opt.url, "_blank")}
                />
              ))}
              {/* Share button inside modal */}
              <IconButton
                icon={<FaShareNodes />}
                aria-label="Share"
                variant="ghost"
                color="white"
                onClick={onShareOpen}
              />
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* NEW Share Modal */}
      <Modal
        isOpen={isShareOpen}
        onClose={onShareClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(6px)" />
        <ModalContent
          bg={isDark ? "gray.900" : "white"}
          borderRadius="2xl"
          p={5}
          maxW="xs"
        >
          <ModalCloseButton color={isDark ? "white" : "gray.800"} />

          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={5}
            py={4}
          >
            <Text
              fontWeight="bold"
              fontSize="2xl"
              color={isDark ? "white" : "gray.800"}
            >
              Share To
            </Text>

            <VStack spacing={4} w="100%">
              {shareOptions.map((opt, i) => (
                <Box
                  key={i}
                  width="100%"
                  border="1px solid"
                  borderColor={isDark ? "whiteAlpha.300" : "gray.300"}
                  borderRadius="lg"
                  _hover={{
                    bg: isDark ? "whiteAlpha.200" : "gray.50",
                    transform: "translateX(3px)",
                    transition: "all 0.2s ease-in-out",
                  }}
                  cursor="pointer"
                >
                  <HStack
                    w="100%"
                    spacing={4}
                    px={4}
                    py={3}
                    onClick={() => window.open(opt.url, "_blank")}
                  >
                    <Box color={isDark ? "white" : "gray.800"} fontSize="20px">
                      {opt.icon}
                    </Box>
                    <Text
                      fontWeight="medium"
                      color={isDark ? "white" : "gray.800"}
                      fontSize="md"
                    >
                      {opt.label}
                    </Text>
                  </HStack>
                </Box>
              ))}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NavLogoSection;
