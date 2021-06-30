import React, { Component } from 'react'
import  PayButton  from './paypalbtn.jsx'
import { Link } from 'react-router-dom'
import { StoreConsumer } from '../context'

export default class Cart extends Component {
    render() {
        return (
            <section>
            <StoreConsumer>
            {context => {
                const {cart, cartTotal} = context                
                if(cart.length>0){
                    return (
                     <React.Fragment>
                    <div className="bg-dark text-light">   
                        <div className="mt-3 mb-5 bg-dark text-light">
                            <h1>Su compra</h1>
                        </div>
                    <div className="container-fluid">
                        {cart.map(item=>{
                            if(item.count>0){
                            return(      
                            <div key={item.id} className="row d-flex align-content-center justify-content-between mx-2 my-2 border-light">
                                <div className="col-2">
                                    <img className="img-fluid"src={item.img} alt="product" height="75"/>
                                </div>
                                <div className="col-4 itemTitle d-flex flex-column align-content-center justify-content-center">
                                    <h5>{item.title}</h5>
                                </div>
                                
                                <div className="col-2 controls">
                                    <div onClick={()=>context.add(item.id)}>+</div>
                                    <div>{item.count}</div>
                                    <div onClick={()=>context.sub(item.id)}>-</div>
                                </div>

                                
                                <p className="col-2 d-flex flex-column align-content-center justify-content-center">$ {item.total}.-</p>
                                
                                
                                </div>
                            )}else{return null
                                }
                            })
                        }
                    
                    </div>
                    <div>
                        <h3>

                        Total: $ {cartTotal} .-

                        </h3>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                    <Link to="/products">
                        <button className="mybtn">seguir comprando</button>
                    </Link>

                    </div>
                    <div className="d-flex align-items-center justify-content-center mt-5">

                    <PayButton total={cartTotal}/>
                    </div>
                    </div>
                    </React.Fragment>)}
                 else{
                        return(
                                    <React.Fragment>
                                    <h3>Your cart is empty</h3>
                                    </React.Fragment>
                                ) 
                

            }
            }}
        </StoreConsumer>
        

        </section>
        )
    }
}

