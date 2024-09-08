export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const initialFormValues: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
