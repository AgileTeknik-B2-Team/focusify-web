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
  const textColor = scrolled ? 'text-heading' : 'text-white hover:text-primary-20';

  return (
    <nav
      className={`fixed top-0 left-1/2 -translate-x-1/2 mt-5 w-[90%] max-w-7xl z-50 px-4 md:px-10 py-4 rounded-2xl shadow-lg flex items-center transition-all duration-300
        ${scrolled
          ? 'backdrop-blur-xl shadow-lg'
          : 'bg-primary-10'
        }
      `}
    >
      <div className="flex items-center space-x-2">
        <img
          src={Logo}
          alt="Focusify Logo"
          className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-full"
        />
        <span className={`text-lg md:text-xl font-bold transition-colors duration-300
            ${scrolled ? 'text-heading' : 'text-white'}
          `}>
          Focusify
        </span>
      </div>

      {/* Menu Tengah */}
      <div className={`hidden md:flex justify-center space-x-6 mx-auto -mr-4 transition-colors duration-300 ${textColor}`}>
        <button
          className={`hover:text-primary-10 transition-colors duration-200 font-semibold ${textColor}`}
          onClick={() =>
            document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Beranda
        </button>
        <button
          className={`hover:text-primary-10 transition-colors duration-200 font-semibold ${textColor}`}
          onClick={() =>
            document.getElementById('feature')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Fitur
        </button>
        <button
          className={`hover:text-primary-10 transition-colors duration-200 font-semibold ${textColor}`}
          onClick={() =>
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Temukan Kami
        </button>
      </div>

      {/* Tombol Sebelah Kanan */}
      <div className="hidden md:flex ml-auto">
        <a
          href="/nameinput"
          className={`
            font-semibold px-6 py-3 rounded-full shadow-lg transition
            ${scrolled
              ? 'bg-primary-10 text-white hover:bg-primary-20'
              : 'bg-white text-primary-10 hover:bg-primary-20 hover:text-white'
            }
          `}
        >
          Coba Aplikasi
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
