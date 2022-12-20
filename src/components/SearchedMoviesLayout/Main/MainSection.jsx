import React from "react";
import Footer from "../Footer/Footer";
import CategoriesSection from "./components/CategoriesSection/CategoriesSection";
import { HeroSection } from "./HeroSection";

const MainSection = ({ children }) => {
  return (
    <>
      <HeroSection isSelectedMovie={false} />
      <CategoriesSection />
      <main className="relative">{children}</main>
      <Footer />
    </>
  );
};

export default MainSection;
