import { useState } from "react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C++", level: 85, color: "from-blue-500 to-blue-600" },
        { name: "Python", level: 90, color: "from-yellow-500 to-green-500" },
        { name: "JavaScript", level: 92, color: "from-yellow-400 to-yellow-500" },
        { name: "SQL", level: 80, color: "from-orange-500 to-red-500" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 90, color: "from-cyan-400 to-cyan-500" },
        { name: "Flutter", level: 75, color: "from-blue-400 to-blue-600" },
        { name: "Figma", level: 70, color: "from-purple-500 to-pink-500" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 88, color: "from-green-500 to-green-600" },
        { name: "Express.js", level: 85, color: "from-gray-400 to-gray-500" },
        { name: "MongoDB", level: 85, color: "from-green-400 to-green-600" },
        { name: "Firebase", level: 80, color: "from-yellow-500 to-orange-500" },
        { name: "MySQL", level: 78, color: "from-blue-500 to-blue-700" },
      ],
    },
    {
      title: "AI/ML & Tools",
      skills: [
        { name: "Scikit-Learn", level: 80, color: "from-orange-400 to-orange-600" },
        { name: "RAG Pipeline", level: 75, color: "from-purple-400 to-purple-600" },
        { name: "Git & GitHub", level: 90, color: "from-gray-500 to-gray-700" },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="section-container">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
            Technical Skills
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Technologies I've been working with to build amazing products
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div key={category.title} className="glass-card p-6 lg:p-8 space-y-6">
              <h3 className="text-xl font-semibold font-heading text-foreground flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="space-y-2"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center">
                      <span className={`text-sm font-medium transition-colors duration-300 ${
                        hoveredSkill === skill.name ? "text-primary" : "text-foreground"
                      }`}>
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-700 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          boxShadow: hoveredSkill === skill.name 
                            ? "0 0 20px rgba(0, 212, 255, 0.5)" 
                            : "none",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Skill Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {['React', 'Node.js', 'MongoDB', 'Python', 'Flutter', 'AI/ML', 'Firebase', 'Git'].map((tech, i) => (
            <div
              key={tech}
              className="perspective-1000 group"
            >
              <div className="px-6 py-3 glass-card-hover cursor-default transform transition-transform duration-500 group-hover:scale-110">
                <span className="text-foreground font-medium">{tech}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
