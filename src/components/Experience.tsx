import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Java Full Stack Developer",
      company: "Global Quest Technology",
      location: "Remote",
      duration: "2024 - Present",
      type: "Full-time",
      responsibilities: [
        "Developing full-stack web applications using Java, Spring framework, and modern frontend technologies",
        "Collaborating with cross-functional teams to deliver high-quality software solutions",
        "Participating in code reviews and maintaining clean, efficient code standards",
        "Working on database design and optimization for improved application performance"
      ]
    },
    {
      title: "Intern",
      company: "CompSoft Technologies Pvt. Ltd.",
      location: "Remote",
      duration: "2023 - 2024",
      type: "Internship",
      responsibilities: [
        "Worked remotely with a virtual team on coding challenges and real-time projects",
        "Contributed to application testing and evaluation processes",
        "Gathered and implemented user feedback to enhance application performance",
        "Gained hands-on experience with software development lifecycle and team collaboration"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Professional experience building robust applications and working with 
              diverse teams to deliver impactful solutions.
            </p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                        <Briefcase className="w-8 h-8 text-accent" />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-primary mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-foreground mb-2">{exp.company}</p>
                          <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                              <MapPin size={14} />
                              {exp.location}
                            </span>
                            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-muted-foreground lg:text-right">
                          <Calendar size={16} />
                          <span className="font-medium">{exp.duration}</span>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;