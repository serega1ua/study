import React from "react";
import { useNavigate } from "react-router-dom";

const LoginBtn = () => {
  const navigate = useNavigate();
  const navigateToMoviesScreen = () => {
    navigate("/movies");
  };
  return (
    <button
      onClick={navigateToMoviesScreen}
      className="text-white ml-4 rounded bg-lightred uppercase px-14 py-4"
    >
      Log in
    </button>
  );
};

export default LoginBtn;
