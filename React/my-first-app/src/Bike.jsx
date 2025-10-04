import React, { Component, useState } from "react";

class Bike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      make: "Honda",
      model: "BCTPR22R",
      color: "Red",
    };
  }

  render() {
    return (
      <div>
        <h1>My Bike Details</h1>
        <p><strong>Make: </strong>{ this.state.make }</p>
        <p><strong>Model: </strong>{ this.state.model }</p>
        <p><strong>Color: </strong>{ this.state.color }</p>
        <button onClick={this.changeBikeColor}>Change Color</button>
      </div>
    );
  }

  changeBikeColor = () => {
    const newColor = this.state.color === "Red" ? "Blue" : "Red";
    this.setState({ color: newColor });
  };
}

export default Bike;
