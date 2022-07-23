import React, { Component } from "react";

const data = [
  { id: 1, name: "product1", price: 1000, img: "https://i.pravatar.cc?u=1" },
  { id: 2, name: "product2", price: 2000, img: "https://i.pravatar.cc?u=2" },
  { id: 3, name: "product3", price: 3000, img: "https://i.pravatar.cc?u=3" },
];

export default class RenderWithMap extends Component {
  renderProduct = () => {
    //cach 1: for
    // let jsxArr = [];
    // for (let index of data){
    //     let {id,name,price,img} = index
    //     let tr = <tr key={id}>
    //         <td>{id}</td>
    //         <td>{name}</td>
    //         <td>{price}</td>
    //         <td><img src={img} alt="..." width={60}/></td>
    //     </tr>
    //     jsxArr.push(tr)
    // }
    // return jsxArr;
    //cach 2: map
    return data.map((prod, index) => {
      return (
        <tr key={index}>
          <td>{prod.id}</td>
          <td>{prod.name}</td>
          <td>{prod.price}</td>
          <td>
            <img src={prod.img} alt="..." width={60} />
          </td>
        </tr>
      );
    });
    // return jsxArr
  };
  renderCardProduct = () => {
    return data.map((prod,index)=> {
        return  <div className="col-4" key={index}>
            <div className="card">
                <img src={prod.img} alt="..."/>
                <div className="card-body">
                    <p>{prod.name}</p>
                    <p>{prod.price}</p>
                    <button className="btn btn-success">Add to cart</button>
                </div>
            </div>
        </div>
        
    })
  }
  render() {
    return (
      <div className="container">
        <h3>Table Product</h3>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>img</th>
            </tr>
          </thead>
          <tbody>{this.renderProduct()}</tbody>
        </table>
        <hr />
        <h3>Product List</h3>
        <div className="row">
            {this.renderCardProduct()}
        </div>
      </div>
    );
  }
}
