import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-tech-primary/10 via-background to-tech-secondary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-tech-primary to-tech-secondary p-1 mb-6">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl font-bold text-primary">
                AS
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent">
              Arijit Sarkar
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Network & Infrastructure Engineer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Passionate about building robust network architectures and scalable infrastructure solutions. 
              Specializing in cloud technologies, network security, and system optimization.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="group">
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all">
              <Github className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all">
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all">
              <Mail className="w-6 h-6" />
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;