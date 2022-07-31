import React, { Component } from 'react'
import FormProduct from './FormProduct'
import TableProduct from './TableProduct'

export default class ProductManagement extends Component {
  state = {
    arrProduct:[
      {id:'1',name:'product 1',price:'1000',description:'product 1 desc',img:'https://picsum.photos/200/200',productType:'mobile'},
      {id:'2',name:'product 2',price:'1000',description:'product 2 desc',img:'https://picsum.photos/200/200',productType:'tablet'}
    ],
    productEdit:{
      id: "",
      name: "",
      price: "",
      img: "",
      productType: "mobile",
      description: "",
    }
  }
  createProduct = (newProduct) => {
    let arrProductUpdate = this.state.arrProduct;
    arrProductUpdate.push(newProduct);
    //this.setState
    this.setState({
      arrProduct:arrProductUpdate
    })
  }
  deleteProduct = (idClick) =>{
    let arrProductUpdate = this.state.arrProduct;
    // let indexDel = arrProductUpdate.findIndex(p => p.id == idClick)
    // if(indexDel !== -1){
    //   arrProductUpdate.splice(indexDel,1)
    // }
    arrProductUpdate = arrProductUpdate.filter(p => p.id !== idClick)
    this.setState({
      arrProduct : arrProductUpdate
    })
  }
  editProduct = (prodEdit) => {
    this.setState({
      productEdit:prodEdit
    })
  }
  //CRUD
  render() {
    return (
      <div className='container'>
        <h3>ProductManagement</h3>
        <FormProduct createProd = {this.createProduct} prodEdit = {this.state.productEdit}/>
        <TableProduct arrProd = {this.state.arrProduct} deleteProduct = {this.deleteProduct} editProduct={this.editProduct}/>
      </div>
    )
  }
}
