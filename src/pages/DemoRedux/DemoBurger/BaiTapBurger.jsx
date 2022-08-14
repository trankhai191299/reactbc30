import React, { Component } from 'react'
import { connect } from 'react-redux'
import Burger from './Burger'
import Menu from './Menu'
import './BaiTapBurger.css'
class BaiTapBurger extends Component {
  render() {
    return (
      <div className='container'>
        <h3>Bài tập burger</h3>
        <div className="row">
            <div className="col-6">
                <Burger/>
            </div>
            <div className="col-6">
                <Menu/>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(BaiTapBurger)