import {
  Box,
  IconButton,
  Image,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import { DownloadIcon } from "@chakra-ui/icons";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaShareNodes, FaXTwitter } from "react-icons/fa6";

const HomeProfilePhoto: React.FC = () => {
  const { colorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [isOpen, setIsOpen] = useState(false);
  const baseColor = colorMode === "light" ? "#262626" : "#FFFFFF";
  const shareText = encodeURIComponent(
    "Check out my portfolio! Clean UI, modern apps, and full-stack projects.",
  );

  const shareOptions = useMemo(
    () => [
      {
        icon: <FaXTwitter />,
        label: "Share on X",
        url: `https://twitter.com/intent/tweet?text=${shareText}&url=https://yihun.netlify.app/`,
      },
      {
        icon: <FaLinkedin />,
        label: "Share on LinkedIn",
        url: `https://www.linkedin.com/sharing/share-offsite/?url=https://yihun.netlify.app/`,
      },
      {
        icon: <FaTelegram />,
        label: "Share on Telegram",
        url: `https://t.me/share/url?url=https://yihun.netlify.app/&text=${shareText}`,
      },
    ],
    [shareText],
  );

  const socialOptions = [
    { icon: <FaGithub />, url: "https://github.com/Hailemichael121" },
    { icon: <FaInstagram />, url: "https://instagram.com/haile_michael_121" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/hailemichael121/" },
    { icon: <FaTelegram />, url: "https://t.me/Sholet1234" },
    { icon: <FaXTwitter />, url: "https://www.x.com/hailemichael121" },
  ];

  const handleDownloadResume = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=1FvmzIjVropeaYuFoeyRQ6vBNP74bzqHr",
      "_blank",
    );
  };

  return (
    <Box
      borderTopLeftRadius={{ base: "50px", md: "30px" }}
      borderBottomLeftRadius={{ base: "150px", md: "200px" }}
      borderTopRightRadius={{ base: "40px", md: "50px" }}
      borderBottomRightRadius={{ base: "120px", md: "150px" }}
      overflow="hidden"
      boxShadow="md"
      width={{ base: "90%", sm: "70%", md: "380px" }}
      height={{ base: "340px", md: "340px" }} // Keep consistent height
      border={colorMode === "light" ? "solid 5px #FFFFFF" : "solid 5px #222222"}
      mx="auto"
      position="relative"
      cursor="pointer"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <Image
        src={
          isMobile
            ? "/images/ProfilePicture-2.png"
            : "/images/ProfilePicture.png"
        }
        alt="Profile Photo"
        width="100%"
        height="100%"
        objectFit="cover"
        display="block"
        transition="filter 0.3s ease"
        filter={isOpen ? "blur(2px)" : "none"}
      />
      {isOpen && (
        <>
          <Box
            position="absolute"
            inset="0"
            background="rgba(0, 0, 0, 0.08)"
            pointerEvents="none"
          />
          {[
            { icon: <DownloadIcon />, onClick: handleDownloadResume, top: "-14px", left: "50%" },
            { icon: <FaShareNodes />, onClick: () => window.open(shareOptions[0].url, "_blank"), top: "18%", left: "-16px" },
            { icon: shareOptions[1].icon, onClick: () => window.open(shareOptions[1].url, "_blank"), top: "50%", left: "-20px" },
            { icon: shareOptions[2].icon, onClick: () => window.open(shareOptions[2].url, "_blank"), bottom: "18%", left: "-16px" },
            { icon: socialOptions[0].icon, onClick: () => window.open(socialOptions[0].url, "_blank"), top: "18%", right: "-16px" },
            { icon: socialOptions[1].icon, onClick: () => window.open(socialOptions[1].url, "_blank"), top: "50%", right: "-20px" },
            { icon: socialOptions[2].icon, onClick: () => window.open(socialOptions[2].url, "_blank"), bottom: "18%", right: "-16px" },
            { icon: socialOptions[3].icon, onClick: () => window.open(socialOptions[3].url, "_blank"), bottom: "-14px", left: "35%" },
            { icon: socialOptions[4].icon, onClick: () => window.open(socialOptions[4].url, "_blank"), bottom: "-14px", left: "65%" },
          ].map((item, index) => (
            <IconButton
              key={index}
              aria-label="Profile action"
              icon={item.icon}
              onClick={(event) => {
                event.stopPropagation();
                item.onClick();
              }}
              variant="ghost"
              color={baseColor}
              _hover={{ color: baseColor, bg: "transparent", transform: "scale(1.08)" }}
              position="absolute"
              top={item.top}
              bottom={item.bottom}
              left={item.left}
              right={item.right}
              transform="translate(-50%, -50%)"
              bg="transparent"
            />
          ))}
        </>
      )}
    </Box>
  );
};

export default HomeProfilePhoto;
