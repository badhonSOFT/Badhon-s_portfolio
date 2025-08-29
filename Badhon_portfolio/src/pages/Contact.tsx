import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, Phone, MessageCircle, MapPin, Send, Clock, 
  CreditCard, FileText, CheckCircle 
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "badhonroy172@gmail.com",
    href: "mailto:badhonroy172@gmail.com",
    description: "Send me an email anytime"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "01783147171",
    href: "tel:01783147171",
    description: "Call me during business hours"
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Quick Chat",
    href: "https://wa.me/8801783147171",
    description: "Fastest way to reach me"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mohammadpur, Dhaka 1207",
    href: "#",
    description: "Bangladesh"
  }
];

const faqs = [
  {
    question: "What's your typical response time?",
    answer: "I usually respond to emails and messages within 2-4 hours during business days. For urgent projects, WhatsApp is the fastest way to reach me."
  },
  {
    question: "How do we start a new project?",
    answer: "We begin with a discovery call to understand your requirements, then I provide a detailed proposal with timeline and costs. Once approved, we kick off with a 50% advance payment."
  },
  {
    question: "What are your payment milestones?",
    answer: "I work with a 50% advance and 50% on completion model for most projects. For larger projects, we can discuss milestone-based payments."
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer: "Yes, I offer ongoing maintenance and support packages. This includes security updates, content updates, and technical support."
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl animate-fade-in">
              Let's Work Together
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Ready to bring your project to life? Get in touch and let's discuss how I can help you achieve your goals.
            </p>
          </div>
        </section>

        <div className="px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <Card className="shadow-large border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Send me a message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="mt-1"
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full"
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Direct Contact */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Get in touch directly</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {contactInfo.map((info, index) => (
                      <Card 
                        key={info.label}
                        className="group hover:shadow-medium transition-all duration-300 hover:scale-105 transform border-0 shadow-soft"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                            <info.icon className="h-6 w-6 text-primary" />
                          </div>
                          <h4 className="font-semibold text-foreground mb-1">{info.label}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{info.description}</p>
                          {info.href !== "#" ? (
                            <a
                              href={info.href}
                              target={info.href.startsWith("http") ? "_blank" : undefined}
                              rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="text-primary hover:text-primary-hover transition-colors font-medium"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <span className="text-foreground font-medium">{info.value}</span>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Prefer to chat?
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      WhatsApp is the fastest way to get a response from me
                    </p>
                    <Button variant="cta" size="lg" asChild className="w-full">
                      <a href="https://wa.me/8801783147171" target="_blank" rel="noopener noreferrer">
                        Start WhatsApp Chat
                        <MessageCircle className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* FAQ */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h3>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Contact;