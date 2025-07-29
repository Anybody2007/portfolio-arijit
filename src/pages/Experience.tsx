import Navigation from "@/components/Navigation";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Network Engineer",
      company: "TechCorp Solutions",
      location: "Kolkata, India",
      period: "2022 - Present",
      description: "Leading network infrastructure projects and cloud migrations for enterprise clients. Managing a team of 8 engineers and overseeing critical infrastructure deployments.",
      achievements: [
        "Successfully migrated 200+ servers to cloud infrastructure with zero downtime",
        "Reduced network latency by 40% through strategic infrastructure optimization",
        "Led implementation of SD-WAN solution across 15 branch offices",
        "Designed disaster recovery plan achieving 99.9% uptime SLA"
      ],
      technologies: ["AWS", "Cisco", "SD-WAN", "Terraform", "Kubernetes"]
    },
    {
      title: "Network Infrastructure Specialist",
      company: "CloudFirst Inc",
      location: "Mumbai, India",
      period: "2020 - 2022",
      description: "Specialized in cloud networking and infrastructure automation. Responsible for designing scalable network architectures and implementing security best practices.",
      achievements: [
        "Implemented automated network provisioning reducing deployment time by 60%",
        "Designed multi-cloud connectivity solution for hybrid infrastructure",
        "Achieved cost reduction of 35% through infrastructure optimization",
        "Established network monitoring and alerting systems"
      ],
      technologies: ["Azure", "AWS", "Python", "Ansible", "Network Security"]
    },
    {
      title: "Junior Network Engineer",
      company: "SecureNet Systems",
      location: "Kolkata, India",
      period: "2019 - 2020",
      description: "Started career focusing on network configuration, troubleshooting, and security implementations. Gained hands-on experience with enterprise networking equipment.",
      achievements: [
        "Configured and maintained network infrastructure for 50+ clients",
        "Implemented network security policies and firewall configurations",
        "Reduced network incidents by 45% through proactive monitoring",
        "Completed Cisco CCNA and security certifications"
      ],
      technologies: ["Cisco", "Network Security", "Firewalls", "VPN", "Network Monitoring"]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-PSA-123456"
    },
    {
      name: "Cisco Certified Network Professional (CCNP)",
      issuer: "Cisco",
      date: "2022",
      credentialId: "CCNP-123456"
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credentialId: "CKA-123456"
    },
    {
      name: "Microsoft Azure Network Engineer Associate",
      issuer: "Microsoft",
      date: "2021",
      credentialId: "AZ-700-123456"
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
                {experiences.map((exp, index) => (
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
            
            {/* Certifications */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent">
                Certifications
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                    <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-primary">Issued: {cert.date}</span>
                      <span className="text-muted-foreground">ID: {cert.credentialId}</span>
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