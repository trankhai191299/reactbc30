import React, { Component } from 'react'

export default class BaiTapState extends Component {

    state = {
        imgSrc: "./img/products/black-car.jpg"
    }

  render() {
    return (
        <div className='container'>
            <h3>Bài tập 1: Chọn màu xe</h3>
            <div className="row">
                <div className="col-6">
                    <img className='w-100' src={this.state.imgSrc} alt="..." />
                </div>
                <div className="col-6">
                    <button className='btn btn-danger m-2' onClick={()=>{
                        this.setState({
                            imgSrc:"./img/products/red-car.jpg"
                        })
                    }}>Red</button>
                    <button className='btn btn-dark m-2' onClick={()=>{
                        this.setState({
                            imgSrc:"./img/products/black-car.jpg"
                        })
                    }}>Black</button>
                    <button className='btn btn-secondary m-2' onClick={()=>{
                        this.setState({
                            imgSrc:"./img/products/silver-car.jpg"
                        })
                    }}>Silver</button>
                    <button className='btn btn-default m-2 border' onClick={()=>{
                        this.setState({
                            imgSrc:"./img/products/steel-car.jpg"
                        })
                    }}>Steel</button>
                </div>
            </div>
        </div>
    )
  }
}
