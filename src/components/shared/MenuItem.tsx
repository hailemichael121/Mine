import { Button, HStack, Text, useColorMode } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface MenuItemProps {
  isActive: boolean;
  label: string;
  sectionId: string;
  icon: IconType;
  onClick: (sectionId: string) => void;
}

const MenuItem = ({
  isActive,
  label,
  sectionId,
  icon: Icon,
  onClick,
}: MenuItemProps) => {
  const { colorMode } = useColorMode();

  // Thematic color: Black for light mode, White for dark mode
  const baseColor = colorMode === "light" ? "#000000" : "#FFFFFF";

  return (
    <Button
      border={"none"}
      bgColor={"transparent"}
      _hover={{ backgroundColor: "transparent" }}
      fontSize={{
        base: isActive ? "14px" : "20px",
        md: isActive ? "16px" : "24px",
      }}
      onClick={() => onClick(sectionId)}
      color={baseColor}
      opacity={isActive ? 1 : 0.6}
      ml={"10px"}
    >
      <HStack align={"center"} position="relative">
        {isActive && (
          <Text
            position="absolute"
            left={{ base: "-40px", md: "-50px" }}
            fontSize="10px"
            color={baseColor}
          >
            {label}
          </Text>
        )}
        <Icon />
      </HStack>
    </Button>
  );
};

export default MenuItem;
