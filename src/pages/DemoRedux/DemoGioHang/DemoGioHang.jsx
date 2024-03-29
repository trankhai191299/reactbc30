import React, { Component } from 'react'
import { connect } from 'react-redux'
import DanhSachSanPhamRedux from './DanhSachSanPhamRedux'
import GioHang from './GioHang'

class DemoGioHang extends Component {
  render() {
    return (
      <div className='container my-4'>
        <h3 className='text-center'>Bài tập giỏ hàng</h3>
        <GioHang/>
        <DanhSachSanPhamRedux/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})



export default connect(mapStateToProps)(DemoGioHang)
