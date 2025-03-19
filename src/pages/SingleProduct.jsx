import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import data from '../data/data.json';
import user from '../assets/images/user.avif';
import Trend from '../components/Trend';

const SingleProduct = () => {
    const { productId } = useParams();
    const { name, description, price, gender,
        material, category, img, reviews } = data.find((item) => item.id == productId);

    return (
        <div className='mt-7 md:mt-12'>
        {/* Товар  */}
          <section className='flex flex-col sm:flex-row justify-center items-center sm:items-start gap-7'>
           <img src={img} className='h-[400px] w-[300px] object-cover lg:w-[400px] lg:h-[500px] rounded-md' 
           alt="product image" />
           {/* инфо товара */}
           <div className='md:text-xl xl:text-2xl md:ml-7'>
              <h2 className='text-orange-400 text-center text-2xl md:text-4xl xl:text-5xl font-bold mb-4'>
                {name}
                </h2>
              <h3 className='text-orange-300 text-center text-xl md:text-2xl xl:text-3xl font-semibold'>
                {description}
                </h3>
           <div className='text-gray-400 p-5 shadow-lg shadow-orange-300 
           flex flex-col items-center mt-10 sm:mt-16 gap-3'>
           <h4 className='font-medium md:text-2xl  xl:text-4xl mb-3'>
            Характеристики:
            </h4>
              <p>Стоимость: 
                <i className='text-gray-500'>{price} руб.</i>
                </p>
              <Link>Из категории: 
              <i className='text-gray-500'>{category}</i>.
              </Link>
              <p>Пол: 
                <i className='text-gray-500'>{gender}</i>.
                </p>
              <p>Материал: 
                <i className='text-gray-500'>{material}</i>.
                </p>
           </div>
           </div>
          </section> 
              {/* Отзывы  */}
        <h1 className='text-orange-500 mt-16 text-3xl md:text-4xl xl:text-5xl text-center'>
          Комментарии
          </h1>
      <section className='flex flex-col mt-12 sm:flex-row gap-6 items-center sm:items-stretch justify-center 
      xl:gap-20'>
        {reviews.map((item,index) => {
          return <div key={index} className='bg-orange-200 text-orange-700 rounded-lg 
          w-[300px] p-3 md:w-[320px] lg:p-7 lg:w-[400px]'>
            <div className='flex gap-4 items-center mb-4'>
              <img src={user} className='size-8 rounded-full' alt="user avatar" />
              <h3 className='text-xl md:text-3xl '>
                {item.username}
                </h3>
            </div>
            <i className='text-lg md:text-xl'>Оценка 
            {item.rating}/5
            </i>
          <p className='my-6'>{item.comment}</p>
          <data className='text-gray-600'>Комментарий оставлен: {item.date}</data>
          </div>
        })}
      </section>
        {/* Популярное  */}
           <Trend />
        </div>
    );
}

export default SingleProduct;
