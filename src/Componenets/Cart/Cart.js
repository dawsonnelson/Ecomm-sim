import React, {Component} from 'react'
import './Cart.css'
import axios from 'axios';
import {updateCart} from '../../ducks/reducer'
import {updateProducts} from '../../ducks/reducer'
import {connect} from 'react-redux'

class Cart extends Component{
    constructor(props){
        super(props);

        this.state = {
            products: [],
        }
    }

    componentDidMount(){

        console.log(this.props.cart)
        let cart = this.props.cart
        console.log(cart)
        axios.post(`/api/getCart`, {cart})
        .then(res=>{
            console.log(res.data)

            this.setState({
                products: res.data
            })

            console.log(this.state)

        })
    }

    renderItems(){
        return this.state.products.map((product) => { 
            return(
                <div className = 'item'>
                    <img src={product.image} alt=""/>
                    <span>{product.name}</span>
                </div>
            )
        })
    }

    render(){
        return(
            <div className = 'cart-area'>
                <div className = 'nav-bar-cart'>
                    <span className = 'title'>Hi</span>
                </div>

                <div className = 'cart-body'>
                    {this.renderItems()}
                </div>
            </div>
        )
    }

}

function mapStateToProps(duckState) {
    return {
        products: duckState.products,
        cart: duckState.cart,
    }
}
 


export default connect(mapStateToProps, {
    updateProducts, 
    updateCart
})(Cart);