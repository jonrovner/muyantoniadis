import React, { Component } from 'react'
import Product from './product'
import { StoreConsumer } from '../context'

export default class ProducList extends Component {
    render() {
        return (
            <div className="container-fluid bg-dark pb-10">
               <h1 className="text-white mb-3 my-5">Catálogo</h1>
               
               <div className="container">
                   <div className="row justify-content-center">
                <StoreConsumer>
                    {context =>
                        context.products.map(product=>{
                            return <Product key={product.id} product={product}/>
                        })}    
                </StoreConsumer>
                </div>
                </div>        
            </div>
        )
    }
}
      