import React, { Component } from 'react'
import { connect } from 'react-redux'

class GioHang extends Component {
  renderGioHang = () =>{
    let {gioHang} = this.props.demoGioHangReducer
    return gioHang.map((sp,index)=>{
      return  <tr key={index}>
                <td>{sp.maSP}</td>
                <td><img src={sp.hinhAnh} alt="..." width={150}/></td>
                <td>{sp.tenSP}</td>
                <td>
                  <button className='btn btn-success mx-2' onClick={()=>{
                    const action = {
                      type:'TANG_GIAM_SL',
                      payload :{
                        maSP : sp.maSP,
                        soLuong: 1
                      }
                    }
                    this.props.dispatch(action)
                  }}>+</button>
                  {sp.soLuong}
                  <button className='btn btn-success mx-2' onClick={()=>{
                    const action = {
                      type:'TANG_GIAM_SL',
                      payload :{
                        maSP : sp.maSP,
                        soLuong: -1
                      }
                    }
                    this.props.dispatch(action)
                  }}>-</button>
                </td>
                <td>{sp.giaBan.toLocaleString()}$</td>
                <td>{(sp.giaBan * sp.soLuong).toLocaleString()}$</td>
                <td>
                  <button className='btn btn-danger mx-2' onClick={()=>{
                    const action = {
                      type:'XOA_GIO_HANG',
                      payload:{
                        maSPClick : sp.maSP
                      }
                    }
                    this.props.dispatch(action)
                  }}>Xóa</button>
                </td>
              </tr>
    })
  }

  render() {
    return (
      <div>
        <h3>Giỏ hàng</h3>
        <table className='table mt-3'>
          <thead>
            <tr>
              <th>Mã sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Tên sản phẩm</th>
              <th>Số lượng</th>
              <th>Giá bán</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderGioHang()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  demoGioHangReducer:state.demoGioHangReducer
})



export default connect(mapStateToProps)(GioHang)