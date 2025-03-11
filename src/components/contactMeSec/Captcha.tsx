import { Box } from "@chakra-ui/react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface CaptchaProps {
  onVerify: (isVerified: boolean) => void;
  isDisabled: boolean;
}

const Captcha = ({ onVerify }: CaptchaProps) => {
  const [isVerified, setIsVerified] = useState(false);

  const handleCaptchaChange = (token: string | null) => {
    if (token) {
      setIsVerified(true);
      onVerify(true); // Notify parent component that CAPTCHA is valid
    } else {
      setIsVerified(false);
      onVerify(false); // Notify parent component that CAPTCHA is invalid
    }
  };

  return (
    <Box>
      <ReCAPTCHA
        sitekey="6LePgrkqAAAAAArc6ZeYcz-u6rws1jPz8-Bqbe0J" // Use your Site Key
        onChange={handleCaptchaChange}
      />
      {!isVerified && <p>Please complete the CAPTCHA to proceed.</p>}
    </Box>
  );
};

export default Captcha;
