import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'
const ProductContext = React.createContext();

class StoreProvider extends Component {
        state = {
        cart: [],
        products: [],
        detailProduct,
        modalOpen: false,
        modalProduct: detailProduct,
        cartTotal:0
    }

    componentDidMount(){
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const tempItem = {...item};
            tempProducts = [...tempProducts, tempItem]
        })
        this.setState(()=> { return { products: tempProducts }
        })
    }
    getItem = (id) => {
        return this.state.products.find(item => item.id === id)
    }
    handleDetail = (id) => {
        const product = this.getItem(id)
        this.setState(() => { return { detailProduct:product }
        })
    }
    addToCart = (id) => {
        let tempProducts  = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const prod = tempProducts[index]
        prod.inCart = true;
        prod.count = 1;
        const price = prod.price;
        prod.total = price;
        this.setState(()=>{
            return {products: tempProducts,
                    cart: [...this.state.cart, prod]}
        },()=>{this.totalize()})        
    }
    openModal = (id) => {
        const prod = this.getItem(id)
        this.setState(()=>{
            return {
                modalProduct: prod,
                modalOpen:true
            }
        })
    }
    closeModal = () => {
        console.log("closing");
        this.setState(()=>{
            return {modalOpen: false}
        })
        console.log(this.state);
    }

    add = (id) => {
        let tempProducts  = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const prod = tempProducts[index]        
        prod.count += 1;
        const price = prod.price;
        prod.total = price*prod.count;
        const tempCart = [...this.state.cart, prod]
        this.setState(()=>{
            return {products: tempProducts,
                    cart: [...new Set(tempCart)]}
        })
        this.totalize()
    }

    sub = (id) => {
        let tempProducts  = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const prod = tempProducts[index]        
        prod.count -= 1;
        const price = prod.price;
        prod.total = price*prod.count;
        
        if(prod.count<1){
            const newCart = this.state.cart.filter(item => item.id !== prod.id)
            prod.inCart = false
            this.setState(()=>{
                return{
                    products: tempProducts,
                    cart: [...newCart]
                }
            })
            this.totalize()
        }else{
       
            const tempCart = [...this.state.cart, prod]
            this.setState(()=>{
                return {products: tempProducts,
                        cart: [...new Set(tempCart)]}
            })
            this.totalize()
        }
    }

    clear = () => {

    }

    totalize = () => {
       
        var total=0;
        this.state.cart.map(i => (total+=i.total))
       
        this.setState(()=>{
            return {
                cartTotal: total
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value ={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                add: this.add,
                sub: this.sub,
                clear: this.clear,
                totalize: this.totalize
            }}>
                {this.props.children} 
            </ProductContext.Provider>
        )
    }
}
const StoreConsumer = ProductContext.Consumer;

export {StoreProvider, StoreConsumer}