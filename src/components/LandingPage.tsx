import { Outlet } from "react-router-dom";
import { Header } from ".";

const LandingPage = () => {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};

export default LandingPage;
