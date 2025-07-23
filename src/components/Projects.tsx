import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Car, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Car Service System",
      year: "2024",
      description: "A comprehensive web application designed to manage car service bookings and customer records efficiently.",
      technologies: ["Java", "JDBC", "Servlet", "MySQL", "HTML", "CSS"],
      features: [
        "Add/edit car details and request service bookings",
        "Track service status in real-time",
        "Submit and manage customer feedback",
        "Admin dashboard for booking management",
        "Service updates and feedback review system"
      ],
      icon: <Car className="w-8 h-8" />,
      type: "Web Application",
      status: "Completed"
    },
    {
      title: "Inimitable Electric",
      year: "2024",
      description: "Live commercial website for electrical services company, featuring modern design and user-friendly interface.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      features: [
        "Responsive design for all devices",
        "Service portfolio showcase",
        "Contact and inquiry forms",
        "SEO optimized structure",
        "Professional business presentation"
      ],
      icon: <Zap className="w-8 h-8" />,
      type: "Commercial Website",
      status: "Live",
      liveUrl: "https://www.inimitableelectric.com/"
    }
  ];

  return (
    <section id="projects" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">My Projects</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Here are some of the projects I have worked on recently. Each project represents 
              a unique challenge and demonstrates different aspects of my technical skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {/* Project Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
                          <div className="text-accent">
                            {project.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                          <p className="text-muted-foreground">{project.year}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <span className={`px-3 py-1 text-xs rounded-full ${
                          project.status === 'Live' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {project.status}
                        </span>
                        <span className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full">
                          {project.type}
                        </span>
                      </div>
                    </div>
                    
                    {/* Project Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                        {project.features.length > 3 && (
                          <li className="text-sm text-muted-foreground ml-5">
                            +{project.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      {project.liveUrl && (
                        <Button asChild variant="default" size="sm">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} className="mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">More projects coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
