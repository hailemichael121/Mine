import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

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
  return (
    <Flex gap={"5px"} alignItems="center">
      <Image src={imgSrc} alt={altText} width={imgWidth} />
      <Text as={"b"} fontSize={"15px"} pl={"15px"}>
        {label}
      </Text>
    </Flex>
  );
};

export default AboutSecSkillItem;
