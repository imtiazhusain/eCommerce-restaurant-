import React from 'react'
import {AiFillStar,AiOutlineStar,AiOutlineShopping} from 'react-icons/ai'

const Product = ({name,img,price}) => {
  return (
    <div className="border  hover:border-gray-300 hover:scale-105 transition-transform rounded-lg ">
      <img src={img} alt={name} />

      <div className="relative space-y-2 p-4">
        <div className="text-yellow-400 flex gap-[2px] text-[20px]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>

        <h3 className="font-medium">{name}</h3>
        <h3 className="font-medium text-red-600 text-2xl">{price}</h3>
        <div className= "absolute -top-4 right-2 bg-accent text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer">
          <AiOutlineShopping />
        </div>
      </div>
    </div>
  );
}

export default Product