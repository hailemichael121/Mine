// components/projectsSec/ProjectSecCard.tsx
import React, { useState } from "react";
import {
  Box,
  Image,
  Text,
  Heading,
  Link as ChakraLink,
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
  const baseColor = colorMode === "dark" ? "#FFFFFF" : "#262626";
  const surfaceColor = colorMode === "dark" ? "#262626" : "#FFFFFF";

  return (
    <>
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.015 }}
      >
        <Box
          borderRadius="3xl"
          overflow="hidden"
          bg={surfaceColor}
          border="1px solid"
          borderColor={baseColor}
          boxShadow={`0 40px 70px -52px ${baseColor}`}
          cursor="pointer"
          onClick={() => setIsModalOpen(true)}
          transition="all 0.35s ease"
          position="relative"
          _before={{
            content: '""',
            position: "absolute",
            top: "-14px",
            left: "36px",
            width: "120px",
            height: "16px",
            borderRadius: "999px",
            border: "1px solid",
            borderColor: baseColor,
            bg: surfaceColor,
            boxShadow: `0 10px 24px -18px ${baseColor}`,
          }}
          _after={{
            content: '""',
            position: "absolute",
            inset: "14px",
            borderRadius: "2xl",
            border: "1px dashed",
            borderColor: baseColor,
            opacity: 0.15,
            pointerEvents: "none",
          }}
          _hover={{
            transform: "translateY(-5px)",
            boxShadow: `0 48px 80px -60px ${baseColor}`,
          }}
        >
          <Box position="relative" overflow="hidden">
            <Box
              position="absolute"
              top="12px"
              left="16px"
              zIndex={2}
              border="1px solid"
              borderColor={baseColor}
              borderRadius="full"
              px={3}
              py={1}
              fontSize="xs"
              color={baseColor}
              bg={surfaceColor}
              opacity={0.9}
            >
              Featured Project
            </Box>
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
                      h="220px"
                      objectFit="cover"
                      filter="grayscale(1)"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : null}

            {/* 👇 Wavy SVG Divider */}
            <Box
              position="absolute"
              bottom="-16px"
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
                  fill={surfaceColor}
                />
                <path
                  d="M0,40 C480,140 960,-40 1440,40"
                  fill="none"
                  stroke={baseColor}
                  strokeWidth="2"
                />
              </svg>
            </Box>
          </Box>

          <Box p={5} position="relative" zIndex={2}>
            <Heading size="md" mb={2} color={baseColor}>
              {title}
            </Heading>
            <Text noOfLines={3} mb={4} color={baseColor} opacity={0.75}>
              {description}
            </Text>

            <HStack spacing={2} mb={4} flexWrap="wrap">
              {tags?.slice(0, 3).map((tag, index) => (
                <Tag
                  key={index}
                  size="sm"
                  variant="outline"
                  borderColor={baseColor}
                  color={baseColor}
                  opacity={0.85}
                >
                  {tag}
                </Tag>
              ))}
              {tags && tags.length > 3 && (
                <Tag
                  size="sm"
                  variant="outline"
                  borderColor={baseColor}
                  color={baseColor}
                  opacity={0.85}
                >
                  +{tags.length - 3}
                </Tag>
              )}
            </HStack>

            <HStack spacing={3}>
              {sourceLink && (
                <ChakraLink
                  href={sourceLink}
                  isExternal
                  onClick={(e) => e.stopPropagation()}
                  color={baseColor}
                  border="1px solid"
                  borderColor={baseColor}
                  borderRadius="full"
                  px={3}
                  py={1}
                  _hover={{ textDecoration: "none", opacity: 0.85 }}
                >
                  <BsGithub fontSize={"20px"} />
                </ChakraLink>
              )}
              {siteLink && (
                <ChakraLink
                  href={siteLink}
                  isExternal
                  onClick={(e) => e.stopPropagation()}
                  color={baseColor}
                  border="1px solid"
                  borderColor={baseColor}
                  borderRadius="full"
                  px={3}
                  py={1}
                  _hover={{ textDecoration: "none", opacity: 0.85 }}
                >
                  <GrLink fontSize={"20px"} />
                </ChakraLink>
              )}
            </HStack>
          </Box>
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
