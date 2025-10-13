const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-purple-200 pt-16">
      <div className="text-center container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-6">
          Hi, I'm <span className="text-red-600">Aaron Ojo</span>
        </h1>
        <p className="text-xl md:text-2xl text-purple-800 mb-8">
          Frontend Developer passionate about creating amazing web experiences
        </p>
        <div className="space-x-4">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-200 font-bold transition duration-150"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-200 font-bold transition duration-150"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
