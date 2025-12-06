import { ExternalLink, Github, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "AuraConnect",
      subtitle: "Beauty Parlour & Appointment Booking System",
      type: "Sponsored Project",
      description: "A comprehensive beauty service management platform with real-time appointment booking, secure authentication, and admin dashboard.",
      techStack: ["MongoDB", "Express", "React", "Node.js"],
      features: [
        "Online service browsing",
        "Real-time appointment booking",
        "Secure authentication",
        "Admin service management",
        "Responsive modern UI",
      ],
      gradient: "from-pink-500 via-purple-500 to-indigo-500",
      accent: "pink",
    },
    {
      title: "HomeEZ",
      subtitle: "Home Service Management System",
      type: "Mobile App",
      description: "A Flutter-based mobile application connecting customers with service providers, featuring dual authentication and real-time tracking.",
      techStack: ["Flutter", "Firebase", "Dart"],
      features: [
        "Dual authentication system",
        "Role-based access control",
        "Service booking & tracking",
        "Real-time Firebase updates",
        "Mobile-first clean UI",
      ],
      gradient: "from-cyan-500 via-blue-500 to-purple-500",
      accent: "cyan",
    },
    {
      title: "RAG AI Teaching Assistant",
      subtitle: "Intelligent Learning Platform",
      type: "AI/ML Project",
      description: "An AI-powered teaching assistant using Retrieval-Augmented Generation for accurate, context-aware academic responses.",
      techStack: ["Python", "NLP", "Vector Database", "RAG"],
      features: [
        "RAG pipeline architecture",
        "Semantic document search",
        "AI-generated responses",
        "Topic-level explanations",
        "Academic document processing",
      ],
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      accent: "emerald",
    },
  ];

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="section-container">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Featured Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading">
            Projects That <span className="text-gradient">Define Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of my best work, blending creativity with technical excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group perspective-1000"
            >
              <div className="relative glass-card-hover p-6 lg:p-8 space-y-6 h-full preserve-3d">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Project Type Badge */}
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.gradient} text-white`}>
                    {project.type}
                  </span>
                </div>

                {/* Title */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-heading text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-lg bg-muted/50 text-muted-foreground border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {project.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Action */}
                <div className="pt-4">
                  <Button variant="outline" size="sm" className="w-full group/btn">
                    <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                    View Details
                  </Button>
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
