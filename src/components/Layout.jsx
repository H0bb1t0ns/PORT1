import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
