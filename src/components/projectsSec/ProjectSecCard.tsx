import React from "react";
import { Box, Image, Text, Heading, Link, HStack } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { GrLink } from "react-icons/gr";
import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  image?: string;
  video?: string;
  gitLink?: string;
  webLink?: string;
}

const ProjectSecCard: React.FC<Props> = ({
  title,
  description,
  image,
  video,
  gitLink,
  webLink,
}) => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Box
        borderTopRadius={"40px"}
        overflow="hidden"
        bg="gray.700"
        boxShadow="lg"
        _hover={{ transform: "scale(1.05)", transition: "0.3s ease" }}
      >
        {video ? (
          <video controls style={{ width: "100%" }}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image src={image} alt={title} />
        )}
        <Box p={4}>
          <Heading size="md" mb={2}>
            {title}
          </Heading>
          <Text mb={4}>{description}</Text>
          <HStack align={"center"} width={"100%"}>
            {" "}
            {gitLink && (
              <Link href={gitLink} isExternal color="blue.400" mr={2}>
                <BsGithub fontSize={"20px"} />
              </Link>
            )}
            {webLink && (
              <Link href={webLink} isExternal color="blue.400">
                <GrLink fontSize={"24px"} />
              </Link>
            )}
          </HStack>
        </Box>
      </Box>
    </motion.div>
  );
};

export default ProjectSecCard;
