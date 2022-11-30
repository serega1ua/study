import React, { useContext } from "react";
import AddBtn from "./AddBtn";
import Popup from "./components/Popup/Popup";
import { Context } from "../../../context/MainContext";
import usePopup from "../../../hooks/usePopup";

const Header = () => {
  const { isShowPopup, setIsShowPopup } = useContext(Context);
  const showPopup = usePopup(false, setIsShowPopup, isShowPopup);
  return (
    <header className="flex justify-between items-center py-8 mx-14">
      <nav>
        <p className="text-lightred text-xl">
          <span className="font-bold">netflix</span>roulette
        </p>
      </nav>
      <nav>
        <AddBtn onClick={showPopup} />
      </nav>
      {isShowPopup && (
        <Popup movie={false} heading="ADD MOVIE" isEdit={false} />
      )}
    </header>
  );
};

export default Header;
