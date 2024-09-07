import {
  VStack,
  useBreakpointValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";

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
          ml={"30px"}
          gap={"20px"}
          top={230}
          left={30}
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
            right={10} // Proper alignment for mobile menu button
            zIndex={100000}
            onClick={onOpen}
          />

          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerContent>
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
            </DrawerContent>
          </Drawer>
        </>
      )}
    </>
  );
};

export default SideMenu;
