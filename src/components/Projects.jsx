const Projects = () => {
  const projects = [
    {
      title: "Movie Search App",
      description:
        "A responsive movie discovery application that allows users to search, filter, and explore detailed information about films. Features include real-time search, movie details, ratings, and an intuitive interface for movie enthusiasts.",
      image: "/moviecardss.jpg", // ← Replace with actual filename
      technologies: ["React", "TMDB API", "Tailwind CSS"],
      liveLink: "https://movie-search-ivory-three.vercel.app/", // ← Replace with actual link
      githubLink: "https://github.com/Aaron-ojo/Movie-Search", // ← Replace with actual link
    },
    {
      title: "OAU Campus Map",
      description:
        "A comprehensive digital map of Obafemi Awolowo University built with React and Leaflet library. Designed to help newcomers, freshers, and visitors navigate campus efficiently with all important locations, landmarks, and facilities clearly marked and easily accessible.",
      image: "/campusmap.jpg", // ← Replace with actual filename
      technologies: ["React", "Leaflet Library", "CSS"],
      liveLink: "https://campus-navigator-ten.vercel.app/", // ← Replace with actual link
      githubLink: "https://github.com/Aaron-ojo/Campus-Navigator", // ← Replace with actual link
    },
  ];
  return (
    <section id="projects" className="py-12 px-6 bg-purple-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          My Projects
        </h2>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* Image Column */}
              <div className="w-full md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Content Column */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    target="_blank"
                    href={project.liveLink}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-200 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    target="_blank"
                    href={project.githubLink}
                    className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:border-gray-400 transition bg-white"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
