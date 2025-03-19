import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// reducer
import { useGlobalContext } from '../context/useCartContext';
import { ADD } from '../features/cartActions';

const ProductCard = (card) => {
    const { name, description, price, img, id } = card;
    const { state, dispatch } = useGlobalContext();
    // наличие товара в корзине 
    const [isAdded, setIsAdded] = useState(false);
    useEffect(() => {
        const current = state.cart.find((item) => item.id === id);
        if(current){
         setIsAdded(true);
        }
        return;
    }, [state.cart]);


    const addToCart = () => {
        if (!isAdded) {
            setIsAdded(!isAdded);
            dispatch({ type: ADD, payload: id });
        }
        return;
    }

    return (
        <div className='text-gray-800 border-2 border-orange-300 shadow-2xl shadow-orange-500 p-10 pt-12 flex flex-col justify-between 
        relative rounded-lg w-[300px] h-[450px] cursor-pointer group'>
           {/* добавление в корзину  */}
            <button className={`absolute top-3 right-5 border-b text-orange-500 ease-in transition-transform duration-200 ${!isAdded ? 'hover:translate-x-2  hover:rotate-3 font-semibold'
                : 'shadow-md shadow-orange-500 bg-orange-400 text-white px-[3px]'}`}
                 onClick={addToCart}>
                {!isAdded ? 'В корзину' : 'В корзине'}
            </button>
            {/* инфо о товаре  */}
            <img src={img} className='h-[180px] rounded-md w-[150px] group-hover:scale-105 transition-transform' alt="product image" />
            <h3 className='font-bold md:text-xl'>{name}</h3>
            <p className='font-medium'>{description}</p>
            <div className='flex justify-between mt-3'>
                <i className='text-orange-500 font-semibold'>{price} руб.</i>
            
                <Link to={`/${id}`} className='text-orange-600 hover:text-orange-400 transition-colors duration-200 border-b-2'>узнать больше</Link>
            </div>
        </div>
    );
}

export default ProductCard;
