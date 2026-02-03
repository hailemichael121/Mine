import {
  VStack,
  useBreakpointValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  IconButton,
  DrawerHeader,
  DrawerBody,
  DrawerOverlay,
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
      { threshold: 0.5 },
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
          gap={"10px"}
          top={210}
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
            isRound={true} // Makes it circular
            size="lg"
            boxShadow="0 4px 12px rgba(0,0,0,0.15)"
            position="fixed"
            bottom={8} // Bottom right
            right={6}
            zIndex={100000}
            onClick={onOpen}
          />

          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            {/* Overlay background for focus */}
            <DrawerOverlay />
            <DrawerContent maxW="280px" w="80%" borderRightRadius="2xl">
              <DrawerHeader borderBottomWidth="1px">
                Navigation
                <IconButton
                  aria-label="Close Menu"
                  icon={<AiOutlineClose />}
                  onClick={onClose}
                  variant="ghost"
                  position="absolute"
                  top={3}
                  right={3}
                />
              </DrawerHeader>
              <DrawerBody>
                <VStack gap="24px" mt={8} align="stretch">
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
