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
    color: "#333",
    hoverColor: "#f0f6fc",
  },
  {
    icon: FaInstagram,
    url: "https://instagram.com/haile_michael_121",
    label: "Instagram",
    color: "#E4405F",
    hoverColor: "#f0a6ca",
  },
  {
    icon: FaLinkedin,
    url: "https://linkedin.com/in/hailemichael121/",
    label: "LinkedIn",
    color: "#0A66C2",
    hoverColor: "#a6d4fa",
  },
  {
    icon: FaTelegram,
    url: "https://t.me/Sholet1234",
    label: "Telegram",
    color: "#0088cc",
    hoverColor: "#a6d4fa",
  },
  {
    icon: FaXTwitter,
    url: "https://www.x.com/hailemichael121",
    label: "X / Twitter",
    color: "#000000",
    hoverColor: "#d1d5db",
  },
];

const HomeSocialMediaBtn: React.FC = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: isDark ? "#2D3748" : "#EDF2F7", // gray.700 / gray.100
                color: isDark ? "#E2E8F0" : "#1A202C",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.2)";
                e.currentTarget.style.backgroundColor = "#4299E1"; // blue.400
                e.currentTarget.style.color = "white";
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.backgroundColor = isDark
                  ? "#2D3748"
                  : "#EDF2F7";
                e.currentTarget.style.color = isDark ? "#E2E8F0" : "#1A202C";
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
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
        height: "120px",
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
        const itemWidth = 50;
        const spacing =
          (containerWidth - totalItems * itemWidth) / (totalItems - 1);
        const finalX =
          (itemWidth + spacing) * index - containerWidth / 2 + itemWidth / 2;

        // Animation values
        const startY = -100;
        const delay = index * 0.15;

        // Straight down with small bounce
        const FINAL_Y = 55;

        const bounceSequence = [startY, 30, 12, FINAL_Y];

        // Straight X movement - minimal side wobble
        const xSequence = [
          finalX, // Start at final X position
          finalX + (Math.random() * 10 - 5), // Tiny wobble
          finalX + (Math.random() * 6 - 3), // Smaller wobble
          finalX, // Settle at final position
        ];

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
                top: startY + "px",
                left: "50%",
                width: "50px",
                height: "50px",
                backgroundColor: isDark ? "#2D3748" : "#F7FAFC",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                zIndex: socials.length - index,
                color: isDark ? social.hoverColor : social.color,
                transform: "translateX(-50%)", // Center horizontally
              }}
              initial={{
                y: startY,
                x: finalX,
                rotate: 0,
                scale: 0,
                opacity: 0,
              }}
              animate={{
                y: bounceSequence,
                x: xSequence,
                rotate: [0, 15, -10, 5, 0], // Small rotation during fall
                scale: [0, 1.2, 0.95, 1],
                opacity: [0, 1, 1, 1],
              }}
              transition={{
                duration: 1.2 + Math.random() * 0.3,
                ease: "easeOut",
                delay: delay,
                times: [0, 0.4, 0.7, 1],
              }}
              whileHover={{
                scale: 1.3,
                rotate: 360,
                backgroundColor: social.color,
                color: "white",
                boxShadow: `0 15px 30px ${social.color}40`,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
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
