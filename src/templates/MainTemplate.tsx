import { Nav } from "../components/Nav/Nav";
import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";

export const MainTemplate = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};
