import React from 'react'

const BadgeCount = ({size}) => {
  return (
    <div className={`absolute -top-1 -right-3 bg-red-600 rounded-full text-[14px] ${size} grid place-items-center text-white`}>
      3
    </div>
  );
}

export default BadgeCount