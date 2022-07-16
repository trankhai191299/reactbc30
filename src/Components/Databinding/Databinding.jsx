import React, { Component } from 'react'

export default class Databinding extends Component {
    username = "Khaitran@gmail.com"
  
    showInfo(){
        <div>
            <img src="https://picsum.photos/200/200" />
            <p>Tên: {this.username}</p>
        </div>
    }
    
    render() {
    const hoten = "Khải Trần"
    return (
      <div>
        Databinding
        <p>Họ Tên: {hoten}</p>
    </div>
    )
  }
}
