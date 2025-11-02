import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-scroll";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const overlayRef = useRef(null);

  // Animate menu open/close
  useEffect(() => {
    if (menuOpen) {
      gsap.to(overlayRef.current, {
        y: 0,
        duration: 0.8,
        ease: "power4.out",
      });
    } else {
      gsap.to(overlayRef.current, {
        y: "-100%",
        duration: 0.8,
        ease: "power4.in",
      });
    }
  }, [menuOpen]);

  return (
    <header className="w-full h-20 md:h-[90px] flex-center relative z-50">
      <div className="flex justify-between items-center w-[90%] md:w-[80%]">
        <img src="public\Images\logo\logo-white.svg" alt="ZIPSAR Logo" className="h-6 md:h-8 lg:h-10" />

        <button
          className="flex flex-col outline-none gap-1 cursor-pointer z-50 relative w-8 h-6"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div
            className={`w-8 h-0.5 rounded-2xl bg-white absolute top-0 transition-all duration-300 ${
              menuOpen ? "rotate-45 top-2.5" : "rotate-0"
            }`}
          ></div>
          <div
            className={`w-4 h-0.5 rounded-2xl bg-white absolute top-2.5 transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 rounded-2xl bg-white absolute bottom-0 transition-all duration-300 ${
              menuOpen ? "-rotate-45 bottom-2.5 w-8" : "rotate-0"
            }`}
          ></div>
        </button>
      </div>

      <div
        ref={overlayRef}
        className="fixed top-0 left-0 w-screen h-screen bg-black text-white flex-between -translate-y-full px-20"
      >
        <ul className="text-left space-y-6 text-3xl md:text-5xl font-semibold tracking-wide">
          {["Home", "About", "Service", "Study Case", "Latest News", "Contact"].map((item, index) => (
            <Link
              to={"#"+item}
              key={index}
              className="cursor-pointer hover:text-gray-400 transition-all duration-300 flex items-center gap-4"
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-lg md:text-xl italic text-gray-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item}
            </Link>
          ))}
        </ul>

        <div className="absolute bottom-10 right-10 flex gap-4">
          <a href="#" className="hover:text-gray-400 transition-all duration-300">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-gray-400 transition-all duration-300">
            <Twitter size={24} />
          </a>
          <a href="#" className="hover:text-gray-400 transition-all duration-300">
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-gray-400 transition-all duration-300">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;