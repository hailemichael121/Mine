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
    <ReCAPTCHA
      sitekey="6Le9sbIqAAAAAG0OwizAy_PS14zYiq1E6fC4BR-H" // Replace with your Site Key
      onChange={handleCaptchaChange}
    />
  );
};

export default Captcha;
