import React, { Component } from 'react'
import { connect } from 'react-redux'
class Burger extends Component {
    renderSalad = () =>{
        let {burger} = this.props.ingredient
        let itemSalad = burger.find(item => item.name === 'salad')
        if(itemSalad){
            let arrJsx = []
            for (let i = 1; i <= itemSalad.quantity;i++){
                let divSalad = <div className="salad" key={i}></div>
                arrJsx.push(divSalad)
            }
            return arrJsx
        }
        return []
    }
    renderTopping = (name) =>{
        let {burger} = this.props.ingredient
        let itemTopping = burger.find(item => item.name === name)
        if(itemTopping){
            let arrJsx = []
            for (let i = 1; i <= itemTopping.quantity;i++){
                let divTopping = <div className={name} key={i}></div>
                arrJsx.push(divTopping)
            }
            return arrJsx
        }
        return []
    }
  render() {
    return (
      <div>
        <div className="breadTop"></div>
        {this.renderTopping('salad')}
        {this.renderTopping('cheese')}
        {this.renderTopping('beef')}
        
        {/* <div className="cheese"></div>
        <div className="beef"></div> */}
        <div className="breadBottom"></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    ingredient : state.baitapBurgerReducer
})


export default connect(mapStateToProps)(Burger)