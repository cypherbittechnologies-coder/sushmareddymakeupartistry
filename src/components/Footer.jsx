import { Heart, Mail, Phone, MapPin } from "lucide-react";

export function Footer({ navigate }) {
  const Link = ({ to, children, className }) => {
    return (
      <a
        href={to}
        onClick={(e) => {
          e.preventDefault();
          navigate(to);
        }}
        className={className}
      >
        {children}
      </a>
    );
  };

  return (
    <footer className="border-t border-rose-200/40 bg-rose-50/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" fill="currentColor" />
              <span className="font-serif text-lg font-bold text-foreground">
                Sushma Reddy
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Award-winning makeup artist specializing in bridal, editorial, and
              occasion makeup. Creating timeless beauty since 2015.
            </p>
            <div className="mt-4 flex gap-4">
              {/* Instagram Logo - using CDN image */}
              <a 
                href="https://instagram.com/makeupbysushmareddy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/instagram.svg" 
                  alt="Instagram" 
                  className="h-5 w-5"
                />
              </a>
              
              {/* Facebook Logo - using CDN image */}
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/facebook.svg" 
                  alt="Facebook" 
                  className="h-5 w-5"
                />
              </a>
              
              {/* YouTube Logo - using CDN image */}
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:opacity-80 transition-opacity"
                aria-label="YouTube"
              >
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/youtube.svg" 
                  alt="YouTube" 
                  className="h-5 w-5"
                />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/packages" className="hover:text-primary transition-colors">Packages</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/booking" className="hover:text-primary transition-colors">Book Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-foreground">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                +91 93986 35565
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                connect@makeupbysushmareddy.in
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>12B, Banjara Hills Road No. 10, Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-rose-200/40 pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Sushma Reddy Makeup Artistry. All rights reserved.
        </div>
      </div>
    </footer>
  );
}