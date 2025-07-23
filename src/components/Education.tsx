import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      institution: "Gopalan College of Engineering & Management",
      degree: "B.E. in Computer Science",
      duration: "2020 - 2024",
      grade: "8.06 CGPA",
      type: "Bachelor's Degree"
    },
    {
      institution: "St. Anne's PU College",
      degree: "Pre-University",
      duration: "2019 - 2020",
      grade: "80%",
      type: "Higher Secondary"
    },
    {
      institution: "St. Anne's High School",
      degree: "State Board",
      duration: "2008 - 2018",
      grade: "83%",
      type: "Secondary Education"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Education</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              My academic journey has provided me with a strong foundation in computer science 
              and software engineering principles.
            </p>
          </div>
          
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-accent" />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-semibold text-primary mb-1">
                            {edu.institution}
                          </h3>
                          <p className="text-lg text-foreground mb-2">{edu.degree}</p>
                          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                            {edu.type}
                          </span>
                        </div>
                        
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-muted-foreground mb-2">
                            <Calendar size={16} />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="text-2xl font-bold text-accent">{edu.grade}</div>
                        </div>
                      </div>
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

export default Education;