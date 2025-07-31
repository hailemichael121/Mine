import React from "react";
import { Button, Spinner } from "@chakra-ui/react";

interface Props {
  colorMode: "light" | "dark";
  isDisabled: boolean;
  isLoading: boolean;
}

const ContactSecFormSubmitButton: React.FC<Props> = ({
  colorMode,
  isDisabled,
  isLoading,
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
      disabled={isDisabled || isLoading} // Disable the button when form is invalid or loading
      isLoading={isLoading} // Show loading state
      spinner={<Spinner size="md" />} // Custom spinner
      opacity={isDisabled ? 0.6 : 1}
      pointerEvents={isDisabled ? "none" : "auto"}
    >
      Submit
    </Button>
  );
};

export default ContactSecFormSubmitButton;
