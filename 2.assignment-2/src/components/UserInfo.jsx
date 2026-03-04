import React, { Component } from "react";

class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jordan",
      profession: "Web Developer",
      luckyNumber: Math.floor(Math.random() * 10) + 1,
    };
  }

  render() {
    return (
      <div>
        <h2>User Information</h2>
        <p>Name: {this.state.name}</p>
        <p>Profession: {this.state.profession}</p>
        <button onClick={this.props.handleClick}>Show Alert</button>
      </div>
    );
  }
}

export default UserInfo;
