import React, { Component } from "react";

export default class FormProduct extends Component {
    state = {
      productInfo: {
        id: "",
        name: "",
        price: "",
        img: "",
        productType: "mobile",
        description: "",
      },
      errors: {
        id: "",
        name: "",
        price: "",
        img: "",
        description: "",
      },
    };


  
  handleChange = (e) => {
    let { id, value } = e.target;
    let dataType = e.target.getAttribute('data-type')
    // this.setState({
    //   [id]: value,
    // });
    // Xu ly product info
    let newValue = {...this.state.productInfo};
    newValue[id] = value;
    // Xu ly loi
    let newErrors = {...this.state.errors}
    let errMess = '';
    if(value.trim() === ''){
      errMess = id + " không được bỏ trống"
    }else{
      // Loi dinh dang
      if(dataType ==='number'){
        let regexNum = /^\d+$/;
        if(!regexNum.test(value)){
          errMess = id + " phải là số"
        }
      }
    }
    newErrors[id] = errMess
    //setState
    this.setState({
      productInfo : newValue,
      errors : newErrors,
    })
  };
  handleSubmit = (e) => {
    e.preventDefault()
    //check trc khi submit du lieu
    let valid = true;
    let {errors,productInfo} = this.state;
    //check error 
    for (let key in errors){
      if(errors[key]!==''){
        valid = false
        break;
      }
    }
    //check productInfo
    for (let key in productInfo){
      if(productInfo[key].trim() === ''){
        errors[key] = key + ' không được bỏ trống'
        valid = false
        
      }
    }
    if(!valid){
      this.setState({
        errors : errors
      })
      alert('Dữ liệu không hợp lệ')
      return;
    }
    // alert('Submited')
    this.props.createProd(productInfo)
  }
  // static getDerivedStateFromProps(newProps,currentState){
  //     //lấy props
  //     if(newProps.productEdit.id !== currentState.productInfo.id){
  //       currentState.productInfo = newProps.productEdit
  //       return currentState
  //     }
      
  //     return null
    
  //   }
  componentWillReceiveProps(newProps) {
    //Khi bấm nút chỉnh sửa lấy props gán vào state => giao diện render ra từ state
    this.setState({
        productInfo: newProps.productEdit
    })
  }
  render() {
    let {id,name,price,img,productType,description} = this.state.productInfo
    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <div
          className="card-header bg-dark text-warning"
          style={{ fontSize: 15, fontWeight: "bold" }}
        >
          Product Info
        </div>
        <div className="card-body row">
          <div className="col-6">
            <div className="form-group">
              <p>Id</p>
              <input
              value={id}
                type="text"
                className="form-control"
                id="id"
                name="id"
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.errors.id}</p>
            </div>
            <div className="form-group">
              <p>name</p>
              <input
              value={name}
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.errors.name}</p>
            </div>
            <div className="form-group">
              <p>price</p>
              <input
              value={price}
                data-type="number"
                type="text"
                className="form-control"
                id="price"
                name="price"
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.errors.price}</p>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <p>img link</p>
              <input
              value={img}
                type="text"
                className="form-control"
                id="img"
                name="img"
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.errors.img}</p>
            </div>
            <div className="form-group">
              <p>Product Type</p>
              <select
              value={productType}
                className="form-control"
                name="productType"
                id="productType"
                onChange={this.handleChange}
              >
                <option>mobile</option>
                <option>tablet</option>
                <option>laptop</option>
              </select>
            </div>
            <div className="form-group">
              <p>Product description</p>
              <textarea
              value={description}
                name="description"
                id="description"
                className="form-control"
                rows="3"
                onChange={this.handleChange}
              ></textarea>
              <p className="text-danger">{this.state.errors.description}</p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-success mx-2">Create</button>
          <button className="btn btn-primary mx-2" onClick={()=>{
            this.props.updateProduct(this.state.productInfo)
          }}>Update</button>
        </div>
      </form>
    );
  }
}
