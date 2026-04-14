import React, { Component } from "react";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    // task 2: init state with random lucky number
    this.state = {
      name: "Jordan",
      profession: "Web Developer",
      luckyNumber: Math.floor(Math.random() * 100) + 1
    };
  }

  // task 2: method to update state with new number
  generateNewNumber = () => {
    this.setState({
      luckyNumber:Math.floor(Math.random() * 100) + 1
    });
  };

  render() {
    return (
      <div>
        <h2>User Information</h2>
        <p>Name: {this.state.name}</p>
        <p>Profession: {this.state.profession}</p>
        <p>Your lucky number is: {this.state.luckyNumber}</p>
        <button onClick={this.generateNewNumber}>Generate New Lucky Number</button>
      </div>
    );
  }
}

export default UserInfo;
