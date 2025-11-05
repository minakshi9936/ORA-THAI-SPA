import { Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2 text-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex flex-wrap items-center gap-4 md:gap-6 justify-center md:justify-start">
          <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="h-4 w-4" />
            <span>+91-6389202030</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>123, citywitty office</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
            <Twitter className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
