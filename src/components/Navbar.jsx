import React from "react";

import {BsSearch} from "react-icons/bs"
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import BadgeCount from "./BadgeCount";

const Navbar = () => {
  return (
    <div className="container lg:block hidden ">
      <div className="flex justify-between items-center pt-8">
        <h1 className="text-4xl font-medium">Logo</h1>
        <div className="w-full max-w-[500px] relative">
          <input
            type="text"
            placeholder="Search product..."
            className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-full w-full"
          />

          <BsSearch
            className="absolute top-0 right-0 mt-4 mr-5 text-gray-500"
            size={20}
          />
        </div>

        <div className="flex gap-2">
          <div className="icon__wraper">
            <AiOutlineUser size={20} />
          </div>

          <div className="icon__wraper relative">
            <AiOutlineShoppingCart size={20} />
           <BadgeCount  size='h-[25px] w-[25px]'  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
