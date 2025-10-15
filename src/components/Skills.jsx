const Skills = () => {
  const skills = [
    { name: "HTML5", level: 99 },
    { name: "CSS3", level: 95 },
    { name: "Javascript", level: 90 },
    { name: "React JS", level: 90 },
    { name: "Tailwind Css", level: 90 },
    { name: "WordPress", level: 80 },
  ];

  const SkillBar = ({ skill, level }) => {
    return (
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="font-medium text-gray-700">{skill}</span>
          <span className="text-sm text-gray-500">{level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    );
  };
  return (
    <section id="skills" className="py-12 px-6 bg-purple-200">
      <div className="mx-auto container">
        <h1 className="text-3xl text-center underline text-purple-900 font-bold">
          Skills & Technologies
        </h1>

        <p className="max-w-2xl text-center mx-auto mb-12 leading-relaxed text-gray-1000 my-4 text-lg text-center">
          I'm a passionate learner who thrives on mastering new technologies
          quickly. The tech landscape evolves rapidly, and I'm committed to
          growing alongside it through continuous learning and hands-on
          practice.
        </p>

        <div className="mx-auto max-w-2xl">
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
