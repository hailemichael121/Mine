import React from "react";
import {
  Box,
  Image,
  Text,
  Heading,
  Link,
  HStack,
  Tag,
  useColorMode,
} from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { GrLink } from "react-icons/gr";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Props {
  title: string;
  description: string;
  images?: string[];
  video?: string;
  tags?: string[];
  siteLink?: string;
  sourceLink?: string;
}

const ProjectSecCard: React.FC<Props> = ({
  title,
  description,
  images,
  video,
  tags,
  siteLink,
  sourceLink,
}) => {
  const { colorMode } = useColorMode();

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <Box
        borderRadius={16}
        overflow="clip"
        bgColor={colorMode === "dark" ? "#111111" : "#FF111111"}
        boxShadow="lg"
        _hover={{ transform: "scale(1.05)", transition: "0.3s ease" }}
      >
        {video ? (
          <video controls style={{ width: "100%" }}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : images && images.length > 0 ? (
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image}
                  alt={`${title} Image ${index + 1}`}
                  w="100%"
                  h="200px"
                  objectFit="cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}

        <Box p={4}>
          <Heading size="md" mb={2}>
            {title}
          </Heading>
          <Text mb={4}>{description}</Text>

          {/* Tags */}
          <HStack spacing={2} mb={4} flexWrap="wrap">
            {tags?.map((tag, index) => (
              <Tag key={index} size="sm" colorScheme="blue">
                {tag}
              </Tag>
            ))}
          </HStack>

          {/* Links */}
          <HStack spacing={4}>
            {sourceLink && (
              <Link href={sourceLink} isExternal color="blue.400">
                <BsGithub fontSize={"20px"} />
              </Link>
            )}
            {siteLink && (
              <Link href={siteLink} isExternal color="blue.400">
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
