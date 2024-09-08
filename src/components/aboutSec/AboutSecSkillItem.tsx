import React, { useEffect, useRef, useState } from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

interface SkillItemProps {
  imgSrc: string;
  altText: string;
  label: string;
  imgWidth?: string;
}

const AboutSecSkillItem: React.FC<SkillItemProps> = ({
  imgSrc,
  altText,
  label,
  imgWidth = "30px",
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fadeInStyle: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(-20px)",
    transition: "opacity 0.3s ease-out, transform 0.6s ease-out",
  };

  return (
    <Flex ref={ref} gap={"5px"} alignItems="center" style={fadeInStyle}>
      <Image src={imgSrc} alt={altText} width={imgWidth} />
      <Text as={"b"} fontSize={"15px"} pl={"15px"}>
        {label}
      </Text>
    </Flex>
  );
};

export default AboutSecSkillItem;
