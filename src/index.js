import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store/index.js";
import Movies from "./pages/Movies/Movies";
import Login from "./pages/Login/Login";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import MainContextWrapper from "./context/MainContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ErrorBoundary>
      <Provider store={store}>
        <MainContextWrapper>
          <Router>
            <React.StrictMode>
              <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<Login />} />
                <Route path="/movies" element={<Movies />} />
              </Routes>
            </React.StrictMode>
          </Router>
        </MainContextWrapper>
      </Provider>
    </ErrorBoundary>
);

