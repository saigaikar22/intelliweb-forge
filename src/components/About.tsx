import { User, Target, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: User,
      title: "Computer Science Student",
      description: "AIML specialization, graduating in 2026 from University of Mumbai",
    },
    {
      icon: Target,
      title: "Full Stack Focus",
      description: "Strong expertise in MERN stack and modern web development",
    },
    {
      icon: Lightbulb,
      title: "AI & Data Science",
      description: "Building intelligent solutions with machine learning and NLP",
    },
    {
      icon: Rocket,
      title: "Startup Mindset",
      description: "Aspiring to create impactful SaaS and tech products",
    },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                About Me
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                Crafting the Future with{" "}
                <span className="text-gradient">Code & AI</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a passionate <span className="text-foreground font-medium">Computer Science (AIML)</span> student 
                based in Maharashtra, India, with a deep love for building products that make a difference.
              </p>
              <p>
                My journey spans from crafting beautiful, responsive web applications to developing 
                intelligent AI systems. I believe in the power of technology to solve real-world 
                problems and create meaningful impact.
              </p>
              <p>
                Currently focused on <span className="text-primary">Full Stack Development</span> and{" "}
                <span className="text-secondary">Machine Learning</span>, I'm always exploring new 
                technologies and pushing the boundaries of what's possible.
              </p>
            </div>
          </div>
          
          {/* Right Column - Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card-hover p-6 space-y-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold font-heading text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
