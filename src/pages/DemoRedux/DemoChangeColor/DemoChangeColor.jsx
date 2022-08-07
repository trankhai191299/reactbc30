import React, { Component } from 'react'
import { connect } from 'react-redux'

export class DemoChangeColor extends Component {
    changeColor = (color) =>{
        const action ={
            type: 'CHANGE_COLOR',
            imgCar: `./img/products/${color}-car.jpg`
        }
        this.props.dispatch(action)
    }
  render() {
    return (
        <div className='container'>
            <h3>Demo Change Color</h3>
            <div className="row">
                <div className="col-6">
                    <img src={this.props.imgCar} alt="..." width={500}/>
                </div>
                <div className="col-6">
                    <button className='btn btn-dark text-white me-2' onClick={()=>{
                        this.changeColor('black')
                        
                    }}>Black Car</button>
                    <button className='btn btn-danger text-white me-2' onClick={()=>{
                        this.changeColor('red')
                        
                    }}>Red Car</button>
                    <button className='btn btn-light text-dark me-2 border' onClick={()=>{
                        this.changeColor('silver')
                        
                    }}>Silver Car</button>
                    <button className='btn btn-secondary text-dark' onClick={()=>{
                        this.changeColor('steel')
                        
                    }}>Steel Car</button>
                </div>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
    imgCar: state.imgCar
})


export default connect(mapStateToProps)(DemoChangeColor)