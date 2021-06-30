import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark px-sm-5 d-flex justify-content-between">
              <Link to="/">
                  <img src="logo.png" alt="home" className="navbar-brand" width="50"></img>
                
              </Link>  
                
                <Link to="/cart" className="ml-auto mr-1">
                    <button className="mybtn text-white">
                        <i className="fas fa-cart-plus text-white"></i>
                    carrito
                    </button>
                </Link>      
            </nav>
        )
    }
}
