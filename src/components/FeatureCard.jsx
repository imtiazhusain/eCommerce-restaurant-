import React from 'react'

const FeatureCard = ({title,icon}) => {
  return (
    <div className='flex items-center gap-4'>

<div className='w-[50px] h-[50px] bg-gray-300 text-accentDark text-[24px] grid place-items-center rounded-full'>
    {icon}
</div>
<div>
    <h3 className='text-xl text-accent font-medium'>{title}</h3>
    <p className='text-gray-500 text-[14px]'>Lorem ipsum dolor.
    </p>
</div>
    </div>
  )
}

export default FeatureCard