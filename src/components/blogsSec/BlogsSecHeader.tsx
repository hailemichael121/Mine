import { Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { GiPapers } from "react-icons/gi";

const BlogsSecHeader: React.FC = () => {
  return (
    <HStack spacing={3} align="center">
      <Heading fontSize={{ base: "30px", md: "50px" }} pb={4}>
        Blogs
      </Heading>
      <GiPapers fontSize={"25px"} />
    </HStack>
  );
};

export default BlogsSecHeader;
