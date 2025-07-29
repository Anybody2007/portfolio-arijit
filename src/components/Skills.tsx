import { Cloud, Network, Shield, Server, Code, Database } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Network,
      title: "Network Technologies",
      skills: ["Cisco Routing & Switching", "BGP/OSPF", "MPLS", "SD-WAN", "Network Monitoring", "Load Balancing"]
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      skills: ["AWS", "Azure", "Google Cloud", "Terraform", "CloudFormation", "Kubernetes"]
    },
    {
      icon: Shield,
      title: "Security",
      skills: ["Firewall Configuration", "VPN", "Network Security", "Threat Analysis", "Compliance", "Identity Management"]
    },
    {
      icon: Server,
      title: "Infrastructure",
      skills: ["Linux Administration", "Windows Server", "VMware", "Docker", "Monitoring Tools", "Backup Solutions"]
    },
    {
      icon: Code,
      title: "Automation",
      skills: ["Python", "Bash Scripting", "Ansible", "Jenkins", "CI/CD", "Infrastructure as Code"]
    },
    {
      icon: Database,
      title: "Data & Analytics",
      skills: ["Network Analytics", "Performance Monitoring", "Log Analysis", "Grafana", "Prometheus", "ELK Stack"]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold ml-3">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-tech-surface px-3 py-2 rounded text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;