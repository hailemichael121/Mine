import { Flex } from "@chakra-ui/react";
import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaTelegram,
} from "react-icons/fa6";

const HomeSocialMEdiaBtn: React.FC = () => {
  return (
    <>
      <Flex
        cursor={"pointer"}
        justifyContent={"space-around"}
        fontSize={"20px"}
      >
        <a
          href="https://github.com/Hailemichael121"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com/haile_michael_121"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          href="https://linkedin.com/in/hailemichael121/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://t.me/Sholet1234"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram />
        </a>
        <a
          href="Https://www.x.com/hailemichael121"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
        </a>
      </Flex>
    </>
  );
};

export default HomeSocialMEdiaBtn;
