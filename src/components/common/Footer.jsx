import React from 'react'
import { Link } from "react-router-dom";
import FocusifyLogo from "../../assets/focusify.png";
import AgileLogo from "../../assets/agile.png";
import PensLogo from "../../assets/pens.png";

const Footer = () => {
  return (
    <footer className="bg-[#22234f] text-white py-6 px-6 text-center">
      <p className="text-sm font-semibold mb-4">
        Copyright © Focusify 2025. Powered by AgileTeknik. All Rights Reserved.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-4">
        <Link
          to="/"
          className="text-white hover:text-gray-300 transition duration-200"
        >
          <a href="" target="_blank" rel="noopener noreferrer">
            <img
              src={FocusifyLogo}
              alt=""
              className="h-10 bg-white px-3 py-1 rounded-lg"
            />
          </a>
        </Link>
        <a href="https://agileteknik.com/" target="_blank" rel="noopener noreferrer">
          <img
            src={AgileLogo}
            alt="Agile"
            className="h-10 bg-white px-3 py-1 rounded-lg"
          />
        </a>
        <a href="https://pens.ac.id" target="_blank" rel="noopener noreferrer">
          <img
            src={PensLogo}
            alt="PENS"
            className="h-10 bg-white px-3 py-1 rounded-lg"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer