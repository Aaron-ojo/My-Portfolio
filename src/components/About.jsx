const About = () => {
  return (
    <section id="about" className="py-12 px-6 bg-purple-200">
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg ">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <img
              src="Aaron.jpg"
              alt="Aaron"
              className="w-full md:h-96 object-cover  rounded-lg shadow-md"
            />
          </div>

          <div className="w-full md:w-1/2 shadow-lg bg-purple-100 p-6 rounded-lg shadow-purple-400">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>

            <p className="text-lg text-gray-800 mb-6">
              I'm a frontend developer passionate about creating intuitive
              digital experiences that blend creativity with functionality. I
              love turning complex problems into simple, beautiful solutions.
            </p>

            <div className="space-y-3">
              <div className="flex">
                <span className="text-purple-900 w-24 font-bold">AGE:</span>
                <span className="text-red-600 font-bold">18</span>
              </div>
              <div className="flex">
                <span className="text-purple-900 w-24 font-bold">EMAIL:</span>
                <span className="text-red-600 font-bold overflow-x-auto">
                  ojoaaron93@gmail.com
                </span>
              </div>
              <div className="flex">
                <span className="text-purple-900 w-24 font-bold">Phone:</span>
                <span className="text-red-600 font-bold">
                  07089196155 OR 09169305821
                </span>
              </div>
              <div className="flex">
                <span className="text-purple-900 w-24 font-bold">
                  LOCATION:
                </span>
                <span className="text-red-600 font-bold">Ibadan, Nigeria</span>
              </div>
              <div className="flex">
                <span className="text-purple-900 w-24 font-bold">STATUS:</span>
                <span className="text-red-600 font-bold">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
