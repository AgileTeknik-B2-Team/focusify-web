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
      className="relative flex items-start gap-3 w-full"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      {/* Avatar */}
      <img
        src={avatar}
        alt="Avatar pengguna"
        className="h-10 w-10 rounded-full object-cover shadow ring-2 ring-white/50"
      />
      {/* Bubble */}
      <div className="relative w-full max-w-md rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 p-3 shadow-lg">

        {/* Bintang */}
        <div className="mb-2 flex items-center gap-1">
          {stars.map((_, i) => (
            <HiStar key={i} className="h-4 w-4 text-yellow-400 shrink-0" />
          ))}
        </div>
        <p className="text-sm leading-normal text-slate-800">{text}</p>
        {/* ekor bubble */}
        <span className="absolute -left-2 bottom-4 block h-4 w-4 rotate-45 rounded-sm bg-white/60 backdrop-blur-xl border-b border-l border-white/40" />
      </div>
    </div>
  );
};


export default BubbleChat;
