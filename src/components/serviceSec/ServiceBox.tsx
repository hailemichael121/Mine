import {
  Box,
  HStack,
  Circle,
  useColorMode,
  IconButton,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import ServiceSecCard from "./ServiceSecCard";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";

const ServiceBox: React.FC = () => {
  const { colorMode } = useColorMode();
  const [activeDot, setActiveDot] = useState(0);
  const servicesPerSlide = useBreakpointValue({ base: 1, md: 2, lg: 3 }) ?? 1;
  const baseColor = colorMode === "light" ? "#262626" : "#FFFFFF";

  const services = [
    {
      iconSrc: "images/ServiceIcon/BackendDev.png",
      altText: "BackEnd Icon",
      serviceText: "Develop scalable and quality backend applications.",
      titleText: "BackEnd Development",
    },
    {
      iconSrc: "images/ServiceIcon/frontendDev.png",
      altText: "FrontEnd Icon",
      serviceText:
        "Developing complex and intuitive web applications with optimized user interfaces.",
      titleText: "FrontEnd Development",
    },
    {
      iconSrc: "images/ServiceIcon/mobile-applicationDev.png",
      altText: "MobileDev Icon",
      serviceText:
        "Building robust mobile applications for Android and iOS with performance and scalability.",
      titleText: "Mobile Application",
    },
    {
      iconSrc: "images/ServiceIcon/machine-learningDev.png",
      altText: "Machine Learning Icon",
      serviceText:
        "Designing machine learning models for predictive analysis and data-driven decision-making.",
      titleText: "Machine Learning",
    },
    {
      iconSrc: "images/ServiceIcon/data-scientist.png",
      altText: "Data Analyst Icon",
      serviceText:
        "Extracting insights from data to drive business decisions and performance.",
      titleText: "Data Analyst",
    },
  ];

  const maxIndex = Math.ceil(services.length / servicesPerSlide) - 1;
  const slideWidth = 320;
  const gap = 24;
  const translateX = activeDot * (slideWidth + gap) * servicesPerSlide;

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const handleDotClick = (index: number) => setActiveDot(index);

  const handleNext = () => {
    setActiveDot((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const handlePrev = () => {
    setActiveDot((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // Slice the services array based on the active dot
  return (
    <Box bg={colorMode === "light" ? "#FFFFFF" : "#222222"} width="100%" p={4}>
      <Flex justify="space-between" align="center" gap={4}>
        {/* Left navigation button */}
        <IconButton
          aria-label="Previous"
          icon={<TiChevronLeftOutline fontSize={"30px"} />}
          onClick={handlePrev}
          isDisabled={activeDot === 0}
          variant="ghost"
          color={baseColor}
        />

        {/* Swipeable container */}
        <Box
          position="relative"
          overflow="hidden"
          {...swipeHandlers}
          cursor="grab"
          flex="1"
        >
          <Flex
            gap={`${gap}px`}
            transform={`translateX(-${translateX}px)`}
            transition="transform 0.4s ease"
            width="100%"
          >
            {services.map((service, index) => (
              <Box
                key={index}
                flexShrink={0}
                width={{ base: "100%", md: `${slideWidth}px` }}
                p={{ base: 2, md: 3 }}
              >
                <ServiceSecCard
                  iconSrc={service.iconSrc}
                  altText={service.altText}
                  serviceText={service.serviceText}
                  titleText={service.titleText}
                />
              </Box>
            ))}
          </Flex>
        </Box>

        {/* Right navigation button */}
        <IconButton
          aria-label="Next"
          icon={<TiChevronRightOutline fontSize={"30px"} />}
          onClick={handleNext}
          isDisabled={activeDot >= maxIndex}
          variant="ghost"
          color={baseColor}
        />
      </Flex>

      {/* Pagination dots */}
      <HStack justify="center" mt={4}>
        {[...Array(maxIndex + 1)].map((_, dotIndex) => (
          <Circle
            key={dotIndex}
            size="10px"
            onClick={() => handleDotClick(dotIndex)}
            cursor="pointer"
            bg={activeDot === dotIndex ? baseColor : "transparent"}
            border={`solid 1px ${baseColor}`}
          />
        ))}
      </HStack>
    </Box>
  );
};

export default ServiceBox;
