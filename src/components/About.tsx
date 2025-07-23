import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, Smartphone } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-accent" />,
      title: "Full Stack Development",
      description: "Building end-to-end solutions with Java and modern web technologies"
    },
    {
      icon: <Database className="w-8 h-8 text-accent" />,
      title: "Database Design",
      description: "Expert in MySQL with strong foundation in data modeling and optimization"
    },
    {
      icon: <Globe className="w-8 h-8 text-accent" />,
      title: "Web Technologies",
      description: "Proficient in HTML, CSS, JavaScript, and responsive design principles"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-accent" />,
      title: "Problem Solving",
      description: "Passionate about tackling real-world challenges through innovative solutions"
    }
  ];

  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a curious and driven individual with a passion for problem-solving and continuous learning. 
                I enjoy exploring new technologies, building creative solutions, and collaborating with others 
                to bring ideas to life.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a strong interest in software development and system design, I'm always eager to tackle 
                real-world challenges through innovative code. My goal is to create user-friendly, technically 
                robust digital solutions that make a meaningful impact.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Outside of work, I enjoy playing games, listening to music, and staying active. I believe 
                that maintaining a healthy work-life balance is essential for creativity and productivity.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Email</h4>
                  <p className="text-muted-foreground">darshandachu913@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Phone</h4>
                  <p className="text-muted-foreground">+91 7483984465</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      {highlight.icon}
                    </div>
                    <h3 className="font-semibold text-primary mb-2">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;