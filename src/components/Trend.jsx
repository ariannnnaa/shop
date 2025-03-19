import data from '../data/data.json';
import { Link } from 'react-router-dom';
// swiper library 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, } from 'swiper/modules';
import 'swiper/css';

const Trend = () => {
const filtered = data.filter((item) => item.trend );

  return (
        <div className='mt-20'>
             <h1 className='text-orange-500 my-12 text-3xl md:text-4xl xl:text-5xl text-center'>Популярное</h1>
         {/* Карусель товаров  */}
         <Swiper
         modules={[Navigation]}
         centeredSlides={true}
         spaceBetween={20}
         slidesPerView="auto"
         navigation={true}
         loop={true}
         >
           {filtered.map((item) => {
             return <SwiperSlide key={item.id}
             className='cursor-pointer w-[300px] text-gray-500 hover:border-2 p-4'>
              {/* инфо продукта  */}
 <img src={item.img} className='h-[300px] w-[300px]' alt="product img"/>
    <h3 className='font-bold md:text-xl my-3 text-gray-600'>{item.name}</h3>
    <p className='font-medium mb-8'>{item.description}</p>
    <i className='font-semibold text-gray-400'>{item.price} руб.</i>

    <Link to={`/${item.id}`}
    className='font-medium ml-24 text-orange-500 hover:text-orange-700 relative after:absolute  duration-400 ease-in transition-colors after:transition-all after:duration-500 after:opacity-0 hover:after:opacity-100 after:content-[">>"] after:left-20 hover:after:translate-x-4'>
        Посмотреть
    </Link>
             </SwiperSlide>
           })}
         </Swiper>
        </div>
    );
}

export default Trend;
