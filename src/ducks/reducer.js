const initialState = {
    products: [],
    cart: [],
}

const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';
const UPDATE_CART = 'UPADTE_CART';
const RESET_INPUT = 'RESET_INPUT';

function reducer( state = initialState, action){
    console.log('REDUCER HIT: Action ->', action );
    switch( action.type ){
        case UPDATE_PRODUCTS:
            return Object.assign({}, state, { products: action.payload });

        case UPDATE_CART:
            return Object.assign({}, state, { cart: action.payload });

        case RESET_INPUT:
            return initialState

            default: return state
    }
}

export function updateProducts (product) {
    return {
        type: UPDATE_PRODUCTS,
        payload: product
    }
}

export function updateCart (cart) {
    return {
        type: UPDATE_CART,
        payload: cart
    }
}

export default reducer;