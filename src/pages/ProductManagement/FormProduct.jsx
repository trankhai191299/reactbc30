import React, { Component } from "react";

export default class FormProduct extends Component {
    state = {
            id:'',
            name:'',
            price:0,
            img:'',
            productType:'mobile',
            description:''
    }
    handleChange = (e)=>{
        let {id,value} = e.target;
        this.setState({
            [id]:value,
        })
        
      }
  render() {
    return (
      <form className="card">
        <div className="card-header bg-dark text-warning" style={{fontSize:15,fontWeight:"bold"}}>Product Info</div>
        <div className="card-body row">
          <div className="col-6">
            <div className="form-group">
              <p>Id</p>
              <input type="text" className="form-control" id="id" name="id" onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <p>name</p>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <p>price</p>
              <input
                type="text"
                className="form-control"
                id="price"
                name="price" 
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <p>img link</p>
              <input type="text" className="form-control" id="img" name="img" onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <p>Product Type</p>
              <select className="form-control" name="productType" id="productType" onChange={this.handleChange}>
                <option>mobile</option>
                <option>tablet</option>
                <option>laptop</option>
              </select>
            </div>
            <div className="form-group">
              <p>Product description</p>
              <textarea name="description" id="description" className="form-control" rows="3" onChange={this.handleChange}></textarea>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-success mx-2">Create</button>
          <button className="btn btn-primary mx-2">Update</button>
        </div>
      </form>
    );
  }
}
