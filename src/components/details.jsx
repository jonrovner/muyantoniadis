import React, { Component } from 'react'
import { StoreConsumer } from '../context'
import { Link } from 'react-router-dom'


export default class Details extends Component {
    render() {
        return (
            <StoreConsumer>
                {(contextObject) => {
                    const {id, title, price, img, company, info, inCart} = contextObject.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">

                                    <img src={img} className="img-fluid" alt="product" />

                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h3>Por Carolina {company}</h3>
                                    <p className="text-capitalize font-weight-bold mt-3 mb0">información</p>
                                    <p className="text-muted">
                                    {info}
                                    </p>
                                    
                                    <p>Precio: ${price}</p>
                                    

                            <div >
                            <Link to="/products"><button className="mybtn">Catálogo</button></Link>
                            <Link>
                            <button className="mybtn" disabled={inCart?true:false} onClick={()=>{
                                contextObject.addToCart(id)
                                contextObject.openModal(id)
                                }}>{inCart?"en carrito":"agregar"}</button></Link>
                            </div>
                                </div>
    

                            </div>
                            
                        </div>
                    )
                }}
            </StoreConsumer>
        )
    }
}
