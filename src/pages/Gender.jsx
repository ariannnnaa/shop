import {useParams} from 'react-router';
import ProductContainer from '../components/ProductContainer';
import data from '../data/data.json'
import { gender } from '../data/info_data';


const Gender = () => {
 const {unicGender} = useParams();
 const filtered = data.filter((item) => item.gender === unicGender );
 const {desc} = gender.find((item) => item.gender === unicGender);

 return (
        <div className='mt-7'>
             <h1 className='text-orange-500 mt-10 text-3xl md:text-4xl xl:text-5xl text-center'>{desc}</h1>
             <ProductContainer items={filtered} cards={6}/>
        </div>
    );
}

export default Gender;
