import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {Provider} from "react-redux";
import {store} from "./app/store";

function App() {
  return  (
      <Provider store={store}>
        <div className="App bg-gray">

        </div>
      </Provider>
     );
}

export default App;
