// gender 
import woman from '../assets/images/woman-bg.avif';
import man from '../assets/images/man-bg.jpg';
// categories
import up from '../assets/images/categories/t-shirt.jpg';
import down from '../assets/images/categories/pants.avif';
import dresses from '../assets/images/categories/dresses.jpg';
import jacket from '../assets/images/categories/jacket.jpg';
import shoes from '../assets/images/categories/shoes.avif';
import accessories from '../assets/images/categories/accessories.jpg';
// contacts
import ok from '../assets/images/contacts/ok.png';
import vk from '../assets/images/contacts/vk.png';
import inst from '../assets/images/contacts/inst.png';
import tiktok from '../assets/images/contacts/tiktok.png';
import whatsapp from '../assets/images/contacts/whatsapp.png';

const gender = [
  {
    title: 'Женщинам',
    desc: 'Коллекция женской одежды',
    gender: 'Женский',
    img: woman,
  },
  {
    title: 'Мужчинам',
    desc: 'Коллекция мужской одежды',
    gender: 'Мужской',
    img: man,
  }
];

const categories = [
  {
    title: "Верх",
    description: "Верхняя одежда",
    img: up,
  },
  {
    title: "Низ",
    description: "Нижняя одежда",
    img: down,
  },
  {
    title: "Обувь",
    description: "Обувь",
    img: shoes ,
  },
  {
    title: "Куртки",
    description: "Куртки",
    img: jacket,
  },
  {
    title: "Платья",
    description: "Платья",
    img: dresses ,
  },
  {
    title: "Аксессуары",
    description: "Аксессуары",
    img: accessories ,
  },
]

const contacts = [
  ok,
  vk,
  inst,
  tiktok,
  whatsapp 
]

export { gender, categories, contacts }