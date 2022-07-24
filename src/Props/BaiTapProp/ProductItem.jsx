import React, { Component } from 'react'

export default class ProductItem extends Component {
    
  render() {
    let {obProd} = this.props;
    return (
      <div className='card'>
        <img className='img-fluid' src={obProd.image} alt="..." />
        <div className="card-body">
            <p>{obProd.name}</p>
            <p>{obProd.price}$</p>
            <button className='btn bg-dark text-white'>Add to Cart</button>
        </div>
      </div>
    )
  }
}
