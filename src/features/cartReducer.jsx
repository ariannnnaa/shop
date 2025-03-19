import { ADD, REMOVE, RESET, GET_TOTAL, AMOUNT, PRODUCT_QUANTITY } from './cartActions';
import data from '../data/data.json'

const local = JSON.parse(localStorage.getItem('shop'));

export const initialState = {
    cart: local?.cart || [],
    amount: 0,
    total: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case ADD:
            const product = data.find((item) => item.id === action.payload);
            product.amount = 1;
            localStorage.setItem('shop', JSON.stringify({...state, cart: [...state.cart,product]}));
            return {
                ...state,
                cart: [...state.cart, product],
            }
        case REMOVE:
            const filtered = state.cart.filter((item) => item.id !== action.payload);
            localStorage.setItem('shop', JSON.stringify({...state, cart: filtered}));
            return {
                ...state,
                cart: filtered
            }
        case PRODUCT_QUANTITY:
            const newCart = state.cart.map((item) =>{
           if(item.id === action.payload.id){
            // прибавлять и отнимать кол-во
              if(action.payload.sign === 'plus'){
                item.amount++;
              }else{
                item.amount--;
              }
           }
           return item;
            })  
            localStorage.setItem('shop', JSON.stringify({...state, cart: newCart}));
            return {
                ...state,
                cart: newCart
            }

        case AMOUNT:
            const quantity = state.cart.reduce((amount, item) => amount += item.amount, 0);
            localStorage.setItem('shop', JSON.stringify({...state, amount: quantity}));
            return {
                ...state,
                amount: quantity
            }
        case RESET:
            localStorage.removeItem('shop');
            return {
                ...state,
                cart: [],
                total: 0
            }
        case GET_TOTAL:
            const total = state.cart.reduce((sum, item) => sum += item.amount * item.price, 0);
            localStorage.setItem('shop', JSON.stringify({...state, total}));
            return {
                ...state,
                total
            }
    }

}

export default reducer;