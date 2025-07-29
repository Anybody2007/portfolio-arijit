import { Award, TrendingUp, Users, CheckCircle } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Award,
      title: "AWS Certified Solutions Architect",
      description: "Professional level certification demonstrating expertise in designing distributed systems on AWS",
      year: "2023"
    },
    {
      icon: TrendingUp,
      title: "Network Performance Optimization",
      description: "Achieved 40% improvement in network performance for enterprise clients through infrastructure redesign",
      year: "2023"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Successfully led a team of 8 engineers in migrating critical infrastructure to cloud",
      year: "2022"
    },
    {
      icon: CheckCircle,
      title: "Zero Downtime Migration",
      description: "Orchestrated seamless migration of 200+ servers with zero business impact",
      year: "2022"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "99.9%", label: "Uptime Achieved" },
    { number: "200+", label: "Servers Managed" },
    { number: "5+", label: "Years Experience" }
  ];

  return (
    <section className="py-20 bg-tech-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent">
          Achievements & Impact
        </h2>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Achievements */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{achievement.title}</h3>
                      <span className="text-sm text-muted-foreground">{achievement.year}</span>
                    </div>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;