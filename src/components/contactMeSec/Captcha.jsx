import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Captcha = ({ onVerify }) => {
  const [setIsVerified] = useState(false);

  const handleCaptchaChange = (token) => {
    if (token) {
      setIsVerified(true);
      onVerify(true); // Simulate successful CAPTCHA validation
    } else {
      setIsVerified(false);
      onVerify(false); // Simulate failed CAPTCHA validation
    }
  };

  return (
    <Box width={"300px"} height={"60px"} pt={4}>
      <ReCAPTCHA
        sitekey="6LePgrkqAAAAAArc6ZeYcz-u6rws1jPz8-Bqbe0J" // Use your Site Key
        onChange={handleCaptchaChange}
      />
    </Box>
  );
};

export default Captcha;
