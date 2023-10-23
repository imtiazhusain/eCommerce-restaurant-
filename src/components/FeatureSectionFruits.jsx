import React from 'react'
import Product from './Product';
const data = [
{ id: 0, img: "./images/product__1.webp", name: "Dried Mango", price: "$500" },
{ id: 1, img: "./images/product__2.webp", name: "Crunchy Crisps", price: "$300" },
{ id: 2, img: "./images/product__3.webp", name: "Jewel Cranberries", price: "$200" },
 { id: 3, img: "./images/product__4.webp", name: "Almond organic", price: "$100" },
];

const FeatureSectionFruits = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex lg:justify-between lg:items-center">
        <div className="">
          <h3 className="font-medium text-2xl">Fruits & Vegetables</h3>
          <p className="text-gray-600 mt-2">
            Buy farm fresh fruits and Vegetables online at the best prices
          </p>
        </div>

        <div className="space-x-4 mt-8 lg-mt-0">
          <button className="feature__btn">Fruits</button>
          <button className="text-gray-600 hover:text-accent">
            Vegetables
          </button>
          <button className="text-gray-600 hover:text-accent">
            Bread & Bekrey
          </button>
        </div>
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2'>
        <div><img src="./images/feature__1.webp" alt="banner" className='w-full h-full object-cover ' /></div>
        {data.map(el => <Product key={el.id} name={el.name} img={el.img} price={el.price} />)}
      </div>
    </div>
  );
}

export default FeatureSectionFruits
