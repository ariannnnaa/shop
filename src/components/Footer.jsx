import logo from '../assets/images/logo.png';
import {contacts} from '../data/info_data';

const Footer = () => {
    return (
        <div className='border-t-2 mt-28 border-orange-100 text-orange-500 lg:text-xl'>
          <div className='flex flex-col lg:flex-row items-center pb-12 lg:justify-evenly gap-20'>
         {/* Адрес */}
            <div className='flex flex-col items-center'>
            <img src={logo} className='w-[300px]' alt="logo" />
                <p>Город: Москва. <br /> 
                Ул. Пушкина, 15/25.</p>
            </div>
            {/* Соц. сети  */}
            <div className='flex flex-col items-center gap-6'>
        <h2 className='text-orange-600 text-xl md:2xl lg:3xl font-bold'>
            Для связи с нами: </h2>
        <div className='flex gap-4'>
         {contacts.map((item,index) => {
            return <img src={item} key={index} alt="social" 
            className='size-9 cursor-pointer hover:opacity-75'/>
         })}
        </div>
            </div>
            </div>
            <p className='text-center mx-20 border-t-2 border-orange-100 py-5'>
                © 2025 Commerce, Inc.</p>
        </div>
    );
}

export default Footer;
