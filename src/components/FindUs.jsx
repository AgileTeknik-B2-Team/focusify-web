import React, { useEffect, useState } from "react";

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
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Temukan Focusify di Play Store!
      </h2>
      <p className="text-base md:text-lg mb-8 max-w-xl">
        Focusify juga hadir di Play Store, download sekarang agar kamu lebih mudah untuk mengakses Focusify kapan saja dan di mana saja!
      </p>
      <button
        onClick={() =>
          window.open(
            "https://play.google.com/store/apps/details?id=com.focusify.app&hl=en-US&pli=1",
            "_blank"
          )
        }
        className="btn flex items-center gap-2"
      >
        <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" className="sparkle">
          <path d="M10,21.236L6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z" />
        </svg>
        <span className="text">Download Now!</span>
      </button>
    </div>
  );
};

export default FindUs;