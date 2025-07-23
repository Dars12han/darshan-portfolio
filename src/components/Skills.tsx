import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, Layers } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Java"],
      color: "bg-blue-500"
    },
    {
      title: "Frameworks",
      icon: <Layers className="w-6 h-6" />,
      skills: ["JDBC", "Servlets", "JSP", "Hibernate", "Spring"],
      color: "bg-green-500"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "CRUD Operations", "Joins", "Sub-queries", "ER Modeling"],
      color: "bg-purple-500"
    },
    {
      title: "Frontend Technologies",
      icon: <Globe className="w-6 h-6" />,
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Skills</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit of technologies and frameworks that I use to build 
              robust and scalable applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-accent">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-4">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${category.color}`}></div>
                        <span className="text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Additional Skills Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-primary text-center mb-8">Technical Proficiencies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                "Java", "Spring Boot", "Hibernate", "MySQL", "JavaScript",
                "HTML5", "CSS3", "Bootstrap", "JDBC", "Servlets",
                "JSP", "Git", "RESTful APIs", "MVC Architecture", "Responsive Design"
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-muted rounded-lg px-4 py-3 text-center text-sm font-medium text-muted-foreground hover:bg-accent/10 hover:text-accent transition-fast"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;