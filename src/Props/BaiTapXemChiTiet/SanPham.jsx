import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let {product,xemChiTiet} = this.props
    return (
      <div className="card">
        <img src={product.hinhAnh} alt="..." height={400} />
        <div className="card-body">
          <h3>{product.tenSP}</h3>
          <p>{product.giaBan.toLocaleString()} VND</p>
          <button
            className="btn btn-success"
            onClick={() => {
              xemChiTiet(product);
            }}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
