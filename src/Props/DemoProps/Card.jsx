import React, { Component } from "react";

export default class Card extends Component {
  render() {
    /*
        So sánh this.state và this.props
        + chung: thuộc tính có sẵn của react để binding dữ liệu
        + state: quản lý các giá trị thay đổi trên giao diện + gán lại giá trị mới qua state
        + props: nhận giá trị từ component cha và ko đc gán lại giá trị
    */
        let {tenSP,gia} = this.props
    console.log(this.props)
    return (
        
      <div className="card text-white bg-dark">
        <img className="card-img-top" src="https://picsum.photos/200/200" alt="Title" />
        <div className="card-body">
          <h4 className="card-title">{tenSP}</h4>
          <p className="card-text">{gia}</p>
        </div>
      </div>
    );
  }
}
