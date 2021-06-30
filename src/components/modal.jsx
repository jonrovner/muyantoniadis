import React, { Component } from 'react'
import { StoreConsumer } from '../context'
import { Link } from 'react-router-dom'

export default class Modal extends Component {
    render() {
        return (
            <StoreConsumer>
                {context => {
                    
                    const {modalOpen, closeModal} = context
                    const {img, title, price} = context.modalProduct
                    if(!modalOpen){
                        return null
                    }else
                    {return(
                    <div id="modal" className="modal">
                      <h3>Felicitaciones, agregaste a tu carrito...</h3>
                      <h1>{title}</h1>
                      <img src={img} alt="product" className="img-fluid px-8 mb-1" width="300"/>
                      <h3>Precio: ${price}</h3>
                      <Link to="/products">
                      <button className="mybtn" onClick={() => {closeModal()}}>seguir comprando</button>
                      </Link>
                      <br></br>
                      <Link to="/cart">
                       <button className="mybtn" onClick={() => {closeModal()}}>carrito</button>   
                      </Link>
                    </div>
                    
                    )}
                }}

          

            </StoreConsumer>
        )
    }
}
 