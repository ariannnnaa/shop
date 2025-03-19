import { Link } from 'react-router-dom';
// reducer 
import { REMOVE, PRODUCT_QUANTITY } from '../features/cartActions';
// значки
import { FaPrescriptionBottle } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const CartItem = ({ id, name, price, img, amount, dispatch }) => {

  // уменьшить кол-во товара 
  const handleDecrease = () => {
    if (amount === 1) {
      dispatch({ type: REMOVE, payload: id });
      return;
    }
    dispatch({ type: PRODUCT_QUANTITY, payload: { id, sign: 'minus' } });
  }

  return (
    <div className='flex justify-between shadow-lg shadow-orange-200 rounded-lg pl-2 pr-[1px] sm:px-3 border border-orange-100 py-3'>
        {/* Инфо о продукте  */}
      <div className='flex flex-col sm:items-center sm:flex-row gap-3'>
        <img src={img} className='size-14' alt="product img" />
        <Link to={`/${id}`} className='w-[130px] hover:text-orange-600 hover:-translate-y-2 transition-all duration-200'>{name}</Link>
      </div>
      <div className='flex flex-wrap gap-5 items-center w-11/12 justify-evenly text-orange-400'>
       {/* кол-во продукта */}
        <p className='font-bold sm:text-xl text-orange-600'>{amount}</p>
       {/* кнопки регулировки продукта  */}
        <div className='cursor-pointer text-lg sm:text-xl'>
          <FaAngleUp onClick={() => dispatch({ type: PRODUCT_QUANTITY, payload: { id, sign: 'plus' } })} />
          <FaAngleDown onClick={handleDecrease} className='mt-2'/>
        </div>
        {/* цена */}
        <i className='text-sm sm:text-base'>{price} руб.</i>
        {/* удалить из корзины  */}
        <button className='cursor-pointer sm:text-xl text-gray-600' onClick={() => dispatch({ type: REMOVE, payload: id })}>
          <FaPrescriptionBottle />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
