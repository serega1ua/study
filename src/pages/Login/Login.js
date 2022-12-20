import React from "react";
import "./Login.css";
import LoginForm from "../../components/Forms/LoginForm";

const Login = () => {
  return (
    <div className="login-page">
      <LoginForm />
      <h1 className="text-lightred text-5xl">
        <span className="font-bold">netflix</span>roulette
      </h1>
    </div>
  );
};

export default Login;
