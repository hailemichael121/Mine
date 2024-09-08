import { IoHome, IoNewspaper } from "react-icons/io5";
import { SiAboutdotme } from "react-icons/si";
import { GrServices } from "react-icons/gr";
import { BiSolidUserDetail } from "react-icons/bi";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";

export const menuItems = [
  { id: "home", label: "Home", icon: IoHome },
  { id: "about", label: "About", icon: SiAboutdotme },
  { id: "blogs", label: "Blogs", icon: IoNewspaper },
  { id: "resume", label: "Resume", icon: BiSolidUserDetail },
  { id: "projects", label: "Projects", icon: FaBriefcase },
  { id: "services", label: "Services", icon: GrServices },
  { id: "contacts", label: "Contact", icon: MdConnectWithoutContact },
];
