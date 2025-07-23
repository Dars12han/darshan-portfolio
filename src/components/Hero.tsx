import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/darshan.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-6">
              <div>
                <p className="text-accent-foreground/80 text-lg mb-2">Hello, I'm</p>
                <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
                  Darshan Gowda K
                </h1>
                <h2 className="text-2xl md:text-3xl text-accent font-semibold mb-4">
                  Java Full Stack Developer
                </h2>
                <p className="text-lg text-primary-foreground/90 max-w-2xl">
                  Creating impactful digital experiences through innovative code.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => scrollToSection("projects")}
                  className="group"
                >
                  View My Work
                  <ArrowDown size={20} className="ml-2 group-hover:translate-y-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="border-primary-foreground/20 text-dark hover:bg-primary-foreground hover:text-dark"
                >
                  Contact Me
                </Button>
              </div>
              
              <div className="flex gap-6 justify-center lg:justify-start pt-6">
                <a
                  href="darshandachu913@gmail.com"
                  className="text-primary-foreground/70 hover:text-accent transition-fast"
                >
                  <Mail size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/darshan-gowda-k-117572288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                  className="text-primary-foreground/70 hover:text-accent transition-fast"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/Dars12han?tab=repositories"
                  className="text-primary-foreground/70 hover:text-accent transition-fast"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-strong">
                <img
                  src={profileImage}
                  alt="Darshan Gowda K"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary-foreground/60" size={32} />
      </div>
    </section>
  );
};

export default Hero;