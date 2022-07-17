import React, { Component } from 'react'
import "./style.css" //css ảnh hưởng toàn cục c1
import style from './StyleRender.module.css' //c2

export default class StyleRender extends Component {
  render() {
    return (
      <div>
        StyleRender
        <p className='color-red'>Hello</p>
        <p className={`${style['color-blue']} display-4`}>text-blue</p>
        <p style={{color:'green',padding:'15px',backgroundColor:'black'}}>text green</p>
    </div>
    )
  }
}
