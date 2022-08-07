import React, { Component,PureComponent } from 'react'
/*
    PureComponent ko có lifecycle, tự xử lý vs props (props vs 
    -primitive value:
        num, string, boolean, undefined, null
    -reference value: arr, obj => tạo địa chỉ mới và clone dữ liệu ra = spread operator    
        )
*/
export default class Child extends PureComponent {
    constructor(props){
        super(props);
        this.state = {

        }
        console.log('constructor child')
    }
    static getDerivedStateFromProps(newProps,currentState){
        console.log('getDerivedStateFromProps child')
        return null
    }
    // shouldComponentUpdate(newProps,newState){
    //     //state number đổi => return true, <> thì return false
    //     console.log('shouldComponentUpdate child')
    //     if(this.props.number !== newProps.number){
    //         return true
    //     }
    //     return false
    // }
    render() {
        console.log('render child')
        let {number,product} = this.props
    return (
        <div className='bg-dark p-5 display-4 text-light text-center'>
            <h3>Number child: {number}</h3>
            Child
            <h3>Child product: {product.name} - like: {product.like}</h3>
        </div>
    )
    }
    componentDidMount(){
    console.log('componentDidMount child')
    }
    componentDidUpdate(prevProps,prevState){
        //Chạy mỗi lần state thay đổi
        //Hạn chê setState trong này, nêu có thì sài if
        console.log("componentDidUpdate")
    }
}
