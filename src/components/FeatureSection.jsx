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

  // Inisialisasi AOS untuk efek scroll
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  // Refresh AOS ketika selected berubah
  useEffect(() => {
    AOS.refresh();
  }, [selected]);

  // Data fitur: emoji, judul, deskripsi, dan path gambar
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

  return (
    <section id="features" className="py-16 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Judul Section */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
            Fitur Utama Focusify
          </h2>
          <p className="mt-2 text-slate-600 text-base sm:text-lg max-w-lg mx-auto">
            Jangan biarkan gangguan menghalangi produktivitasmu.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8">
  {/* Kiri: Mockup (no white bg) */}
  {/* Kiri: Mock-up tanpa garis putih */}
<div
  className="w-full lg:w-1/2 flex justify-center"
  data-aos="fade-right"
>
  <AnimatePresence mode="wait">
    {/* wrapper baru –> clip sudut + hilangkan shadow */}
    <motion.div
      key={features[selected].image}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      /* radius sama seperti gambar + clip + opsi ring */
      className="rounded-2xl overflow-hidden"
    >
      <img
        src={features[selected].image}
        alt={features[selected].title}
        className="block w-full h-auto max-w-[260px] bg-transparent object-contain"
        loading="lazy"
        decoding="async"
      />
    </motion.div>
  </AnimatePresence>
</div>


          {/* Kolom Kartu Fitur */}
          <div className="w-full lg:w-1/2 space-y-6">
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
