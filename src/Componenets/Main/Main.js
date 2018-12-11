import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import {updateCart} from '../../ducks/reducer'
import {updateProducts} from '../../ducks/reducer'
import {connect} from 'react-redux'
import './Main.css'


class Main extends Component{
    constructor(props){
        super(props);

        this.state = {
            products: [],
            cart: [],
        }

        this.handleAdd = this.handleAdd.bind(this)

    }

    componentDidMount(){
        axios.get(`/api/getAll`)
        .then(res=>{
            console.log(res.data)
            this.props.updateProducts(res.data)
            this.setState({
                products: res.data
            })
            console.log(this.props.products)
        })
    }

    handleAdd(i){
        console.log(i)
        this.state.cart.push(i);
        this.props.cart.push(i);
        console.log(this.state.cart)
        console.log(this.props.cart)
        let id = this.state.cart
        console.log(this.state.cart)
        axios.post('/api/setCart', {id}).then(
            this.setState({
                cart: []
            })
        )
        // console.log(this.state)
    }


    renderItems(){
        return this.state.products.map((product) =>{
            return(
                <div className = 'item'>
                    <img src={product.image} alt=""/>
                    <span>{product.name}</span>
                    <div className = 'add-to-button' onClick = {() => this.handleAdd(product.id)}>Add To cart</div>
                </div>
            )
        })
    }


    render(){
        return(
            <div className = 'area'>
                <div className = 'nav-bar'>
                    <span className = 'title'>Hi</span>
                    <Link to ='/Cart' className = 'to-cart'>Cart</Link>
                </div>
        
                <div className = 'body'>
                    {/* <span>body</span> */}
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
})(Main);