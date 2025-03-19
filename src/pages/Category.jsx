import { useState } from 'react';
import { useParams } from 'react-router';
import data from '../data/data.json'
import { categories } from '../data/info_data';
import ProductContainer from '../components/ProductContainer';

const Category = () => {
    const { category } = useParams();
    const [currentCategory, setCurrentCategory] = useState(category);
    const filtered = data.filter((item) => item.category === currentCategory);
    const {description} = categories.find((item) => item.title === currentCategory);

    const handleCategory = (e) => {
        setCurrentCategory(e.target.value);
    }

    return (
        <div>
            <h1 className='text-orange-500 mt-10 text-3xl md:text-4xl xl:text-5xl text-center'>
                {description}
                </h1>
            {/* Выбор по категориям */}
            <select value={currentCategory} onChange={handleCategory}
           className='w-10/12 mt-11 mx-auto block cursor-pointer outline-none text-orange-700 px-6 
           font-semibold border border-orange-300 bg-orange-200 p-2 rounded-lg'>
                {categories.map((item) => {
                    return <option key={item.title} value={item.title}
                        className='text-gray-600'>
                        {item.description}
                    </option>
                })}
            </select>
            {/* Товары */}
            <ProductContainer items={filtered} cards={4} />
        </div>

    );
}

export default Category;
