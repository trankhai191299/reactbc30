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
            <tr>
                <td>1</td>
                <td><img src="https://picsum.photos/50/50" alt="..." /></td>
                <td>product 1</td>
                <td>1000$</td>
                <td>mobile</td>
                <td>Iphone XXX</td>
                <td>
                    <button className='btn btn-danger mx-2'>Delete</button>
                    <button className='btn btn-primary mx-2'>Update</button>
                </td>
            </tr>
        </tbody>
      </table>
    )
  }
}
