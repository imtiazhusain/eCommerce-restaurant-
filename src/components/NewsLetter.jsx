import React from 'react'
import { LuMailOpen } from "react-icons/lu";

const NewsLetter = () => {
  return (
    <div className="bg-accentDark mt-16">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
        <div className="flex shrink-0 items-center gap-4">
          <LuMailOpen className='text-[60px]' />
          <div className="text-xl sm:text-2xl font-semibold">
            <h3>Sign up To Our NewsLetter</h3>
            <p>...and receive $20 coupen for first shopping</p>
          </div>
        </div>

        <div className="relative w-full max-w-[500px]">
            <input type="text" placeholder='Your Email Address...' className='py-4 px-6 w-full rounded-full' />

            <button className='bg-accentDark hover:bg-accent rounded-full px-4 py-2 absolute top-[50%] -translate-y-[50%] right-2'>Subscrible</button>

        </div>
      </div>
    </div>
  );
}

export default NewsLetter