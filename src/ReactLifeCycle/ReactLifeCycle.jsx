import React, { Component } from 'react'
import Child from './Child';

export default class ReactLifeCycle extends Component {
    constructor(props){
        super(props);
        this.state = {
            number : 1,
            like : 0,
            count: 60,
            product:{
                id:1,
                name:'product1',
                like:1,
            }
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(newProps,currentState){
        console.log('getDerivedStateFromProps')
        return null
    }
    shouldComponentUpdate(newProps,newState){
        console.log('shouldComponentUpdate')
        return true
    }
    render() {
        console.log('render')
    return (
        <div className='container mt-4'>
            <h3>{this.state.count}</h3>
            <h3>Number : {this.state.number}</h3>
            <button className='btn btn-success me-3' onClick={()=>{
                this.setState({
                    number:this.state.number + 1
                })
            }}>+</button>

            <h3>Like : {this.state.like}</h3>
            <button className='btn btn-danger me-3' onClick={()=>{
                // this.setState({
                //     like:this.state.like + 1
                // })
                let product = this.state.product
                product.like += 1
                this.setState({
                    product:{...product}
                })
            }}>+</button>
            
            <Child number = {this.state.number} product = {this.state.product}/>
        </div>
    )
    }
    timeout = {}
    componentDidMount(){
        //Chạy 1 lần khi render
        this.timeout = setInterval(()=>{
            this.setState({
                count:this.state.count - 1
            })
            console.log(this.state.count)
        },1000)
        
    console.log('componentDidMount')
    }
    componentWillUnmount(){
        clearInterval(this.timeout)
    }
}
