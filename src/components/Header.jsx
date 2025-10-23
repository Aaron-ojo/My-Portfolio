import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-purple-800 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl text-red-400 font-bold">
            Aaron Ojo
          </a>
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-white hover:text-blue-600 font-bold text-xl transition duration-150"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-xl font-bold text-white hover:text-blue-600 transition duration-150"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-xl font-bold text-white hover:text-blue-600 transition duration-150"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-xl font-bold text-white hover:text-blue-600 transition duration-150"
            >
              Contact
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white transition-transform ${
                  isMenuOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-white transition-opacity ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-white transition-transform ${
                  isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></span>
            </div>
          </button>

          <div
            className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ${
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <div className="flex flex-col space-y-4 mx-auto px-6 container ">
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 py-2 transition"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-600 hover:text-blue-600 py-2 transition"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                Project
              </a>
              <a
                href="#skills"
                className="text-gray-600 hover:text-blue-600 py-2 transition"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 py-2 transition"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
