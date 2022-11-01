import React from "react";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import LoginBtn from "./LoginBtn";
import ResetBtn from "./ResetBtn";

const LoginForm = () => {
  return (
    <div className="bg-black px-20 pb-24 pt-16 rounded mb-14">
      <h1 className="text-white text-4xl mb-9 uppercase">Log in</h1>
      <div className="flex flex-col">
        <TextInput placeholder="Email:" label="USER ID*" type="email" />
        <PasswordInput label="PASSWORD*" type="password" />
      </div>
      <div className="flex justify-end mt-10">
        <ResetBtn />
        <LoginBtn />
      </div>
    </div>
  );
};

export default LoginForm;
