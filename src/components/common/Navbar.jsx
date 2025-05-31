import React, { useState, useEffect } from "react";
import HamburgerMenu from "../HamburgerMenu";
import Logo from "../../assets/logo-focusify.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pilih warna teks berdasarkan scrolled
  const textColor = scrolled ? 'text-[#000000]' : 'text-white';

  return (
    <nav
      className={`fixed top-0 left-1/2 -translate-x-1/2 mt-5 w-[90%] max-w-7xl z-50 px-4 md:px-10 py-4 rounded-2xl shadow-lg flex items-center transition-all duration-300
        ${scrolled
          ? 'bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg'
          : 'bg-[#6149b1]'
        }
      `}
    >
      <div className="flex items-center space-x-2">
        <img
          src={Logo}
          alt="Focusify Logo"
          className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-full"
        />
        <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${textColor}`}>
          Focusify
        </span>
      </div>

      {/* Menu Tengah */}
      <div className={`hidden md:flex justify-center space-x-6 mx-auto -mr-4 transition-colors duration-300 ${textColor}`}>
        <button
          className={`hover:text-[#462E96] transition-colors duration-200 font-semibold ${textColor}`}
          onClick={() =>
            document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Home
        </button>
        <button
          className={`hover:text-[#462E96] transition-colors duration-200 font-semibold ${textColor}`}
          onClick={() =>
            document.getElementById('feature')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Features
        </button>
        <button
          className={`hover:text-[#462E96] transition-colors duration-200 font-semibold ${textColor}`}
          onClick={() =>
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Find Us
        </button>
      </div>

      {/* Tombol Sebelah Kanan */}
      <div className="hidden md:flex ml-auto">
        <a
          href="/nameinput"
          className={`
            font-semibold px-6 py-3 rounded-xl shadow-lg transition-all
            ${scrolled
              ? 'bg-[#6149b1] text-white'
              : 'bg-white text-[#6149b1]'
            }
          `}
        >
          Coba Pomodoro
        </a>
      </div>

      {/* Hamburger Mobile */}
      <div className="md:hidden absolute right-4">
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
