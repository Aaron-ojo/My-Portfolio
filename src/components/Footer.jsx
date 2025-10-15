const Footer = () => {
  return (
    <footer className="bg-purple-800  font-bold py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="mb-4 md:mb-0">
            <p className="text-white">
              © {new Date().getFullYear()} Aaron Ojo. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition border-2 border-white px-3 py-1 rounded-lg"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition border-2 border-white px-3 py-1 rounded-lg"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition border-2 border-white px-3 py-1 rounded-lg"
            >
              Twitter
            </a>
          </div>

          {/* Back to Top */}
          <div className="mt-4 md:mt-0">
            <a
              href="#hero"
              className="text-white hover:text-gray-400 transition"
            >
              Back to Top ↑
            </a>
          </div>
        </div>

        {/* Made with love */}
        <div className="text-center mt-6 pt-6 border-t border-gray-700">
          <p className="text-white text-sm">Made with React and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
