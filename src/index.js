import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const container = document.getElementById("app");
if (process.env.NODE_ENV !== "production") {
  console.log("Yeah, dev mode on");
}
const root = createRoot(container);
root.render(<App />);
