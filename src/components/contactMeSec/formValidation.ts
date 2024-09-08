import { ContactFormValues } from "./formTypes";

// Helper function to validate email format
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Main form validation function
export const validateForm = (values: ContactFormValues): ContactFormValues => {
  const errors: ContactFormValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  // Updated name validation to allow spaces and require at least 3 characters
  if (!/^[a-zA-Z\s]{3,}$/.test(values.name)) {
    errors.name = "Name must be at least 3 characters and can include spaces.";
  }

  if (!validateEmail(values.email)) {
    errors.email = "Invalid email format.";
  }

  if (values.subject.length < 8) {
    errors.subject = "Subject must be at least 8 characters.";
  }

  if (values.message.length < 15) {
    errors.message = "Message must be at least 15 characters.";
  }

  return errors;
};
