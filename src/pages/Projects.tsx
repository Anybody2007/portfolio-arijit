import Navigation from "@/components/Navigation";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Enterprise Network Redesign",
      description: "Complete network infrastructure overhaul for a 500+ employee company, implementing SD-WAN and improving performance by 40%.",
      technologies: ["Cisco", "SD-WAN", "BGP", "MPLS", "Network Monitoring"],
      date: "2023",
      status: "Completed",
      category: "Network Infrastructure"
    },
    {
      title: "Cloud Migration Project",
      description: "Migrated on-premise infrastructure to AWS, implementing auto-scaling and reducing operational costs by 35%.",
      technologies: ["AWS", "Terraform", "Kubernetes", "Docker", "CloudFormation"],
      date: "2023",
      status: "Completed",
      category: "Cloud Infrastructure"
    },
    {
      title: "Network Security Implementation",
      description: "Designed and implemented comprehensive network security architecture including firewalls, IDS/IPS, and threat monitoring.",
      technologies: ["Palo Alto", "Splunk", "Network Security", "Threat Analysis"],
      date: "2022",
      status: "Completed",
      category: "Security"
    },
    {
      title: "Automated Infrastructure Deployment",
      description: "Built CI/CD pipeline for infrastructure deployment using Infrastructure as Code principles.",
      technologies: ["Ansible", "Jenkins", "Python", "Terraform", "Git"],
      date: "2022",
      status: "Completed",
      category: "Automation"
    },
    {
      title: "Multi-Cloud Connectivity",
      description: "Established secure connectivity between AWS, Azure, and on-premise infrastructure with redundant failover mechanisms.",
      technologies: ["AWS", "Azure", "VPN", "Direct Connect", "Network Architecture"],
      date: "2021",
      status: "Completed",
      category: "Network Architecture"
    },
    {
      title: "IoT Network Design",
      description: "Designed scalable IoT network infrastructure for manufacturing facility with 1000+ connected devices.",
      technologies: ["IoT", "Network Segmentation", "Edge Computing", "MQTT"],
      date: "2021",
      status: "Completed",
      category: "IoT Infrastructure"
    }
  ];

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
              {projects.map((project, index) => (
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