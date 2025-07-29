import Navigation from "@/components/Navigation";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useData } from "@/hooks/useData";

const Projects = () => {
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
                My Projects
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A collection of network infrastructure and cloud engineering projects that showcase my expertise 
                in designing scalable, secure, and efficient solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.projects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
                >
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                        {project.category}
                      </span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Tag className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-tech-surface text-xs px-2 py-1 rounded text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 pt-4 border-t border-border">
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;