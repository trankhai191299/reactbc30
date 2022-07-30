import React, { Component } from 'react'
import {NavLink} from "react-router-dom";
export default class Page404 extends Component {
  render() {
    return (
      <div className='container'>
        <h3 className='text-danger text-center'>
            Không tìm thấy trang chủ!
            đề nghị bạn trở về <NavLink to={''}>Trang Chủ</NavLink>!
        </h3>
      </div>
    )
  }
}
