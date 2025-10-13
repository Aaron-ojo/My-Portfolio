const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-purple-800 shadow-sm">
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
