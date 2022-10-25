import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Simple app (by Novikov Sergiy)",
    };
  }
  render() {
    return (
      <div>
        <h1 style={{ fontFamily: "Arial, sans-serif" }}>{this.state.title}</h1>
        <p>Lorem Ipsum</p>
      </div>
    );
  }
}

export default App;
