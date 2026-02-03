import React, { useState } from "react";
import {
  Box,
  IconButton,
  Image,
  useColorMode,
  useDisclosure,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaExpandAlt,
} from "react-icons/fa";
import { FaShareNodes, FaXTwitter } from "react-icons/fa6";

const HomeProfilePhoto: React.FC = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  // Disclosure for Share Modal
  const {
    isOpen: isShareOpen,
    onOpen: onShareOpen,
    onClose: onShareClose,
  } = useDisclosure();
  // Disclosure for Full Image Modal
  const {
    isOpen: isExpandOpen,
    onOpen: onExpandOpen,
    onClose: onExpandClose,
  } = useDisclosure();

  const [hovered, setHovered] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const iconBg = isDark ? "#1A202C" : "#FFFFFF";
  const iconColor = isDark ? "white" : "black";
  const borderColor = isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)";

  const profileImg = isMobile
    ? "/images/ProfilePicture-2.png"
    : "/images/ProfilePicture.png";

  const shareText = encodeURIComponent("Check out my portfolio!");
  const shareOptions = [
    {
      icon: <FaXTwitter />,
      label: "X / Twitter",
      url: `https://twitter.com/intent/tweet?text=${shareText}`,
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      url: `https://www.linkedin.com/sharing/share-offsite/`,
    },
    {
      icon: <FaTelegram />,
      label: "Telegram",
      url: `https://t.me/share/url?text=${shareText}`,
    },
  ];

  const socialOptions = [
    { icon: <FaGithub />, url: "https://github.com/Hailemichael121" },
    { icon: <FaInstagram />, url: "https://instagram.com/haile_michael_121" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/hailemichael121/" },
    { icon: <FaTelegram />, url: "https://t.me/Sholet1234" },
    { icon: <FaXTwitter />, url: "https://www.x.com/hailemichael121" },
  ];

  const ActionButtons = [
    { icon: <FaExpandAlt />, onClick: onExpandOpen }, // Added Expand
    {
      icon: <DownloadIcon />,
      onClick: () => window.open(profileImg, "_blank"),
    },
    { icon: <FaShareNodes />, onClick: onShareOpen },
    ...socialOptions.map((opt) => ({
      icon: opt.icon,
      onClick: () => window.open(opt.url, "_blank"),
    })),
  ];

  return (
    <>
      <Box
        position="relative"
        width={{ base: "90%", md: "380px" }}
        height="340px"
        mx="auto"
        onMouseEnter={() => !isMobile && setHovered(true)}
        onMouseLeave={() => !isMobile && setHovered(false)}
        onClick={() => isMobile && onExpandOpen()} // Mobile tap expands image
        overflow="visible"
      >
        <Box
          width="100%"
          height="100%"
          borderTopLeftRadius={{ base: "50px", md: "30px" }}
          borderBottomLeftRadius={{ base: "150px", md: "200px" }}
          borderTopRightRadius={{ base: "40px", md: "50px" }}
          borderBottomRightRadius={{ base: "120px", md: "150px" }}
          overflow="hidden"
          boxShadow="xl"
          border={isDark ? "solid 5px #222222" : "solid 5px #FFFFFF"}
          cursor="pointer"
        >
          <Image
            src={profileImg}
            alt="Profile"
            width="100%"
            height="100%"
            objectFit="cover"
            transition="0.3s ease"
            filter={hovered ? "grayscale(40%)" : "none"}
          />
        </Box>

        {!isMobile &&
          hovered &&
          ActionButtons.map((btn, i) => {
            const angleStep = Math.PI / 0.9 / (ActionButtons.length - 0.9);
            const angle = i * angleStep - Math.PI / 4;
            const radius = 180;
            const x = 210 + radius * Math.cos(angle);
            const y = 155 + radius * Math.sin(angle);

            return (
              <IconButton
                key={i}
                aria-label="Action"
                icon={btn.icon}
                position="absolute"
                left={`${x}px`}
                top={`${y}px`}
                transform="translate(-50%, -50%)"
                size="sm"
                bg={iconBg}
                color={iconColor}
                border="1px solid"
                borderColor={borderColor}
                borderRadius="12px"
                boxShadow="lg"
                onClick={(e) => {
                  e.stopPropagation();
                  btn.onClick();
                }}
                _hover={{
                  transform: "translate(-50%, -50%) scale(1.2)",
                  bg: isDark ? "gray.700" : "gray.100",
                  color: "cyan.400",
                }}
              />
            );
          })}
      </Box>

      <Modal
        isOpen={isExpandOpen}
        onClose={onExpandClose}
        isCentered
        motionPreset="scale"
      >
        <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(8px)" />
        <ModalContent
          bg="transparent"
          boxShadow="none"
          maxW={{ base: "90vw", md: "500px" }}
          border="1px solid"
          borderColor={isDark ? "whiteAlpha.300" : "whiteAlpha.500"}
          borderRadius="3xl"
          overflow="hidden"
        >
          <ModalCloseButton
            color="white"
            zIndex={10}
            bg="blackAlpha.500"
            borderRadius="full"
            m={2}
          />
          <ModalBody p={0} position="relative">
            <Image
              src={profileImg}
              alt="Enlarged Profile"
              w="100%"
              h="auto"
              objectFit="contain"
            />
            <Box
              position="absolute"
              bottom={0}
              w="100%"
              p={6}
              bgGradient="linear(to-t, blackAlpha.800, transparent)"
              textAlign="center"
            >
              <Text color="white" fontWeight="bold" fontSize="xl">
                Hailemichael — Profile
              </Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>

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
            py={4}
          >
            <Text
              fontWeight="bold"
              fontSize="2xl"
              color={isDark ? "white" : "gray.800"}
              mb={5}
            >
              Share Profile
            </Text>
            <VStack spacing={4} w="100%">
              {shareOptions.map((opt, i) => (
                <Box
                  key={i}
                  width="100%"
                  border="1px solid"
                  borderColor={isDark ? "whiteAlpha.300" : "gray.300"}
                  borderRadius="lg"
                  onClick={() => window.open(opt.url, "_blank")}
                  cursor="pointer"
                  _hover={{
                    bg: isDark ? "whiteAlpha.200" : "gray.50",
                    transform: "translateX(3px)",
                  }}
                  transition="0.2s"
                >
                  <HStack w="100%" spacing={4} px={4} py={3}>
                    <Box color={isDark ? "white" : "gray.800"} fontSize="20px">
                      {opt.icon}
                    </Box>
                    <Text
                      fontWeight="medium"
                      color={isDark ? "white" : "gray.800"}
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

export default HomeProfilePhoto;
