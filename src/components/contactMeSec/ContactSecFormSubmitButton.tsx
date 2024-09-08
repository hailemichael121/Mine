import React from "react";
import { Button } from "@chakra-ui/react";

interface Props {
  colorMode: "light" | "dark";
  isDisabled: boolean;
}

const ContactSecFormSubmitButton: React.FC<Props> = ({
  colorMode,
  isDisabled,
}) => {
  return (
    <Button
      type="submit"
      mt={4}
      border="solid 1px #30F2F2"
      color={colorMode === "dark" ? "#FFFFFF" : "#222222"}
      shadow="4px 5px 4px #E47580"
      bg={colorMode === "dark" ? "#222222" : "#FFFFFF"}
      _hover={{
        bg: isDisabled
          ? undefined
          : colorMode === "dark"
          ? "#30F0F0"
          : "#30F0F0",
        color: isDisabled ? undefined : "black",
      }}
      cursor={isDisabled ? "not-allowed" : "pointer"}
      disabled={isDisabled} // Disable the button when form is invalid
    >
      Submit
    </Button>
  );
};

export default ContactSecFormSubmitButton;
