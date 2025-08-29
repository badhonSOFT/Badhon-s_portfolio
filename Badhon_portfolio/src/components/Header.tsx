import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Resume", href: "/resume" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 glass-card backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold hero-gradient bg-clip-text text-transparent">Badhon Roy</span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium leading-6 transition-all duration-300 hover:text-primary relative px-3 py-2 rounded-xl ${
                location.pathname === item.href
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:bg-primary/5"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <ThemeToggle />
          <Button asChild variant="cta" size="lg" className="rounded-full shadow-large">
            <a href="https://wa.me/8801783147171" target="_blank" rel="noopener noreferrer">
              Let's Talk
            </a>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto glass-card backdrop-blur-xl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border/20">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="text-xl font-bold hero-gradient bg-clip-text text-transparent">Badhon Roy</span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="-m-2.5 rounded-xl p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border/20">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`-mx-3 block rounded-xl px-3 py-3 text-base font-medium leading-7 transition-all duration-300 ${
                        location.pathname === item.href
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:bg-muted"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Button asChild variant="cta" className="w-full rounded-full shadow-large">
                    <a href="https://wa.me/8801783147171" target="_blank" rel="noopener noreferrer">
                      Let's Talk on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}