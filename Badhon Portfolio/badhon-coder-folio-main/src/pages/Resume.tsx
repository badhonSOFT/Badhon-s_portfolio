import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Phone, MapPin, ExternalLink, GraduationCap, Briefcase, Award } from "lucide-react";

const experiences = [
  {
    title: "Freelance Software Engineer",
    company: "Self-Employed",
    period: "2020 - Present",
    location: "Dhaka, Bangladesh",
    type: "Freelance",
    achievements: [
      "Developed 15+ websites and web applications for various clients",
      "Specialized in CodeIgniter, React, and PHP-based solutions",
      "Built e-commerce platforms with payment gateway integration",
      "Customized Vtiger CRM for multiple business clients",
      "Maintained 98% client satisfaction rate with rapid delivery"
    ]
  }
];

const projects = [
  { name: "Deepal Corporate Website", url: "http://deepal.com.bd/" },
  { name: "GAC Business Platform", url: "https://gac.com.bd/" },
  { name: "Smart VM Web Application", url: "https://smart-vm.sohub.com.bd/" },
  { name: "Farmers Garden E-commerce", url: "https://www.farmersgardenbd.com/" },
  { name: "SOHUB Connect Platform", url: "https://connect.sohub.com.bd/" }
];

const skills = {
  "Programming Languages": ["PHP", "JavaScript", "TypeScript", "SQL"],
  "Frameworks & Libraries": ["CodeIgniter", "React", "Laravel", "jQuery"],
  "Frontend Technologies": ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  "Backend & Database": ["MySQL", "MongoDB", "REST APIs", "Ajax"],
  "Tools & Technologies": ["Git", "Docker", "Linux", "cPanel"]
};

const Resume = () => {
  const handleDownload = () => {
    // This would trigger a download of the PDF version
    window.open('/resume-badhon-roy.pdf', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      
      <main className="pt-16">
        {/* Header */}
        <section className="py-12 px-6 lg:px-8 bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">Badhon Kumar Roy</h1>
                <p className="text-xl text-primary font-semibold mb-4">Software Engineer</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    badhonroy172@gmail.com
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    01783147171
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Mohammadpur, Dhaka 1207
                  </div>
                </div>
              </div>
              <Button variant="hero" onClick={handleDownload} className="mt-4 lg:mt-0">
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </Button>
            </div>
          </div>
        </section>

        <div className="px-6 lg:px-8 py-12">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Professional Summary */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <Award className="mr-3 h-6 w-6 text-primary" />
                Professional Summary
              </h2>
              <Card className="shadow-soft border-0">
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Experienced Software Engineer with 4+ years of expertise in web development, 
                    specializing in CodeIgniter, React, and PHP-based solutions. Proven track record 
                    of delivering clean, scalable web applications and e-commerce platforms for SMEs. 
                    Strong focus on rapid delivery without compromising quality, with extensive 
                    experience in CRM customization and business platform development.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <Briefcase className="mr-3 h-6 w-6 text-primary" />
                Professional Experience
              </h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="shadow-soft border-0">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                          <p className="text-sm text-muted-foreground">{exp.location}</p>
                        </div>
                        <div className="flex flex-col lg:items-end mt-2 lg:mt-0">
                          <Badge variant="secondary" className="w-fit">{exp.period}</Badge>
                          <Badge variant="outline" className="w-fit mt-1">{exp.type}</Badge>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-muted-foreground flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-primary" />
                Education
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-soft border-0">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      B.Sc. in Computer Science & Engineering
                    </h3>
                    <p className="text-primary font-medium mb-1">World University of Bangladesh</p>
                    <p className="text-sm text-muted-foreground">2020 - 2024</p>
                  </CardContent>
                </Card>
                <Card className="shadow-soft border-0">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Diploma in Computer Science & Engineering
                    </h3>
                    <p className="text-primary font-medium mb-1">Kurigram Polytechnic Institute</p>
                    <p className="text-sm text-muted-foreground">2017 - 2020</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <Card key={category} className="shadow-soft border-0">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">{category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Key Projects */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Key Projects</h2>
              <Card className="shadow-soft border-0">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.map((project, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                        <span className="font-medium text-foreground">{project.name}</span>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-hover transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Resume;