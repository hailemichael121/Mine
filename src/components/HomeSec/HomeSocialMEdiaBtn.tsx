import { useColorMode, Tooltip, useBreakpointValue } from "@chakra-ui/react";
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
  { icon: FaTelegram, url: "https://t.me/Sholet1234", label: "Telegram" },
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

  // RESPONSIVE VALUES
  // Mobile: 40px buttons | Desktop: 48px (slightly reduced from your 52px)
  const btnSize = useBreakpointValue({ base: 40, md: 48 }) || 40;
  // Mobile: 280px wide | Desktop: 350px wide
  const containerWidth =
    useBreakpointValue({ base: 280, sm: 320, md: 350 }) || 280;
  const iconSize = useBreakpointValue({ base: 18, md: 22 }) || 18;

  const baseColor = isDark ? "#FFFFFF" : "#262626";
  const invertColor = isDark ? "#262626" : "#FFFFFF";

  if (!mounted) return null;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        // Reduced height to keep it tight
        height: btnSize + 20 + "px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
        marginBottom: "10px",
        overflow: "visible",
      }}
    >
      <div
        style={{
          position: "relative",
          width: containerWidth + "px",
          height: "100%",
        }}
      >
        {socials.map((social, index) => {
          const totalItems = socials.length;
          const spacing =
            (containerWidth - totalItems * btnSize) / (totalItems - 1);
          const finalX =
            (btnSize + spacing) * index - containerWidth / 2 + btnSize / 2;
          const delay = index * 0.08;

          return (
            <Tooltip
              key={social.label}
              label={social.label}
              placement="top"
              hasArrow
              bg={baseColor}
              color={invertColor}
            >
              <MotionDiv
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: btnSize + "px",
                  height: btnSize + "px",
                  backgroundColor: "transparent",
                  borderRadius: "12px",
                  border: `1.2px solid ${baseColor}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  zIndex: socials.length - index,
                  color: baseColor,
                }}
                initial={{
                  y: 20,
                  x: "-50%", // Keep horizontal centering
                  translateX: 0,
                  scale: 0.8,
                  opacity: 0,
                }}
                animate={{
                  y: "-50%", // Keep vertical centering
                  translateX: finalX,
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: delay,
                }}
                whileHover={{
                  y: "-65%", // Slight lift
                  scale: 1.1,
                  backgroundColor: baseColor,
                  color: invertColor,
                  transition: { delay: 0, duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(social.url, "_blank")}
              >
                {React.createElement(social.icon, { size: iconSize })}
              </MotionDiv>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};

export default HomeSocialMediaBtn;
