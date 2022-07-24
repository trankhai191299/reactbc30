import React, { Component } from "react";
import ExModal from "./ExModal";
import ExProductList from "./ExProductList";

export default class ExerciseCarStore extends Component {
  state = {
    modalState: {
      id: 1,
      name: "black car",
      img: "./img/products/black-car.jpg",
      price: 1000,
    },
  };

  render() {
    return (
      <div className="container">
        <h3>ExerciseCarStore</h3>
        <ExModal modalState={this.state.modalState}/>
        <ExProductList />
      </div>
    );
  }
}
