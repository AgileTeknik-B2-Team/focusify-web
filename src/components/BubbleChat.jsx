import React from "react";
import { HiStar } from "react-icons/hi";      // npm i react-icons

/**
 * BubbleChat
 * @param {string} avatar
 * @param {number} star
 * @param {string} text
 */
const BubbleChat = ({ avatar, star = 5, text }) => {
  const stars = Array.from({ length: star });
  return (
    <div
      className="relative flex items-start gap-3 w-full px-24 sm:px-0"
    >
      {/* Avatar */}
      <img
        src={avatar}
        alt="Avatar pengguna"
        className="h-10 w-10 rounded-full object-cover shadow ring-2 ring-white/50 flex-shrink-0"
      />
      {/* Bubble */}
      <div className="relative flex-1 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 p-3 shadow-sm">
        {/* Bintang */}
        <div className="mb-2 flex items-center gap-1">
          {stars.map((_, i) => (
            <HiStar key={i} className="h-4 w-4 text-amber-400 shrink-0" />
          ))}
        </div>
        <p className="leading-normal text-body">{text}</p>
      </div>
    </div>
  );
};


export default BubbleChat;
