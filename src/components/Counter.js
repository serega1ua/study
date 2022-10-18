import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  }
  decrement() {
    this.setState((prevState) => ({
      counter: prevState.counter - 1
    }));
  }
  render() {
    return (
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1>{this.state.counter}</h1>
        <div style={{ display: "flex" }}>
          <button style={{ marginRight: "10px" }} onClick={this.increment}>
            Increment
          </button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default Counter;
