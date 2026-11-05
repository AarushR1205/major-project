import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-background">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-foreground/60 text-sm">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
            <Twitter size={20} />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
