import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import { Achievment, ContactBox, ProfileBox } from "../components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />, // navbar location
    children: [
      {
        path: "/",
        element: <ProfileBox />,
      },
      {
        path: "/Achievments",
        element: <Achievment />,
      },
      {
        path: "/Contact",
        element: <ContactBox />,
      },
    ],
  },

  //
]);

export default router;
