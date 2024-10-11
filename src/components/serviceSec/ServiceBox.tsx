import {
  Box,
  HStack,
  Circle,
  useColorMode,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import ServiceSecCard from "./ServiceSecCard";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";

const ServiceBox: React.FC = () => {
  const { colorMode } = useColorMode();
  const [activeDot, setActiveDot] = useState(0);

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

  const servicesPerSlide = 3;
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
    (activeDot + 1) * servicesPerSlide
  );

  return (
    <Box bg={colorMode === "light" ? "#FFFFFF" : "#222222"} width="100%" p={4}>
      <Flex justify="space-between" align="center">
        {/* Left navigation button */}
        <IconButton
          aria-label="Previous"
          icon={<TiChevronLeftOutline fontSize={"30px"} />}
          onClick={handlePrev}
          isDisabled={activeDot === 0}
          variant="ghost"
        />

        {/* Swipeable container */}
        <Box
          position="relative"
          overflow="hidden"
          {...swipeHandlers}
          cursor="grab"
        >
          <HStack justify="center" spacing={2} width="100%">
            {displayedServices.map((service, index) => (
              <Box key={index} p={"20px"} flexShrink={0}>
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
        <IconButton
          aria-label="Next"
          icon={<TiChevronRightOutline fontSize={"30px"} />}
          onClick={handleNext}
          isDisabled={activeDot >= maxIndex}
          variant="ghost"
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
            bg={activeDot === dotIndex ? "#30F2F2" : "#1B1B1B"}
            border={"solid 1px #254B4B"}
          />
        ))}
      </HStack>
    </Box>
  );
};

export default ServiceBox;
