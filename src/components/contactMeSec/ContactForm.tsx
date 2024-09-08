import React, { useState } from "react";
import { Box, Button, Flex, Tooltip, useColorMode } from "@chakra-ui/react";
import { validateForm } from "./formValidation";
import { ContactFormValues, initialFormValues } from "./formTypes";
import FormLabelWithError from "./FormLabelWithError";
import ContactSecFormSubmitButton from "./ContactSecFormSubmitButton";

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] =
    useState<ContactFormValues>(initialFormValues);
  const [errors, setErrors] = useState<ContactFormValues>(initialFormValues);

  const { colorMode } = useColorMode();

  // Handle input change for all form fields
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Validate form and submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(formValues);
    setErrors(validationErrors);

    if (isFormValid(validationErrors)) {
      console.log("Form data:", formValues);
      // Backend call here
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
              isDisabled={!isFormValid(errors)} // Disable if form is not valid
              colorMode={colorMode}
            />
          </Flex>
        </Flex>
      </form>
    </Box>
  );
};

export default ContactForm;
