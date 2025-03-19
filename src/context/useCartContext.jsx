import { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from '../features/cartReducer';

const CartContext = createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}
const useGlobalContext = () => {
    return useContext(CartContext)
}

export { AppProvider, useGlobalContext }