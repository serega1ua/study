import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import {Provider} from "react-redux";
import { store } from "./app/store/index.js";
import Movies from "./pages/Movies/Movies";
import Login from "./pages/Login/Login";
import SearchedMovies from "./pages/SearchedMovies/SearchedMovies";
import {
  Route,
  Routes,
  BrowserRouter as Router,
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import MainContextWrapper from "./context/MainContext";
import PageNotFound from "./pages/404/PageNotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      {/*<Route path="/" element={<Navigate to="/login" replace />} />*/}
      <Route
          path="/"
          element={<Navigate to="/search" replace />}
      />
      <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound/>} />
      <Route
          path="/search"
          loader={async() => {
            const res = await fetch("http://localhost:4000/movies?limit=13&search=''", {
              headers: {
                'Access-Control-Allow-Credentials' : true,
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods':'GET',
                'Access-Control-Allow-Headers':'application/json',
              },
            });
            const data = await res.json();
            return data.data;
          }}
          element={<Movies />} />

        <Route
            path="/search/:searchQuery"
            element={<SearchedMovies/>} />
    </Route>
));
root.render(
    <ErrorBoundary>
        <MainContextWrapper>
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </MainContextWrapper>
    </ErrorBoundary>
);

