import React from "react";
import Footer from "../../MoviesLayout/Footer/Footer";
import CategoriesSection from "../../MoviesLayout/Main/components/CategoriesSection/CategoriesSection";
import { HeroSection } from "../../MoviesLayout/Main/HeroSection";

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
