import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "AI/ML Intern",
      company: "IBM SkillsBuild with CSRBOX",
      location: "Remote",
      period: "2024",
      description: "Built and integrated an AI chatbot into the company website, achieving 90%+ intent detection accuracy using NLP techniques.",
      highlights: ["AI Chatbot Development", "90%+ Accuracy", "NLP Integration"],
    },
    {
      type: "work",
      title: "Web Developer Intern",
      company: "IBM SkillsBuild",
      location: "Remote",
      period: "2024",
      description: "Worked on frontend and backend development for real-world projects, gaining hands-on experience with modern web technologies.",
      highlights: ["Frontend Development", "Backend APIs", "Real-world Projects"],
    },
  ];

  const education = {
    degree: "Bachelor of Engineering",
    field: "Computer Science (AIML)",
    university: "University of Mumbai",
    college: "Finolex Academy Of Management and Technology",
    location: "Ratnagiri, Maharashtra",
    period: "2022 - 2026",
    cgpa: "7.0 / 10",
  };

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="section-container">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Journey
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold font-heading flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-primary" />
              Work Experience
            </h3>
            
            <div className="relative space-y-8 pl-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary before:via-secondary before:to-transparent">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background glow-cyan" />
                  
                  <div className="glass-card-hover p-6 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                      <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span key={highlight} className="px-3 py-1 text-xs rounded-lg bg-muted/50 text-foreground border border-border/50">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold font-heading flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-secondary" />
              Education
            </h3>
            
            <div className="glass-card p-8 space-y-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="text-xl font-semibold text-foreground">{education.degree}</h4>
                  <p className="text-primary font-medium">{education.field}</p>
                </div>
                <span className="px-4 py-2 rounded-xl bg-secondary/10 text-secondary font-semibold">
                  CGPA: {education.cgpa}
                </span>
              </div>
              
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  {education.college}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {education.university}, {education.location}
                </p>
                <p className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {education.period}
                </p>
              </div>

              {/* Decorative Element */}
              <div className="relative pt-6">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-xl" />
                <div className="relative p-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    Currently in <span className="text-foreground font-medium">Final Year</span> • Expected Graduation <span className="text-primary font-medium">2026</span>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
