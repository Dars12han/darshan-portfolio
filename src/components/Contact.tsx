import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "darshandachu913@gmail.com",
      href: "mailto:darshandachu913@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 7483984465",
      href: "tel:+917483984465"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Karnataka, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/darshan-gowda-k-117572288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
      color: "hover:text-blue-600"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/Dars12han?tab=repositories",
      color: "hover:text-gray-800"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      href: "mailto:darshandachu913@gmail.com",
      color: "hover:text-red-600"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Let's Make Something Amazing Together</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's discuss how we can bring your ideas to life.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-6">Get In Touch</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and development. Feel free to reach out!
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <div className="text-accent">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{info.title}</h4>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-accent transition-fast"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="pt-8">
                <h4 className="font-semibold text-primary mb-4">Connect With Me</h4>
                <div className="flex gap-4 justify-center">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground transition-fast ${social.color}`}
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;