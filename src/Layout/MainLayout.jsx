import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import "./MainLayout.css";
const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
