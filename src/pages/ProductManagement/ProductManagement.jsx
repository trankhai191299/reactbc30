import React, { Component } from 'react'
import FormProduct from './FormProduct'
import TableProduct from './TableProduct'
import axios from 'axios'
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
  updateProduct = (productUpdate) => {
    //Lấy ra dữ liệu trong mảng (prodUpdate) 
    let prodUpdate = this.state.arrProduct.find(pro => pro.id === productUpdate.id);
    if(prodUpdate){
        for(let key in prodUpdate){
            prodUpdate[key] = productUpdate[key];
        }
    }
    //Sau khi thay đổi thì set lại state
    this.setState({
      arrProduct:this.state.arrProduct
    })

    // console.log(productUpdate);
  }
  //CRUD
  render() {
    return (
      <div className='container'>
        <h3>ProductManagement</h3>
        <FormProduct createProd = {this.createProduct} productEdit = {this.state.productEdit} updateProduct = {this.updateProduct}/>
        <TableProduct arrProd = {this.state.arrProduct} deleteProduct = {this.deleteProduct} editProduct={this.editProduct}/>
      </div>
    )
  }
  // componentDidMount(){
  //   let promise = axios({
  //     url:"http://svcy.myclass.vn/api/Product/GetAll",
  //     method:"GET",
  //   })
  //   promise.then(result =>{
  //     this.setState({
  //       arrProduct: result.data
  //     })
  //   })
  //   promise.catch(error=>{
  //     console.log(error)
  //   })
  // }
}
