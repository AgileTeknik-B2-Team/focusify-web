import React from 'react'

import Star from '../../public/assets/icons/star.svg'

const BubbleChat = ({avatar, star, text}) => {
  const starCount = Array.from({ length: star }, (_, index) => index + 1);
  
  return (
    <div className="flex items-start gap-2.5">
      <img
        className="w-8 h-8 rounded-full shadow-sm"
        src={avatar}
        alt="User Avatar"
      />
      <div className="bg-white flex flex-col w-full max-w-[320px] leading-1.5 p-4 rounded-e-xl rounded-2xl shadow-sm">
        <div className="flex items-start gap-1.5 mb-2">
          {starCount.map((_, index) => (
            <img
              key={index}
              src={Star}
              alt="Star Icon"
              className="w-4 h-4"
            />
          ))}
        </div>
        <p className="text-start text-sm">
          {text}
        </p>
      </div>
    </div>
  )
}

export default BubbleChat