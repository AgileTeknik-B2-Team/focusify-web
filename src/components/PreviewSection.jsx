// src/components/PreviewSection.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const previewImages = [
  { src: "/assets/preview-1.png", alt: "Preview 1" },  // perhatikan slash di depan!
  { src: "/assets/preview-2.jpeg", alt: "Preview 2" },
  { src: "/assets/preview-3.jpeg", alt: "Preview 3" },
  { src: "/assets/preview-4.jpeg", alt: "Preview 4" },
];


const PreviewSection = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    pauseOnFocus: false,
    draggable: false,
    swipe: false,
  };

  return (
    <section className="w-full bg-white py-6 sm:py-14 flex flex-col items-center">
      <div className="w-full flex justify-center px-2 sm:px-0">
        <div
          className="
            w-full
            max-w-[900px]
            aspect-[16/9]
            rounded-3xl
            overflow-hidden
            shadow-2xl
            shadow-primary-20/45
            backdrop-blur-xl
            flex items-center justify-center
            transition-all
          "
        >
          <Slider {...settings} className="w-full h-full">
            {previewImages.map((item, idx) => (
              <div key={idx} className="w-full h-full flex items-center justify-center">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto max-h-full object-cover"
                  draggable={false}
                  style={{
                    minWidth: 0,
                    minHeight: 0,
                    aspectRatio: "16/9",
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
