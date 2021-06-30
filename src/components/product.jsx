import React, { Component } from 'react'
import { StoreConsumer } from '../context'
import { Link } from 'react-router-dom'

export default class Product extends Component {

    render() {
        const {id, title, img, price, inCart} = this.props.product

        return (
            <div className="col-9 col-md-6 col-lg-3 bg-dark">
                <div className="product card">
                <StoreConsumer>
                    {context => (
                    <div className=" bg-dark text-light">
                        <div className="img-container" onClick={()=>context.handleDetail(id)}>
                            <Link to="/details">
                                <img src={img} alt="product" className="card-img-top"/>
                            </Link>                        
                            <button className="mybtn cart-btn" disabled={inCart?true:false} onClick={()=>{context.addToCart(id)}}>
                                {inCart?(<p className="" disabled>in Cart</p>):(<i className="fas fa-cart-plus"/>)}
                            </button>
                        </div>                        
                        <div className="card-footer d-flex justify-content-between">
                            <p className="align-self-center mb-0">{title}</p>
                            <h3 className="text-blue font-italic mb-0">
                                <span className="mr-1">$</span>
                                {price}
                            </h3>
                        </div>
                    </div>
                    )}                
                </StoreConsumer>
                </div> 
                
            </div>
        )
    }
}
