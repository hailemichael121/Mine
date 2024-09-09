import {
  VStack,
  useBreakpointValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  IconButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai"; // Importing close icon

import { menuItems } from "./MenuItemsArray";
import MenuItem from "./MenuItem";

const SideMenu = () => {
  const [activeSection, setActiveSection] = useState("");
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      if (isMobile) {
        onClose();
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe only specific sections
    const sections = document.querySelectorAll("div[id]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      {!isMobile ? (
        // Desktop View
        <VStack
          ml={"10px"}
          gap={"20px"}
          top={230}
          left={30}
          paddingBottom={"100px"}
          position="fixed"
          zIndex={10000}
        >
          {menuItems.map((item) => (
            <MenuItem
              key={item.id}
              isActive={activeSection === item.id}
              label={item.label}
              sectionId={item.id}
              icon={item.icon}
              onClick={scrollToSection}
            />
          ))}
        </VStack>
      ) : (
        <>
          <IconButton
            aria-label="Open Menu"
            icon={<CiMenuFries />}
            position="fixed"
            top={10}
            right={10}
            zIndex={100000}
            onClick={onOpen}
          />

          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerContent w={"30%"}>
              <DrawerHeader>
                {/* Close Button */}
                <IconButton
                  aria-label="Close Menu"
                  icon={<AiOutlineClose />}
                  onClick={onClose}
                  position="absolute"
                  top={4}
                  right={4}
                />
              </DrawerHeader>
              <DrawerBody>
                <VStack gap={"20px"} mt={10}>
                  {menuItems.map((item) => (
                    <MenuItem
                      key={item.id}
                      isActive={activeSection === item.id}
                      label={item.label}
                      sectionId={item.id}
                      icon={item.icon}
                      onClick={scrollToSection}
                    />
                  ))}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </>
  );
};

export default SideMenu;
