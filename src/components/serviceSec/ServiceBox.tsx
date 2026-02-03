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
  const isMobile = useBreakpointValue({ base: true, md: false });
  const baseColor = colorMode === "light" ? "#262626" : "#FFFFFF";
  const surfaceColor = colorMode === "light" ? "#FFFFFF" : "#262626";

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

  const servicesPerSlide = isMobile ? 1 : 3;
  const maxIndex = Math.ceil(services.length / servicesPerSlide) - 1;

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
  const displayedServices = services.slice(
    activeDot * servicesPerSlide,
    (activeDot + 1) * servicesPerSlide,
  );

  return (
    <Box bg={surfaceColor} width="100%" p={{ base: 4, md: 6 }}>
      <Flex justify="space-between" align="center">
        {/* Left navigation button */}
        {!isMobile && (
          <IconButton
            aria-label="Previous"
            icon={<TiChevronLeftOutline fontSize={"30px"} />}
            onClick={handlePrev}
            isDisabled={activeDot === 0}
            variant="ghost"
            color={baseColor}
            _hover={{ bg: "transparent" }}
          />
        )}

        {/* Swipeable container */}
        <Box
          position="relative"
          overflow="hidden"
          {...swipeHandlers}
          cursor="grab"
          flex="1"
        >
          <HStack justify="center" spacing={{ base: 0, md: 2 }} width="100%">
            {displayedServices.map((service, index) => (
              <Box
                key={index}
                p={{ base: 2, md: 4 }}
                flexShrink={0}
                width={{ base: "100%", md: "auto" }}
              >
                <ServiceSecCard
                  iconSrc={service.iconSrc}
                  altText={service.altText}
                  serviceText={service.serviceText}
                  titleText={service.titleText}
                />
              </Box>
            ))}
          </HStack>
        </Box>

        {/* Right navigation button */}
        {!isMobile && (
          <IconButton
            aria-label="Next"
            icon={<TiChevronRightOutline fontSize={"30px"} />}
            onClick={handleNext}
            isDisabled={activeDot >= maxIndex}
            variant="ghost"
            color={baseColor}
            _hover={{ bg: "transparent" }}
          />
        )}
      </Flex>

      {/* Pagination dots */}
      <HStack justify="center" mt={4} spacing={3}>
        {[...Array(maxIndex + 1)].map((_, dotIndex) => (
          <Circle
            key={dotIndex}
            size="8px"
            onClick={() => handleDotClick(dotIndex)}
            cursor="pointer"
            bg={activeDot === dotIndex ? baseColor : "transparent"}
            border={`1px solid ${baseColor}`}
            opacity={activeDot === dotIndex ? 1 : 0.4}
          />
        ))}
      </HStack>
    </Box>
  );
};

export default ServiceBox;
