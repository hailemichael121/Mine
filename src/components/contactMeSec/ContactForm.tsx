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

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] =
    useState<ContactFormValues>(initialFormValues);
  const [errors, setErrors] = useState<ContactFormValues>(initialFormValues);
  const { colorMode } = useColorMode();
  const toast = useToast();

  // Handle input change for all form fields
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Validate form and submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(formValues);
    setErrors(validationErrors);

    if (isFormValid(validationErrors)) {
      try {
        console.log("Form data:", formValues);
        const response = await fetch(
          "https://mine-backend-x55x.onrender.com/api/contact",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formValues),
          }
        );
        if (response.ok) {
          toast({
            title: "Success",
            description: "Form submitted successfully!",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          setFormValues(initialFormValues); // Clear form after successful submission
        } else {
          toast({
            title: "Error",
            description: "Error submitting the form.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      } catch (err) {
        console.error("Error:", err);
        toast({
          title: "Error",
          description: "An unexpected error occurred.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };

  const isFormValid = (validationErrors: ContactFormValues) => {
    return (
      formValues.name.length >= 3 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email) &&
      formValues.subject.length >= 8 &&
      formValues.message.length >= 15 &&
      Object.values(validationErrors).every((error) => error === "")
    );
  };

  return (
    <Box
      bg={colorMode === "dark" ? "#222222" : "#FFFFFF"}
      fontFamily={"fantasy"}
    >
      <form onSubmit={handleSubmit}>
        <Flex direction={{ base: "column", md: "row" }} gap={4}>
          {/* Column 1: Name, Email, Subject */}
          <Flex direction="column" flex="1">
            <FormLabelWithError
              label="Name"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              error={errors.name}
              placeholder="Name"
            />

            <FormLabelWithError
              label="Email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              error={errors.email}
              placeholder="Email"
              type="email"
            />

            <FormLabelWithError
              label="Subject"
              name="subject"
              value={formValues.subject}
              onChange={handleInputChange}
              error={errors.subject}
              placeholder="Subject"
            />
          </Flex>

          {/* Column 2: Message and Submit Button */}
          <Flex direction="column" flex="1">
            <Box position="relative">
              <FormLabelWithError
                label="Message"
                name="message"
                value={formValues.message}
                onChange={handleInputChange}
                error={errors.message}
                placeholder="Message"
                isTextArea
              />
              <Tooltip
                color={"red"}
                label={
                  <ul style={{ margin: 0, padding: "5px 10px" }}>
                    <li>Name: &gt; 3 characters</li>
                    <li>Email: Valid format</li>
                    <li>Subject: &gt; 8 characters</li>
                    <li>Message: &gt; 15 characters</li>
                  </ul>
                }
                placement="top"
                hasArrow
              >
                <Button
                  borderRadius={"50%"}
                  bgColor={"#0DCAF0"}
                  fontSize={"xs"}
                  fontStyle={"oblique"}
                  position="absolute"
                  top="-2px"
                  right="0px"
                  p={0.1}
                  height="13px"
                  width="13px"
                  minWidth="13px"
                >
                  i
                </Button>
              </Tooltip>
            </Box>

            <ContactSecFormSubmitButton
              isDisabled={!isFormValid(errors)}
              colorMode={colorMode}
            />
          </Flex>
        </Flex>
      </form>
    </Box>
  );
};

export default ContactForm;
