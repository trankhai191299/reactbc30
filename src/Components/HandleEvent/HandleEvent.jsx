import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = (e) => {
    alert("Hello World!");
  };
  showMessage = (name) => {
    alert("Hello " + name);
  };
  render() {
    return (
      <div className="container">
        <h3>HandleEvent</h3>
        <button
          className="btn btn-primary me-3"
          onClick={(e) => {
            // alert('hello world')
            this.showMessage("Tran Khai");
          }}
        >
          Click
        </button>
        <button className="btn btn-success ms-3" onClick={this.handleClick}>
          Click
        </button>
        <hr />
        <h3>Handle event change</h3>
        <input
          type="text"
          className="form-control w-25"
          onChange={(e) => {
            var targetInput = e.target;
            console.log("Value", targetInput.value);
          }}
        />
      </div>
    );
  }
}
