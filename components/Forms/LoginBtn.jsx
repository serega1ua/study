import React from "react";
import useRoute from "../../hooks/useRoute";
const LoginBtn = () => {
  const navigateToPage = useRoute("/movies");
  return (
    <button
      onClick={navigateToPage}
      className="text-white ml-4 rounded bg-lightred uppercase px-14 py-4"
    >
      Log in
    </button>
  );
};

export default LoginBtn;
