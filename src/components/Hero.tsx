import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      
      {/* Rotating Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-primary/10 rounded-full animate-spin-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-secondary/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
      
      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Available for opportunities
          </div>
          
          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading tracking-tight animate-slide-up">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient">Sai Sharad</span>
            <br />
            <span className="text-foreground">Gaikar</span>
          </h1>
          
          {/* Title */}
          <p className="text-xl sm:text-2xl text-muted-foreground font-light animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-primary">MERN Full Stack Developer</span> | <span className="text-secondary">AI & ML Engineer</span>
          </p>
          
          {/* Tagline */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Building intelligent web & AI-powered products that solve real-world problems.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">
                <ExternalLink className="w-5 h-5" />
                View Projects
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#contact">
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
            </Button>
          </div>
          
          {/* Tech Stack Preview */}
          <div className="flex flex-wrap justify-center gap-3 pt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            {['React', 'Node.js', 'Python', 'MongoDB', 'AI/ML'].map((tech, i) => (
              <span 
                key={tech} 
                className="px-4 py-2 text-sm rounded-lg bg-muted/30 text-muted-foreground border border-border/30 hover:border-primary/30 hover:text-primary transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
