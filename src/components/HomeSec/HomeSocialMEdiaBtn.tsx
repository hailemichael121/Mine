import { useColorMode, Tooltip } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaTelegram,
} from "react-icons/fa6";

const MotionDiv = motion.div;

const socials = [
  {
    icon: FaGithub,
    url: "https://github.com/Hailemichael121",
    label: "GitHub",
  },
  {
    icon: FaInstagram,
    url: "https://instagram.com/haile_michael_121",
    label: "Instagram",
  },
  {
    icon: FaLinkedin,
    url: "https://linkedin.com/in/hailemichael121/",
    label: "LinkedIn",
  },
  {
    icon: FaTelegram,
    url: "https://t.me/Sholet1234",
    label: "Telegram",
  },
  {
    icon: FaXTwitter,
    url: "https://www.x.com/hailemichael121",
    label: "X / Twitter",
  },
];

const HomeSocialMediaBtn: React.FC = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const baseColor = isDark ? "#FFFFFF" : "#262626";
  const invertColor = isDark ? "#262626" : "#FFFFFF";
  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "52px",
    height: "52px",
    borderRadius: "14px",
    backgroundColor: "transparent",
    border: `1.5px solid ${baseColor}`,
    color: baseColor,
    textDecoration: "none",
    transition: "transform 0.25s ease, background-color 0.25s ease, color 0.25s ease",
  } as const;

  if (!mounted) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "24px",
          marginTop: "40px",
          width: "100%",
        }}
      >
        {socials.map((social) => (
          <Tooltip
            key={social.label}
            label={social.label}
            placement="top"
            hasArrow
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={buttonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
                e.currentTarget.style.backgroundColor = baseColor;
                e.currentTarget.style.color = invertColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = baseColor;
              }}
            >
              {React.createElement(social.icon, { size: 24 })}
            </a>
          </Tooltip>
        ))}
      </div>
    );
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "110px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        marginTop: "40px",
        marginBottom: "10px",
        overflow: "visible",
      }}
    >
      {socials.map((social, index) => {
        // Calculate final positions in a row
        const totalItems = socials.length;
        const containerWidth = 400;
        const itemWidth = 52;
        const spacing =
          (containerWidth - totalItems * itemWidth) / (totalItems - 1);
        const finalX =
          (itemWidth + spacing) * index - containerWidth / 2 + itemWidth / 2;

        // Animation values
        const delay = index * 0.1;

        return (
          <Tooltip
            key={social.label}
            label={social.label}
            placement="top"
            hasArrow
          >
            <MotionDiv
              style={{
                position: "absolute",
                top: "0px",
                left: "50%",
                width: "52px",
                height: "52px",
                backgroundColor: "transparent",
                borderRadius: "14px",
                border: `1.5px solid ${baseColor}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: socials.length - index,
                color: baseColor,
                transform: "translateX(-50%)", // Center horizontally
              }}
              initial={{
                y: 24,
                x: finalX,
                rotate: -6,
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                y: 0,
                x: finalX,
                rotate: 0,
                scale: 1,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
                delay: delay,
              }}
              whileHover={{
                y: -6,
                scale: 1.04,
                backgroundColor: baseColor,
                color: invertColor,
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open(social.url, "_blank")}
            >
              {React.createElement(social.icon, { size: 24 })}
            </MotionDiv>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default HomeSocialMediaBtn;
