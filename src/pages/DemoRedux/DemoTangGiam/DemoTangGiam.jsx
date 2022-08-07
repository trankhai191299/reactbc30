import React, { Component } from 'react'
//ket noi redux
import { connect } from 'react-redux'
class DemoTangGiam extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h3>Demo tăng giảm số lượng</h3>
        <p>
            Number : {this.props.number}
        </p>
        <button className='btn btn-success me-2' onClick={()=>{
            const action = {
                type : 'TANG_SO_LUONG',
                newNumber : this.props.number + 1
            }
            //dùng hàm this.props.dispatch để gửi dữ liệu cho redux
            this.props.dispatch(action)
        }}>+</button>
        <button className='btn btn-primary' onClick={()=>{
            const action = {
                type: 'GIAM_SO_LUONG',
                newNumber : this.props.number - 1
            }
            this.props.dispatch(action)
        }}> - </button>
      </div>
    )
  }
}
const mapStateToProps = (rootReducer) => {
    return {
        number: rootReducer.number
    }
}
export default connect(mapStateToProps)(DemoTangGiam)