import Navigation from "@/components/Navigation";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blogs = () => {
  const blogPosts = [
    {
      title: "Implementing Zero-Trust Network Architecture in Enterprise Environments",
      excerpt: "A comprehensive guide to designing and implementing zero-trust security models for modern enterprise networks, including practical challenges and solutions.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Network Security",
      tags: ["Zero Trust", "Security", "Enterprise", "Network Design"],
      featured: true
    },
    {
      title: "Multi-Cloud Networking: Best Practices and Pitfalls to Avoid",
      excerpt: "Exploring the complexities of connecting multiple cloud providers while maintaining security, performance, and cost efficiency.",
      date: "2023-12-20",
      readTime: "6 min read",
      category: "Cloud Infrastructure",
      tags: ["Multi-Cloud", "AWS", "Azure", "Networking"]
    },
    {
      title: "Automating Network Infrastructure with Infrastructure as Code",
      excerpt: "How to leverage Terraform and Ansible to automate network provisioning and configuration management at scale.",
      date: "2023-11-28",
      readTime: "10 min read",
      category: "Automation",
      tags: ["IaC", "Terraform", "Ansible", "Automation"]
    },
    {
      title: "SD-WAN Implementation: A Real-World Case Study",
      excerpt: "Lessons learned from implementing SD-WAN across 15 branch offices, including performance improvements and cost savings achieved.",
      date: "2023-10-15",
      readTime: "7 min read",
      category: "Network Infrastructure",
      tags: ["SD-WAN", "Case Study", "Performance", "Cost Optimization"]
    },
    {
      title: "Kubernetes Networking Deep Dive: CNI Plugins Comparison",
      excerpt: "An in-depth analysis of popular CNI plugins including Calico, Cilium, and Flannel, with performance benchmarks and use case recommendations.",
      date: "2023-09-22",
      readTime: "12 min read",
      category: "Container Networking",
      tags: ["Kubernetes", "CNI", "Container Networking", "Performance"]
    },
    {
      title: "Network Monitoring and Observability: Tools and Strategies",
      excerpt: "Building comprehensive network monitoring solutions using modern observability tools and practices for proactive infrastructure management.",
      date: "2023-08-18",
      readTime: "9 min read",
      category: "Monitoring",
      tags: ["Monitoring", "Observability", "Network Management", "Tools"]
    }
  ];

  const categories = ["All", "Network Security", "Cloud Infrastructure", "Automation", "Network Infrastructure", "Container Networking", "Monitoring"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent">
                Technical Blog
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Sharing insights, experiences, and best practices in network engineering, 
                cloud infrastructure, and emerging technologies.
              </p>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category, index) => (
                <Button 
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className="mb-2"
                >
                  {category}
                </Button>
              ))}
            </div>
            
            {/* Featured Post */}
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <div key={index} className="mb-16">
                <div className="bg-gradient-to-r from-tech-primary/10 to-tech-secondary/10 p-8 rounded-lg border border-primary/20 mb-8">
                  <div className="max-w-4xl mx-auto">
                    <span className="inline-block bg-primary text-primary-foreground text-sm px-3 py-1 rounded mb-4">
                      Featured Post
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2" />
                        {post.readTime}
                      </div>
                      <span className="bg-primary/10 text-primary text-sm px-2 py-1 rounded">
                        {post.category}
                      </span>
                    </div>
                    
                    <Button className="group">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <article 
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group cursor-pointer"
                >
                  <div className="mb-4">
                    <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-tech-surface text-xs px-2 py-1 rounded text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </article>
              ))}
            </div>
            
            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blogs;