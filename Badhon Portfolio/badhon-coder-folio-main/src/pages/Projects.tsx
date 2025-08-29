import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Filter } from "lucide-react";

const allProjects = [
  {
    title: "Deepal",
    description: "Modern corporate website for leading automotive company with responsive design and content management system",
    url: "http://deepal.com.bd/",
    category: "Website",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"]
  },
  {
    title: "GAC",
    description: "Professional business website with custom CMS and modern design patterns",
    url: "https://gac.com.bd/",
    category: "Website",
    tech: ["CodeIgniter", "MySQL", "JavaScript", "CSS3"]
  },
  {
    title: "Ximpul",
    description: "Dynamic business platform with user management and content delivery",
    url: "https://ximpul.com/",
    category: "Website",
    tech: ["PHP", "MySQL", "Bootstrap"]
  },
  {
    title: "Smart VM (SOHUB)",
    description: "Comprehensive vehicle management system with real-time tracking and analytics",
    url: "https://smart-vm.sohub.com.bd/",
    category: "Web App",
    tech: ["CodeIgniter", "MySQL", "Ajax", "Chart.js"]
  },
  {
    title: "SOHUB Connect",
    description: "Business networking platform connecting professionals and organizations",
    url: "https://connect.sohub.com.bd/",
    category: "Web App",
    tech: ["PHP", "MySQL", "REST API", "WebSocket"]
  },
  {
    title: "Farmers Garden BD",
    description: "Full-featured e-commerce platform for agricultural products with payment gateway integration",
    url: "https://www.farmersgardenbd.com/",
    category: "E-commerce",
    tech: ["CodeIgniter", "Payment Gateway", "MySQL", "SSL Commerce"]
  },
  {
    title: "SOHUB Shop",
    description: "Multi-vendor e-commerce solution with inventory management and vendor dashboard",
    url: "https://shop.sohub.com.bd/",
    category: "E-commerce",
    tech: ["PHP", "MySQL", "Payment Integration", "Admin Panel"]
  },
  {
    title: "Tolpar",
    description: "Modern business website with portfolio showcase and service management",
    url: "https://tolpar.com.bd/",
    category: "Website",
    tech: ["PHP", "MySQL", "Responsive Design"]
  }
];

const categories = ["All", "Website", "Web App", "E-commerce"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredProjects = selectedCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl animate-fade-in">
              My Projects
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              A comprehensive showcase of websites, web applications, and e-commerce solutions I've built
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="px-6 lg:px-8 mb-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap justify-center gap-4">
              <Filter className="h-5 w-5 text-muted-foreground mt-2" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.title}
                  className="group hover:shadow-large transition-all duration-300 hover:scale-105 transform border-0 shadow-soft overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-6">
                      {project.tech.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="text-xs px-2 py-0.5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button
                      variant="hero-outline"
                      size="sm"
                      asChild
                      className="w-full"
                    >
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        View Live Project
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Projects;