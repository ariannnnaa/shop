import { useState } from 'react';
import ProductCard from './ProductCard';
import ReactPaginate from 'react-paginate';

const ProductContainer = ({ items, cards}) => {
    // данные для пагинации товара 
    const [currentPage, setCurrentPage] = useState(0);
    const itemsForPage = cards; 
    const startIndex = currentPage * itemsForPage;
    const data = items.slice(startIndex, startIndex + itemsForPage);
    const pages = Math.ceil(items.length / itemsForPage);

    
    const handlePages = (e) => {
        setCurrentPage(e.selected);
    }
    return (
        <section>
            {/* товары  */}
            <div className='w-10/12 my-20 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-14 items-center justify-items-center'>
                {data.map((item) => {
                    return <ProductCard key={item.id} {...item} />
                })}
            </div>
            {/* пагинация  */}
            {items.length > cards && (
                <ReactPaginate
                    pageCount={pages}
                    onPageChange={handlePages}
                    previousLabel="<"
                    nextLabel=">"
                    containerClassName="flex gap-4 md:gap-9 justify-center text-gray-600"
                    nextClassName='text-2xl hover:text-orange-300'
                    previousClassName='text-2xl hover:text-orange-300'
                    pageClassName='text-xl border-2 hover:text-orange-300'
                    disabledClassName='opacity-0'
                    activeClassName="text-orange-500"
                />
            )}
        </section>
    );
}

export default ProductContainer;
