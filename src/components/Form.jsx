import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/data.json';
// значки 
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";

const Form = () => {
    const [results, setResults] = useState(null);
    const search = useRef('');
    const [error,setError] = useState({
        value: false,
        text: 'ничего не найдено',
    });
  

    const handleSearch = (e) => {
        e.preventDefault();
        const value = search.current.value.trim();
  
        if(value === '') return;
  
        const filtered = data.filter((item) => {
            return item.category.toLowerCase()
                .includes(value.toLowerCase()) ||
                item.name.toLowerCase()
                    .includes(value.toLowerCase())
        })
        search.current.value = '';

        if(filtered.length === 0) {
            setError({...error, value: true});
        return;
        }
        setResults(filtered);
    }
    
    // таймер для исчезновения предупреждения (ошибки)
    useEffect(() => {
     if(!error.value)return;

     const id = setTimeout(() => {
    setError({...error, value: false});
     },4000);

     return () => clearTimeout(id);
    },[error.value]);

  

    const closeResults = () => {
        setResults(null);
    }

    return (
        <>
        {/* поиск  */}
            <form onSubmit={handleSearch} 
            className={`mt-5 border-2 border-orange-200 ${error.value && 'border-red-700'} 
            mx-auto flex w-11/12 justify-between h-10 rounded-full px-3 md:px-4`}>
                <input type="text" 
                className={`w-10/12 bg-transparent text-orange-500 outline-none md:mx-3 
                ${error.value && 'placeholder:text-red-700'}`} ref={search} 
                placeholder={!error.value ? 'введите название товара ...' : error.text} />
                <button className='hover:-rotate-12 transition-transform duration-200 ease-in-out'>
                    <FaMagnifyingGlass className='text-orange-400 md:size-5' />
                </button>
            </form>
            {/* результаты поиска */}
            {results && (
                <div className='bg-gray-200 relative text-orange-500 mt-4 w-full sm:w-10/12 h-72 
                overflow-y-scroll mx-auto'>
                    <button className='absolute top-3 right-3' onClick={closeResults}>
                        <IoCloseCircleOutline className='size-7 sm:size-10  hover:opacity-75'/>
                        </button>
                        <h1 className='text-center text-xl sm:text-2xl mt-2'>
                            Найдено: <i>{results.length}</i> по вашему запросу
                            </h1>
                    <div className='mt-11'>
                    {results.map((item) => {
                            return <Link key={item.id} to={`/${item.id}`}
                            onClick={closeResults}
                             className='flex justify-between items-center w-5/6 p-2 
                             sm:p-6 hover:bg-gray-300 cursor-pointer'>
                             <img src={item.img} className='size-11 sm:size-24' alt="product-icon" />
                             <p className='text-sm sm:text-xl text-gray-600'>{item.name}</p>
                            </Link>
                    })}
                    </div>
                </div>
            )}
        </>
    );
}

export default Form;
