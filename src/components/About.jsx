const About = () => {
  return (
    <section id="about" className="py-12 px-16 bg-purple-200">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <img
              src="Aaron.jpg"
              alt="Aaron"
              className="w-full md:h-96 object-cover  rounded-lg shadow-md"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-lg text-gray-800 mb-4 leading-relaxed">
              My journey into web development began with a curiosity about how
              technology can solve everyday problems. Creating practical
              applications like my movie search platform and OAU campus
              navigation tool showed me the real impact code can have on
              people's experiences.
            </p>
            <p className="text-lg text-gray-800 mb-4 leading-relaxed">
              I'm passionate about continuous learning—always exploring new
              technologies and techniques to build better, more intuitive
              interfaces. For me, the perfect project combines beautiful design
              with practical problem-solving.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Outside of coding, you'll often find me discovering new films or
              diving into the latest advancements in web development. I believe
              great digital experiences should be both functional and enjoyable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
