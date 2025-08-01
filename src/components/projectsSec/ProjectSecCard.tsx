// components/projectsSec/ProjectSecCard.tsx
import React, { useState } from "react";
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
import ProjectModal from "./ProjectModal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const gradientOverlay =
    colorMode === "dark"
      ? "linear(to-t, rgba(17,17,17,0.7), rgba(17,17,17,0))"
      : "linear(to-t, rgba(255,255,255,0.7), rgba(255,255,255,0))";

  return (
    <>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.03 }}
      >
        <Box
          borderRadius="xl"
          overflow="hidden"
          bg={
            colorMode === "dark"
              ? "rgba(17, 17, 17, 0.4)"
              : "rgba(255, 255, 255, 0.4)"
          }
          backdropFilter="blur(10px)"
          border="1px solid"
          borderColor={colorMode === "dark" ? "gray.700" : "gray.200"}
          boxShadow={
            colorMode === "dark"
              ? "10px 10px 20px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(80, 80, 80, 0.1)"
              : "10px 10px 20px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(255, 255, 255, 0.5)"
          }
          cursor="pointer"
          onClick={() => setIsModalOpen(true)}
          transition="all 0.3s ease"
          _hover={{
            transform: "translateY(-5px)",
            boxShadow:
              colorMode === "dark"
                ? "15px 15px 30px rgba(0, 0, 0, 0.4), -10px -10px 20px rgba(80, 80, 80, 0.2)"
                : "15px 15px 30px rgba(0, 0, 0, 0.2), -10px -10px 20px rgba(255, 255, 255, 0.7)",
          }}
        >
          <Box position="relative">
            {video ? (
              <video
                controls={false}
                style={{ width: "100%", pointerEvents: "none" }}
              >
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

            {/* 👇 Wavy SVG Divider */}
            <Box
              position="absolute"
              bottom="-12px"
              left="0"
              w="101%"
              zIndex={1}
              pointerEvents="none"
            >
              <svg
                viewBox="0 0 1440 100"
                preserveAspectRatio="none"
                style={{ display: "block", width: "100%", height: "40px" }}
              >
                <path
                  d="M0,40 C480,140 960,-40 1440,40 L1440,100 L0,100 Z"
                  fill={colorMode === "dark" ? "#1b1b1b" : "#ffffff"}
                />
              </svg>
            </Box>
          </Box>

          <Box p={4} position="relative" zIndex={2}>
            <Heading size="md" mb={2}>
              {title}
            </Heading>
            <Text noOfLines={2} mb={4}>
              {description}
            </Text>

            <HStack spacing={2} mb={4} flexWrap="wrap">
              {tags?.slice(0, 3).map((tag, index) => (
                <Tag key={index} size="sm" colorScheme="blue" variant="subtle">
                  {tag}
                </Tag>
              ))}
              {tags && tags.length > 3 && (
                <Tag size="sm" colorScheme="gray" variant="subtle">
                  +{tags.length - 3}
                </Tag>
              )}
            </HStack>

            <HStack spacing={4}>
              {sourceLink && (
                <Link
                  href={sourceLink}
                  isExternal
                  onClick={(e) => e.stopPropagation()}
                  color={colorMode === "dark" ? "blue.300" : "blue.500"}
                >
                  <BsGithub fontSize={"20px"} />
                </Link>
              )}
              {siteLink && (
                <Link
                  href={siteLink}
                  isExternal
                  onClick={(e) => e.stopPropagation()}
                  color={colorMode === "dark" ? "blue.300" : "blue.500"}
                >
                  <GrLink fontSize={"20px"} />
                </Link>
              )}
            </HStack>
          </Box>

          {/* Bottom gradient overlay */}
          <Box
            position="absolute"
            bottom="0"
            left="0"
            right="0"
            height="80px"
            bgGradient={gradientOverlay}
            zIndex={1}
          />
        </Box>
      </motion.div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        images={images}
        video={video}
        tags={tags}
        siteLink={siteLink}
        sourceLink={sourceLink}
      />
    </>
  );
};

export default ProjectSecCard;
