import { useData } from "@/hooks/useData";

const About = () => {
  const { data, loading } = useData();

  if (loading || !data) return null;
  return (
    <section className="py-20 bg-tech-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {data.about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="space-y-4">
              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-semibold mb-2 text-primary">Location</h3>
                <p className="text-muted-foreground">{data.personal.location}</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-semibold mb-2 text-primary">Experience</h3>
                <p className="text-muted-foreground">{data.personal.experience}</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-semibold mb-2 text-primary">Specialization</h3>
                <p className="text-muted-foreground">{data.personal.specialization}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;