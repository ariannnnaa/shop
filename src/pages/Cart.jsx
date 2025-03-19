import CartItem from '../components/CartItem';
// reducer 
import { useGlobalContext } from '../context/useCartContext';
import { GET_TOTAL, RESET } from '../features/cartActions';

const Cart = () => {
  const { state, dispatch } = useGlobalContext();

  return (
    <div className='text-gray-500 mt-9 mb-52'>
      <h1 className='text-gray-600 ml-5 md:ml-28 border-b-2 border-gray-300 pb-7 mt-10
       text-3xl md:text-4xl xl:text-5xl'>
        Ваша корзина: </h1>
      {!state.cart.length ? (
        // Kогда корзина пуста :
        <p className='mt-28 text-xl md:text-2xl text-center'>Корзина пуста.
          <br />
          <i>Добавьте в нее что-нибудь для покупки. </i></p>
      ) : (
        // Когда есть товары : 
        <section>
          <h1 className='my-6 text-2xl md:text-3xl xl:text-4xl text-center text-orange-300'>
            Товаров : {state.amount}
          </h1>
          {/* товары в корзине */}
          <div className='p-2 flex flex-col gap-7 sm:pl-14'>
            {state.cart.map((item) => {
              return <CartItem key={item.id} {...item} dispatch={dispatch} />
            })}
            <button className='shadow-lg block mx-auto w-[200px] shadow-orange-200 rounded-md border 
            p-2 border-orange-300 hover:bg-orange-200 '
              onClick={() => dispatch({ type: RESET })}>
              Очистить всю корзину
            </button>
          </div>

          {/* общая сумма */}
          <div className='flex flex-col sm:flex-row gap-10 justify-between px-6 md:px-14 pt-4 mt-11 
          ml-5 md:ml-28 border-t-2 border-gray-300'>
            <p className='text-2xl md:text-3xl xl:text-4xl'>
              Сумма : {state.total > 0 && `${state.total} руб.`}
            </p>
            <button className='shadow-lg w-[200px] block mx-auto sm:mx-0 shadow-gray-400 rounded-md border 
            sm:p-2 border-gray-500 hover:bg-gray-400 hover:text-white'
              onClick={() => dispatch({ type: GET_TOTAL })}>
              Посчитать
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

export default Cart;
