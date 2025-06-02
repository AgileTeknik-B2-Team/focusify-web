import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import FindMobile from "../assets/FindMobile.jpg";
import FindWeb from "../assets/FindWeb.jpg";

const FindUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const backgroundImage = isMobile ? FindMobile : FindWeb;
  return (
    <div
      className="w-full min-h-screen bg-gradient-to-b from-[#462E96] to-[#140540] text-white px-6 md:px-16 flex flex-col justify-center items-center text-center pt-2 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-3xl mx-auto mb-8 pt-16 md:pt-24" data-aos="fade-up"> 
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Temukan Focusify di{' '}
          <span className="gradient-text">Play Store!</span>
        </h2>
        <p className="text-base md:text-lg mb-8 max-w-xl">
          Focusify juga hadir di Play Store, download sekarang agar kamu lebih mudah untuk mengakses Focusify kapan saja dan di mana saja!
        </p>  
      </div>
      <a
        href="https://play.google.com/store/apps/details?id=com.focusify.app&hl=en-US"class="cursor-pointer group/download relative flex gap-1 px-8 py-4 bg-[#5c5fe9] text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 font-semibold shadow-xl active:shadow-inner transition-all duration-300"
        data-aos="zoom-in"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="24px"
          width="24px"
        >
          <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            id="SVGRepo_tracerCarrier"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Interface / Download">
              <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                stroke="#f1f1f1"
                d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                id="Vector"
              ></path>
            </g>
          </g>
        </svg>
        Download
        <div
          class="absolute text-xs uppercase scale-0 rounded-md py-2 px-2 bg-[#5c5fe9] left-2/4 mb-3 bottom-full group-hover/download:scale-100 origin-bottom transition-all duration-300 shadow-lg before:content-[''] before:absolute before:top-full before:left-2/4 before:w-3 before:h-3 before:border-solid before:bg-[#5c5fe9] before:rotate-45 before:-translate-y-2/4 before:-translate-x-2/4"
        >
          Pergi ke Play Store
        </div>
      </a>
    </div>
  );
};

export default FindUs;