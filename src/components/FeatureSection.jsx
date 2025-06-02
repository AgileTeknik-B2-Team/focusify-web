// src/components/FeatureSection.jsx

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * FeatureCard
 * Props:
 * - emoji: string (misalnya "⏰", "🚫", "📊")
 * - title: judul fitur (string)
 * - description: deskripsi fitur (string)
 * - isSelected: boolean, apakah kartu sedang dipilih
 * - onClick: callback ketika kartu diklik
 */
const FeatureCard = ({ emoji, title, description, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-2xl p-6 shadow-lg transition-all duration-300 flex flex-col gap-2
        ${
          isSelected
            ? "bg-gradient-to-r from-primary-10 to-primary-20 scale-105 ring-2 text-white"
            : "bg-gradient-to-r from-primary-10 to-primary-20 hover:scale-105 text-white"
        }
      `}
    >
      {/* Baris judul dengan emoji */}
      <div className="flex items-center gap-2 text-lg sm:text-xl font-semibold">
        <span className="text-2xl">{emoji}</span>
        <span>{title}</span>
      </div>
      {/* Deskripsi */}
      <p className="text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

/**
 * FeatureSection
 * Menampilkan mockup gambar di kiri dan daftar FeatureCard di kanan, seperti pada desain.
 * Gambar berubah sesuai kartu yang dipilih. Ukuran gambar disesuaikan agar tidak terlalu besar.
 */
export default function FeatureSection() {
  const [selected, setSelected] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState({});

  const features = [
    {
      emoji: "⏰",
      title: "Fokus Timer",
      description:
        "Atur waktu belajar dan istirahatmu dengan teknik Pomodoro. Fokus selama sesi kerja, lalu ambil jeda sejenak untuk menyegarkan pikiran.",
      image: "/assets/Timer.png",
    },
    {
      emoji: "🚫",
      title: "Mode Jangan Ganggu dan Musik Ambient",
      description:
        "Blokir notifikasi yang mengganggu agar sesi belajarmu berjalan tanpa interupsi. Atur Musik Ambient sesuai dengan kebutuhanmu.",
      image: "/assets/Audio.png",
    },
    {
      emoji: "📊",
      title: "Fokus Statistik",
      description:
        "Pantau progres fokusmu melalui grafik dan angka yang mudah dipahami. Lihat seberapa banyak sesi Pomodoro yang telah kamu selesaikan.",
      image: "/assets/Statistik.png",
    },
  ];

  // Preload all images on component mount
  useEffect(() => {
    const preloadImages = () => {
      features.forEach((feature, index) => {
        const img = new Image();
        img.onload = () => {
          setImagesLoaded(prev => ({
            ...prev,
            [index]: true
          }));
        };
        img.src = feature.image;
      });
    };

    preloadImages();
    AOS.init({ duration: 600, once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [selected]);

  return (
    <section id="features" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Judul Section */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl max-w-lg mx-auto font-bold text-heading">
            <span className="bg-gradient-to-r from-primary-10 to-primary-20 bg-clip-text text-transparent">
              Dirancang fitur&nbsp;  
            </span>
            yang membantu kamu fokus!
          </h2>
          <p className="mt-5 text-body text-base sm:text-lg md:text-xl max-w-lg mx-auto">
            Kami hadir untuk mengubah cara belajar kalian, tanpa membuatnya terlalu rumit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Kiri: Mockup (no white bg) */}
          <div className="flex justify-center items-center relative" data-aos="fade-right">
            <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[420px] h-[350px] sm:h-[450px] md:h-[600px]">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={false}
                  animate={{
                    opacity: selected === idx ? 1 : 0,
                    scale: selected === idx ? 1 : 0.95,
                    zIndex: selected === idx ? 2 : 1
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-2xl overflow-hidden"
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="block w-full h-full object-contain bg-transparent"
                    loading={idx === 0 ? "eager" : "lazy"}
                    decoding="async"
                    style={{
                      opacity: imagesLoaded[idx] ? 1 : 0,
                      transition: 'opacity 0.3s ease-in-out'
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Kolom Kartu Fitur */}
          <div className="flex flex-col items-center justify-center space-y-6">
            {features.map((feature, idx) => {
              const isSel = selected === idx;
              return (
                <motion.div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <FeatureCard
                    emoji={feature.emoji}
                    title={feature.title}
                    description={feature.description}
                    isSelected={isSel}
                    onClick={() => setSelected(idx)}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
