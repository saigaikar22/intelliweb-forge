import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sai Sharad Gaikar | Full Stack Developer & AI/ML Engineer</title>
        <meta 
          name="description" 
          content="Portfolio of Sai Sharad Gaikar - MERN Full Stack Developer, AI & ML Engineer, and aspiring tech entrepreneur from Maharashtra, India. Building intelligent web & AI-powered products." 
        />
        <meta name="keywords" content="Sai Sharad Gaikar, Full Stack Developer, AI Engineer, ML Engineer, MERN Stack, React, Node.js, Python, Portfolio" />
        <meta property="og:title" content="Sai Sharad Gaikar | Full Stack Developer & AI/ML Engineer" />
        <meta property="og:description" content="Building intelligent web & AI-powered products that solve real-world problems." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://saisharadgaikar.dev" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
