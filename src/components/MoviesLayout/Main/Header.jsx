import React, { useState, useContext } from "react";
import AddBtn from "./AddBtn";
import Popup from "./components/Popup/Popup";
import { Context } from "../../../context/MainContext";

const Header = () => {
  const { isShowPopup, setIsShowPopup } = useContext(Context);
  return (
    <header className="flex justify-between items-center py-8 mx-14">
      <nav>
        <p className="text-lightred text-xl">
          <span className="font-bold">netflix</span>roulette
        </p>
      </nav>
      <nav>
        <AddBtn onClick={() => setIsShowPopup(true)} />
      </nav>
      {isShowPopup && (
        <Popup movie={false} heading="ADD MOVIE" isEdit={false} />
      )}
    </header>
  );
};

export default Header;
