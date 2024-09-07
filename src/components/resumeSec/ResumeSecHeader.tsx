import { Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { GiPapers } from "react-icons/gi";

const ResumeSecHeader: React.FC = () => {
  return (
    <>
      {" "}
      <HStack justifyContent={"flex-start"}>
        <Heading alignItems="center" fontSize={"50px"} pb={10}>
          Resume
        </Heading>
        <GiPapers
          style={{
            marginTop: "-50px",
          }}
          fontSize={"25px"}
        />
      </HStack>
    </>
  );
};

export default ResumeSecHeader;
