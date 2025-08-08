import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Tooltip,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { validateForm } from "./formValidation";
import { ContactFormValues, initialFormValues } from "./formTypes";
import FormLabelWithError from "./FormLabelWithError";
import ContactSecFormSubmitButton from "./ContactSecFormSubmitButton";
import Captcha from "./Captcha";

const FORMSPREE_URL = "https://formspree.io/f/mdkdpjyg";

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] =
    useState<ContactFormValues>(initialFormValues);
  const [errors, setErrors] = useState<ContactFormValues>(
    initialFormValues
  );
  const { colorMode } = useColorMode();
  const toast = useToast();
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleCaptchaVerify = (isValid: boolean) => {
    setIsCaptchaValid(isValid);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const validationErrors = validateForm(formValues);
    setErrors(validationErrors);

    if (!isFormValid(validationErrors) || !isCaptchaValid) {
      toast({
        title: "Error",
        description:
          "Please fill out all fields correctly and complete the CAPTCHA.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        toast({
          title: "Message Sent",
          description:
            "Thank you for your message! I’ll get back to you shortly.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setFormValues(initialFormValues);
        setIsFormSubmitted(true);
      } else {
        throw new Error("Form submission error");
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "Submission Failed",
        description:
          "Something went wrong sending your message. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

    setIsLoading(false);
  };

  const isFormValid = (validationErrors: ContactFormValues) => {
    return Object.values(validationErrors).every((err) => !err);
  };

  return (
    <Box bg={colorMode === "dark" ? "#222222" : "#FFFFFF"} p={4} rounded="md">
      <form onSubmit={handleSubmit}>
        <Flex direction={{ base: "column", md: "row" }} gap={6}>
          {/* Left column */}
          <Flex direction="column" flex={1} gap={4}>
            <Captcha onVerify={handleCaptchaVerify} isDisabled={isFormSubmitted} />
            <FormLabelWithError
              label="Name" name="name" value={formValues.name}
              onChange={handleInputChange} error={errors.name}
              placeholder="Your Name"
              isDisabled={isFormSubmitted}
            />
            <FormLabelWithError
              label="Email" name="email" value={formValues.email}
              type="email"
              onChange={handleInputChange} error={errors.email}
              placeholder="Your Email"
              isDisabled={isFormSubmitted}
            />
            <FormLabelWithError
              label="Subject" name="subject" value={formValues.subject}
              onChange={handleInputChange} error={errors.subject}
              placeholder="Subject"
              isDisabled={isFormSubmitted}
            />
          </Flex>

          {/* Right column */}
          <Flex direction="column" flex={1}>
            <Box position="relative">
              <FormLabelWithError
                label="Message" name="message" value={formValues.message}
                isTextArea
                onChange={handleInputChange} error={errors.message}
                placeholder="Your Message"
                isDisabled={isFormSubmitted}
              />
              <Tooltip
                label={
                  <Box fontSize="sm">
                    <Box as="li">Name: ≥ 3 characters</Box>
                    <Box as="li">Email: valid format</Box>
                    <Box as="li">Subject: ≥ 8 characters</Box>
                    <Box as="li">Message: ≥ 15 characters</Box>
                  </Box>
                }
                hasArrow
                placement="top"
              >
                <Button
                  position="absolute"
                  top="-1"
                  right="0"
                  size="xs"
                  borderRadius="full"
                  colorScheme="cyan"
                >
                  i
                </Button>
              </Tooltip>
            </Box>

            <ContactSecFormSubmitButton
              isDisabled={
                isFormSubmitted || isLoading || !isCaptchaValid || !isFormValid(errors)
              }
              isLoading={isLoading}
              colorMode={colorMode}
            />
          </Flex>
        </Flex>
      </form>
    </Box>
  );
};

export default ContactForm;
