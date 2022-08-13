import React, { Component } from 'react'
import { connect } from 'react-redux'

class SanPhamRedux extends Component {
  render() {
    let {sanpham} = this.props
    return (
      <div className='card'>
        <img src={sanpham.hinhAnh} height={350} alt="..." />
        <div className="card-body">
          <h3>{sanpham.tenSP}</h3>
          <p>{sanpham.giaBan.toLocaleString()}$</p>
          <button className='btn btn-success' onClick={()=>{
            const action ={
              type: 'THEM_GIO_HANG',
              payload:{
                sanphamClick: sanpham
              }
            }
            this.props.dispatch(action)
          }}>Thêm giỏ hàng</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(SanPhamRedux)