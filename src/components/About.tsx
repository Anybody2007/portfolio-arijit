const About = () => {
  return (
    <section className="py-20 bg-tech-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 5 years of experience in network and infrastructure engineering, I've dedicated my career to designing and implementing robust, scalable solutions that power modern enterprises.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans across cloud platforms, network security, automation, and infrastructure optimization. I'm passionate about leveraging cutting-edge technologies to solve complex problems and drive business success.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not architecting networks, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge through technical blogs and community forums.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-semibold mb-2 text-primary">Location</h3>
                <p className="text-muted-foreground">Kolkata, India</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-semibold mb-2 text-primary">Experience</h3>
                <p className="text-muted-foreground">5+ Years</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-semibold mb-2 text-primary">Specialization</h3>
                <p className="text-muted-foreground">Network Architecture & Cloud Infrastructure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;