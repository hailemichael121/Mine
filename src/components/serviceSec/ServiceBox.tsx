import { Box, HStack, Circle, useColorMode } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import ServiceSecCard from "./ServiceSecCard";

const ServiceBox: React.FC = () => {
  const { colorMode } = useColorMode();
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      iconSrc: "images/ServiceIcon/frontendDev.png",
      altText: "FrontEnd Icon",
      serviceText:
        "Developing complex and intuitive web applications with optimized user interfaces.",
      titleText: "FrontEnd Development",
    },
    {
      iconSrc: "images/ServiceIcon/BackendDev.png",
      altText: "BackEnd Icon",
      serviceText: "Develop scalable and quality backend applications.",
      titleText: "BackEnd Development",
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

  const maxIndex = Math.max(0, services.length - 3); // Ensure index range fits the number of services

  // Handle swipe logic
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (activeIndex < maxIndex) {
        setActiveIndex((prevIndex) => prevIndex + 1); // Move 1 card forward
      }
    },
    onSwipedRight: () => {
      if (activeIndex > 0) {
        setActiveIndex((prevIndex) => prevIndex - 1); // Move 1 card backward
      }
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
    trackTouch: true,
  });

  const handleDotClick = (index: number) => {
    setActiveIndex(index * 1); // Set index based on swiping by 1
  };

  return (
    <Box bg={colorMode === "light" ? "#FFFFFF" : "#222222"} width="100%" p={5}>
      <Box
        position="relative"
        overflow="hidden"
        {...swipeHandlers}
        cursor="grab"
      >
        <HStack
          spacing={6}
          transform={`translateX(-${activeIndex * (100 / 3)}%)`} // Move by 1 card-width steps
          transition="transform 0.5s ease-in-out"
          width={`${(services.length / 3) * 100}%`}
          minWidth="max-content"
        >
          {services.map((service, index) => (
            <Box
              key={index}
              minWidth="calc(100% / 3)" // Ensure each card takes 1/3 of the width of the container
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

        {/* Progress Dots */}
        <HStack justify="center" mt={4}>
          {[...Array(Math.ceil((services.length - 2) / 2))].map(
            (_, dotIndex) => (
              <Circle
                key={dotIndex}
                size="10px"
                onClick={() => handleDotClick(dotIndex)}
                cursor="pointer"
                bg={
                  Math.floor(activeIndex / 2) === dotIndex
                    ? "#30F2F2"
                    : "#1B1B1B"
                }
                border={"solid 1px #254B4B"}
              />
            )
          )}
        </HStack>
      </Box>
    </Box>
  );
};

export default ServiceBox;
