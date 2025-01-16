import React, { useState } from "react";
import {
  FormControl,
  Input,
  FormLabel,
  Textarea,
  FormErrorMessage,
  useColorMode,
} from "@chakra-ui/react";

interface Props {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error: string;
  placeholder: string;
  type?: string;
  isTextArea?: boolean;
  isDisabled?: boolean;
}

const FloatingLabelInput: React.FC<Props> = ({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  isTextArea = false,
  isDisabled = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const { colorMode } = useColorMode();

  return (
    <FormControl
      isInvalid={!!error}
      mt={4}
      position="relative"
      fontFamily={"fantasy"}
    >
      <FormLabel
        htmlFor={name}
        position="absolute"
        top={value || isFocused ? "5%" : "50%"}
        left="12px"
        fontSize={value || isFocused ? "10px" : "15px"}
        backgroundColor="transparent"
        px="2"
        transform={value || isFocused ? "translateY(0)" : "translateY(-50%)"}
        transition="0.2s ease all"
        zIndex={1}
        color={value || isFocused ? "teal.500" : "gray.400"}
        as={"p"}
      >
        {label}
      </FormLabel>

      {!isTextArea ? (
        <Input
          width={"300px"}
          height={"60px"}
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          focusBorderColor="teal.400"
          shadow={isFocused ? "4px 5px 4px #E47580" : "gray"}
          paddingTop="16px"
          fontSize={"10px"}
          bg={colorMode === "light" ? "#FADFA1" : "transparent"}
          isDisabled={isDisabled}
        />
      ) : (
        <Textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          focusBorderColor="teal.400"
          shadow="sm"
          paddingTop="16px"
          bg={colorMode === "light" ? "#FADFA1" : "transparent"}
        />
      )}

      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default FloatingLabelInput;
