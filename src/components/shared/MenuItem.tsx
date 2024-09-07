import { Button, HStack, Text } from "@chakra-ui/react";
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
  return (
    <Button
      border={"none"}
      bgColor={"transparent"}
      _hover={{ backgroundColor: "transparent" }}
      fontSize={isActive ? "22px" : "24px"} // Subtle font size change
      onClick={() => onClick(sectionId)}
      color={isActive ? "#30F2F2" : "inherit"} // Use inherit for default color
    >
      <HStack align={"center"} position="relative">
        {isActive && (
          <Text position="absolute" left="-60px" fontSize="10px">
            {label}
          </Text>
        )}
        <Icon />
      </HStack>
    </Button>
  );
};

export default MenuItem;
