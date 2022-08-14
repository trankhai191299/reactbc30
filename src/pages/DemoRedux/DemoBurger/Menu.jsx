import React, { Component } from 'react'
import { connect } from 'react-redux'

class Menu extends Component {
    
    render() {
    let {burger} = this.props.ingredient
    return (
      <div>
        <h3>Menu</h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>Thức ăn</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                </tr>
            </thead>
            <tbody>
                {burger.map((item,index)=>{
                    return  <tr key={index}>
                                <td>{item.name}</td>
                                <td>
                                    <button className='btn btn-danger mx-2' onClick={()=>{
                                        const action = {
                                            type : "TANG_GIAM_SO_LUONG",
                                            payload : {
                                                name : item.name,
                                                quantity : 1
                                            }
                                        }
                                        this.props.dispatch(action)
                                    }}>+</button>
                                    {item.quantity}
                                    <button className='btn btn-danger mx-2' onClick={()=>{
                                        const action = {
                                            type : "TANG_GIAM_SO_LUONG",
                                            payload : {
                                                name : item.name,
                                                quantity : -1
                                            }
                                        }
                                        this.props.dispatch(action)
                                    }}>-</button>
                                </td>
                                <td>{item.quantity * item.price} VND</td>
                            </tr>
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={3} align={"right"}>
                        Thành tiền: {burger.reduce((tt,item)=>{
                            return tt + item.quantity * item.price
                        },0)}
                    </td>
                </tr>
            </tfoot>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    ingredient : state.baitapBurgerReducer
})


export default connect(mapStateToProps)(Menu)