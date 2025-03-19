import  { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form'
// reducer 
import { useGlobalContext } from '../context/useCartContext';
import { AMOUNT } from '../features/cartActions';
// значки 
import { FiShoppingCart } from "react-icons/fi";
import logo from '../assets/images/logo.png';

const Header = () => {
   const { state, dispatch } = useGlobalContext();
//    кол-во товаров в корзине 
useEffect(() => {
      dispatch({ type: AMOUNT });
}, [state.cart]);

   return (
      <div className='p-3 mx-auto container '>
         <div className='flex justify-between'>
            {/* логотип  */}
            <Link to="/">
               <img src={logo} className='h-28 w-32 md:w-56 md:h-48 lg:w-64 hover:translate-y-3 duration-300 transition-transform ease-in' alt="logo" />
            </Link>
            {/* корзина  */}
            <Link to="/cart" className='relative cursor-pointer mt-6 md:mt-11 hover:translate-y-3 duration-300 transition-transform ease-in'>
               <FiShoppingCart className='size-8 text-gray-500 md' />
               <p className='absolute z-10 bg-orange-200 px-3 py-1 opacity-60 -left-4 text-orange-500 top-4 rounded-full'>{state.amount}</p>
            </Link>
         </div>
         {/* поиск  */}
         <Form />
      </div>
   );
};


export default Header;
