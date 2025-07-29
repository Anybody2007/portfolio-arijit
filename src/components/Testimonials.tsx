import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "IT Director",
      company: "TechCorp Solutions",
      content: "Arijit's expertise in network architecture was instrumental in our digital transformation. His attention to detail and proactive approach ensured our migration was seamless and secure.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "CloudFirst Inc",
      content: "Working with Arijit was exceptional. His deep understanding of cloud infrastructure and automation helped us reduce operational costs by 35% while improving system reliability.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Project Manager",
      company: "SecureNet Systems",
      content: "Arijit's leadership during our network security overhaul was outstanding. He delivered the project on time and exceeded our security compliance requirements.",
      rating: 5
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent">
          What People Say
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 relative group"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              
              <div className="mb-4">
                <div className="flex space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">{testimonial.content}</p>
              </div>
              
              <div className="border-t border-border pt-4">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="text-sm text-primary">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;