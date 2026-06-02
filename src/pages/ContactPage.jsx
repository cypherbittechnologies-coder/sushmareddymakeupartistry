import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Form data would be sent to an API endpoint here
    console.log("Form submitted");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We would love to hear from you. Reach out for bookings, inquiries, or just to say hello.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="rounded-2xl border border-rose-200/40 bg-card p-6">
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Contact Information
            </h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Phone</p>
                  <p className="text-sm text-muted-foreground">+91 93986 35565</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">connect@makeupbysushmareddy.in</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Studio</p>
                  <p className="text-sm text-muted-foreground">
                    12B, Banjara Hills Road No. 10, Hyderabad, India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Working Hours</p>
                  <p className="text-sm text-muted-foreground">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sunday: By Appointment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="rounded-2xl border border-rose-200/40 bg-card p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Follow Us
              </h3>
              <div className="flex gap-3">
                {/* Instagram */}
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
                    className="h-6 w-6"
                  />
                </a>
                {/* Facebook */}
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
                    className="h-6 w-6"
                  />
                </a>
                {/* YouTube */}
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
                    className="h-6 w-6"
                  />
                </a>
              </div>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Stay updated with our latest work, tutorials, and behind-the-scenes content.
            </p>
            <a
              href="https://instagram.com/makeupbysushmareddy"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              <img 
                src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/instagram.svg" 
                alt="Instagram" 
                className="h-5 w-5"
              />
              @makeupbysushmareddy
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl border border-rose-200/40 bg-card p-6">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-50 text-primary">
                <Send className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Message Sent!
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Thank you for reaching out. We will get back to you within 24 hours.
              </p>
              <a
                href="https://instagram.com/makeupbysushmareddy"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm text-rose-600 hover:text-rose-700"
              >
                Follow us on Instagram for updates →
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Send a Message
              </h3>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Name</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-xl border border-rose-200 bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-xl border border-rose-200 bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Phone</label>
                <input
                  type="tel"
                  className="w-full rounded-xl border border-rose-200 bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="+91"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full rounded-xl border border-rose-200 bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Tell us about your event..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-rose-600"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;