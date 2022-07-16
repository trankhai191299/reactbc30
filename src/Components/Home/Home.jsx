import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import Inform from './Inform'
import Navbar from './Navbar'

export default class Home extends Component {
  render() {
    return (
      <div>
        <header>
            <Header />
        </header>
        
        <section className='d-flex'>
            <div className='w-25'>
                <Navbar />
            </div>
            <div className='w-75'>
                <Inform />
            </div>
        </section>
        <footer>
            <Footer />
        </footer>
      </div>
    )
  }
}
