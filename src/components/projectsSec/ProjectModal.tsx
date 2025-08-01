// components/projectsSec/ProjectModal.tsx
import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Box,
  Heading,
  Text,
  HStack,
  Tag,
  Link,
  useColorMode,
  Flex,
  Image,
  VStack,
  Divider,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import { BsGithub, BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { GrLink } from "react-icons/gr";

// Wavy divider component
const WavyDivider = () => (
  <Box position="relative" height="20px" overflow="hidden" width="100%" my={4}>
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      height="40px"
      //   background="url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 1200 120\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z\' opacity=\'.25\' fill=\'currentColor\'/><path d=\'M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z\' opacity=\'.5\' fill=\'currentColor\'/><path d=\'M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z\' fill=\'currentColor\'/></svg>')"
      backgroundRepeat="repeat-x"
      backgroundSize="1200px 100px"
      transform="scaleY(0.5)"
    />
  </Box>
);

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  images?: string[];
  video?: string;
  tags?: string[];
  siteLink?: string;
  sourceLink?: string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  images,
  video,
  tags,
  siteLink,
  sourceLink,
}) => {
  const { colorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    if (images && images.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (images && images.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={isMobile ? "full" : "4xl"}>
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent
        bg={
          colorMode === "dark"
            ? "rgba(17, 17, 17, 0.9)"
            : "rgba(255, 255, 255, 0.9)"
        }
        backdropFilter="blur(20px)"
        border="1px solid"
        borderColor={colorMode === "dark" ? "gray.700" : "gray.200"}
        boxShadow={
          colorMode === "dark"
            ? "20px 20px 50px rgba(0, 0, 0, 0.5)"
            : "20px 20px 50px rgba(0, 0, 0, 0.1)"
        }
        borderRadius="xl"
        overflow="hidden"
      >
        <ModalCloseButton
          zIndex={1}
          color={colorMode === "dark" ? "white" : "black"}
        />
        <Flex direction={isMobile ? "column" : "row"} h="full">
          {!isMobile && (
            <Box
              flex={1}
              position="relative"
              bg={colorMode === "dark" ? "gray.800" : "gray.100"}
            >
              {video ? (
                <video
                  controls
                  autoPlay
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : images && images.length > 0 ? (
                <>
                  <Image
                    src={images[currentImageIndex]}
                    alt={title}
                    w="100%"
                    h="100%"
                    objectFit="contain"
                    p={4}
                  />
                  {images.length > 1 && (
                    <>
                      <IconButton
                        aria-label="Previous image"
                        icon={<BsArrowLeft />}
                        position="absolute"
                        left="4"
                        top="50%"
                        transform="translateY(-50%)"
                        onClick={handlePrevImage}
                        size="md"
                        borderRadius="full"
                      />
                      <IconButton
                        aria-label="Next image"
                        icon={<BsArrowRight />}
                        position="absolute"
                        right="4"
                        top="50%"
                        transform="translateY(-50%)"
                        onClick={handleNextImage}
                        size="md"
                        borderRadius="full"
                      />
                    </>
                  )}
                </>
              ) : (
                <Box
                  w="100%"
                  h="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text>No Image Available</Text>
                </Box>
              )}
            </Box>
          )}

          <VStack
            flex={1}
            p={8}
            align="flex-start"
            spacing={6}
            overflowY="auto"
            maxH={isMobile ? "70vh" : "auto"}
          >
            <Heading size="xl">{title}</Heading>

            <WavyDivider />

            <Text fontSize="lg">{description}</Text>

            {tags && tags.length > 0 && (
              <>
                <Divider />
                <HStack spacing={2} flexWrap="wrap">
                  {tags.map((tag, index) => (
                    <Tag
                      key={index}
                      size="md"
                      colorScheme="blue"
                      variant="subtle"
                    >
                      {tag}
                    </Tag>
                  ))}
                </HStack>
              </>
            )}

            {(siteLink || sourceLink) && (
              <>
                <Divider />
                <HStack spacing={4}>
                  {sourceLink && (
                    <Link
                      href={sourceLink}
                      isExternal
                      display="flex"
                      alignItems="center"
                      gap={2}
                      color={colorMode === "dark" ? "blue.300" : "blue.500"}
                    >
                      <BsGithub fontSize={"20px"} /> Source Code
                    </Link>
                  )}
                  {siteLink && (
                    <Link
                      href={siteLink}
                      isExternal
                      display="flex"
                      alignItems="center"
                      gap={2}
                      color={colorMode === "dark" ? "blue.300" : "blue.500"}
                    >
                      <GrLink fontSize={"20px"} /> Live Demo
                    </Link>
                  )}
                </HStack>
              </>
            )}

            {isMobile && (video || (images && images.length > 0)) && (
              <>
                <Divider />
                <Box
                  w="100%"
                  position="relative"
                  bg={colorMode === "dark" ? "gray.800" : "gray.100"}
                  borderRadius="md"
                >
                  {video ? (
                    <video controls style={{ width: "100%" }}>
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <>
                      <Image
                        src={images?.[currentImageIndex] || ""}
                        alt={title}
                        w="100%"
                        maxH="300px"
                        objectFit="contain"
                        p={4}
                      />
                      {images && images.length > 1 && (
                        <Flex
                          justify="space-between"
                          position="absolute"
                          top="50%"
                          left="0"
                          right="0"
                          px={4}
                        >
                          <IconButton
                            aria-label="Previous image"
                            icon={<BsArrowLeft />}
                            onClick={handlePrevImage}
                            size="sm"
                            borderRadius="full"
                          />
                          <IconButton
                            aria-label="Next image"
                            icon={<BsArrowRight />}
                            onClick={handleNextImage}
                            size="sm"
                            borderRadius="full"
                          />
                        </Flex>
                      )}
                    </>
                  )}
                </Box>
              </>
            )}
          </VStack>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
