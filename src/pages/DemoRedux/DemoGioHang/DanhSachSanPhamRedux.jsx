import React, { Component } from 'react'
import { connect } from 'react-redux'
import SanPhamRedux from './SanPhamRedux'

class DanhSachSanPhamRedux extends Component {
  renderSp = () => {
    let {arrSP} = this.props.demoGioHangReducer
    return arrSP.map((sp,index)=>{
      return  <div className="col-4" key={index}>
                <SanPhamRedux sanpham = {sp}/>
              </div>
    })
  }
  render() {
    return (
      <div className='danh-sach-sp mt-5'>
        <h3>Danh sách vật phẩm</h3>
        <div className="row mt-3">
          {this.renderSp()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  demoGioHangReducer : state.demoGioHangReducer
})


export default connect(mapStateToProps)(DanhSachSanPhamRedux)