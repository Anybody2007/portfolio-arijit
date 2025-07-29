import Navigation from "@/components/Navigation";
import { Calendar, MapPin, Building } from "lucide-react";
import { useData } from "@/hooks/useData";

const Experience = () => {
  const { data, loading } = useData();

  if (loading || !data) return <div className="min-h-screen flex items-center justify-center"><div className="text-primary">Loading...</div></div>;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent">
                Work Experience
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                My professional journey in network and infrastructure engineering, showcasing growth, 
                achievements, and the impact I've made across different organizations.
              </p>
            </div>
            
            {/* Experience Timeline */}
            <div className="max-w-4xl mx-auto mb-20">
              <div className="space-y-12">
                {data.experience.map((exp, index) => (
                  <div key={index} className="relative">
                    <div className="bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                          <div className="flex items-center space-x-4 text-muted-foreground mb-2">
                            <div className="flex items-center">
                              <Building className="w-4 h-4 mr-2" />
                              {exp.company}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center text-primary font-medium">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6">{exp.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="bg-tech-surface px-3 py-1 rounded text-sm text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;