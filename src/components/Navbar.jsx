import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Packages", to: "/packages" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Navbar({ navigate, currentPath }) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      width: '100%',
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e7eb',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        height: '64px',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1rem'
      }}>
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
        >
          <div style={{ color: '#f43f5e' }}>
            <Heart size={24} fill="currentColor" />
          </div>
          <span style={{ fontFamily: 'serif', fontSize: '20px', fontWeight: 'bold', color: '#111827' }}>
            Sushma Reddy
          </span>
        </div>

        {/* Desktop Navigation - only show on desktop */}
        {!isMobile && (
          <div style={{ 
            display: 'flex', 
            gap: '32px', 
            alignItems: 'center' 
          }}>
            {navLinks.map((link) => (
              <button
                key={link.to}
                onClick={() => navigate(link.to)}
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: currentPath === link.to ? '#f43f5e' : '#374151',
                  cursor: 'pointer',
                  background: 'none',
                  border: 'none',
                  padding: '8px 0',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => e.target.style.color = '#f43f5e'}
                onMouseLeave={(e) => e.target.style.color = currentPath === link.to ? '#f43f5e' : '#374151'}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => navigate("/booking")}
              style={{
                borderRadius: '9999px',
                backgroundColor: '#f43f5e',
                padding: '8px 20px',
                fontSize: '14px',
                fontWeight: 600,
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#e11d48'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#f43f5e'}
            >
              Book Now
            </button>
          </div>
        )}

        {/* Mobile Menu Button - only show on mobile */}
        {isMobile && (
          <button
            onClick={() => setOpen(!open)}
            style={{
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              color: '#374151'
            }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {/* Mobile Navigation - only show on mobile when open */}
      {isMobile && open && (
        <div style={{
          backgroundColor: 'white',
          borderTop: '1px solid #e5e7eb',
          padding: '24px 16px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {navLinks.map((link) => (
              <button
                key={link.to}
                onClick={() => {
                  navigate(link.to);
                  setOpen(false);
                }}
                style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  color: currentPath === link.to ? '#f43f5e' : '#374151',
                  textAlign: 'left',
                  cursor: 'pointer',
                  background: 'none',
                  border: 'none',
                  padding: '8px 0'
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                navigate("/booking");
                setOpen(false);
              }}
              style={{
                width: 'fit-content',
                borderRadius: '9999px',
                backgroundColor: '#f43f5e',
                padding: '10px 20px',
                fontSize: '14px',
                fontWeight: 600,
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                marginTop: '8px'
              }}
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}