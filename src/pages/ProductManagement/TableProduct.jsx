import React, { Component } from 'react'

export default class TableProduct extends Component {
  render() {
    return (
      <table className='table'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Image</th>
                <th>name</th>
                <th>price</th>
                <th>Type</th>
                <th>Decription</th>
                <th>

                </th>
            </tr>
        </thead>
        <tbody>
            {/*  */}
            {this.props.arrProd.map((prod,index)=>{
              return <tr key = {index}>
              <td>{prod.id}</td>
              <td><img width={50} src={prod.img} alt="..." /></td>
              <td>{prod.name}</td>
              <td>{prod.price}</td>
              <td>{prod.productType}</td>
              <td>{prod.description}</td>
              <td>
                  <button className='btn btn-danger mx-2' onClick={()=>{
                    this.props.deleteProduct(prod.id)
                  }}>Delete</button>
                  <button className='btn btn-primary mx-2' onClick={()=>{
                    this.props.editProduct(prod)
                  }}>Update</button>
              </td>
          </tr>
            })}
        </tbody>
      </table>
    )
  }
}
