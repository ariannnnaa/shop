import { Link } from 'react-router-dom';
import { gender, categories } from '../data/info_data'
import data from '../data/data.json'
// components 
import ProductContainer from '../components/ProductContainer';
import Trend from '../components/Trend';
// swiper library 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const Home = () => {

    return (
        <div className='my-10 md:my-16'>
            {/* коллекции  */}
            <section className='container mx-auto flex gap-10 flex-col justify-center md:flex-row'>
                {gender.map((item, index) => {
                    const bg = {
                        backgroundImage: `url(${item.img})`,
                    }
                    return <Link key={index} to={`/gender/${item.gender}`} style={bg}
                        className='bg-no-repeat w-full bg-center bg-cover cursor-pointer h-[500px] relative 
                    after:absolute after:content-[""] after:w-full after:h-full after:bg-black
                     after:z-10 after:top-0 after:left-0 after:opacity-60 hover:after:opacity-85'>
                        <div className='text-orange-200 group font-semibold gap-3 absolute w-full h-full 
                        flex flex-col justify-center items-center z-20'>
                            <h2 className='text-3xl lg:text-4xl group-hover:-translate-y-4 ease-in 
                            transition-transform'>{item.title}</h2>
                            <p className='text-xl lg:3xl'>{item.desc}</p>
                        </div>
                    </Link>
                })}
            </section>
            {/* все товары */}
            <h1 className='text-orange-500 mt-10 text-3xl md:text-4xl xl:text-5xl text-center'>
                Наша продукция
                </h1>
            <ProductContainer items={data} cards={5}/>

            {/* одежда по категориям  */}
            <div className='mt-20'>
            <h1 className='text-orange-500 my-10 text-3xl md:text-4xl xl:text-5xl text-center'>
                По категориям
                </h1>
                <Swiper 
                className='container mx-auto'
                centeredSlides={true}
                 spaceBetween={20}
                modules={[Navigation, EffectCoverflow]}
                    loop={true}
                    effect='coverflow'
                    navigation={true}
                    coverflowEffect={{
                        rotate: 50,  // Поворот слайдов
                        stretch: 0,  // Растягивание слайдов
                        depth: 100,  // Глубина эффекта
                        modifier: 1,  // Модификатор
                        slideShadows: true,  // Тени слайдов
                      }}
                      breakpoints={{
                        640: {
                          slidesPerView: 1,  
                        },
                        1024: {
                          slidesPerView: 2,  
                        },
                        1200: {
                          slidesPerView: 3,  
                        },
                      }}
                    >
                    {categories.map((item, index) => {
                        return <SwiperSlide key={index} className='h-[450px] cursor-pointer'>
                            <Link to={`/category/${item.title}`} className='w-full h-full group'>
                            <img className='object-cover object-center h-[400px] transition-transform 
                            group-hover:-translate-y-5 w-full' src={item.img} alt="category bground" />
                            <h2 className='text-center mt-2 shadow-lg shadow-orange-400 text-orange-300 
                            text-2xl md:text-3xl'>{item.description}</h2>
                            </Link>
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
            {/* Популярное */}
            <Trend />
        </div>
    );
}

export default Home;
