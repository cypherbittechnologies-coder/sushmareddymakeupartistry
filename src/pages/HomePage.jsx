import React from "react";
import { ArrowRight, Sparkles, Calendar, Star, Clock } from "lucide-react";
import { services, packages, portfolioItems } from "../lib/data";
import heroImg from "../assets/hero.jpg";
import portfolio1 from "../assets/portfolio1.jpg";
import portfolio2 from "../assets/portfolio2.jpg";
import portfolio3 from "../assets/portfolio3.jpg";
import portfolio4 from "../assets/portfolio4.jpg";
import portfolio5 from "../assets/portfolio5.jpg";
import aboutImg from "../assets/about.jpg";

const portfolioImages = {
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
};

function HomePage({ navigate }) {
  const Link = ({ to, children, className }) => (
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

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Bridal makeup showcase"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50/80 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Award-Winning Makeup Artist
            </div>
            <h1 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Unveil Your
              <span className="block text-primary">Timeless Beauty</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Bridal, editorial, and occasion makeup artistry that transforms
              your special moments into unforgettable memories.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-rose-600"
              >
                Book Appointment
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-rose-50"
              >
                View Portfolio
              </Link>
            </div>
            <div className="mt-10 flex gap-8">
              <div>
                <p className="font-serif text-2xl font-bold text-foreground">500+</p>
                <p className="text-xs text-muted-foreground">Happy Brides</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-foreground">10+</p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-foreground">4.9</p>
                <p className="text-xs text-muted-foreground">Star Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-3 text-muted-foreground">
            From bridal to editorial, we offer a complete range of makeup artistry services
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl border border-rose-200/40 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-rose-100/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-primary">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {service.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                {service.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {service.duration}
                </div>
                <span className="font-semibold text-primary">
                  ₹{service.price.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            View All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-rose-50/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Bridal Packages
            </h2>
            <p className="mt-3 text-muted-foreground">
              Curated packages designed for your perfect wedding day
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-2xl border p-6 transition-all hover:shadow-lg ${
                  pkg.popular
                    ? "border-primary bg-card shadow-md shadow-rose-100/50"
                    : "border-rose-200/40 bg-card"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {pkg.description}
                </p>
                <p className="mt-4 font-serif text-3xl font-bold text-primary">
                  ₹{pkg.price.toLocaleString()}
                </p>
                <ul className="mt-4 space-y-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="h-3.5 w-3.5 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/booking"
                  className={`mt-6 block w-full rounded-full py-2.5 text-center text-sm font-semibold transition-colors ${
                    pkg.popular
                      ? "bg-primary text-primary-foreground hover:bg-rose-600"
                      : "border border-rose-200 text-foreground hover:bg-rose-50"
                  }`}
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Portfolio
          </h2>
          <p className="mt-3 text-muted-foreground">
            A glimpse into our artistry and transformations
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
            >
              <img
                src={portfolioImages[item.image] || portfolio1}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="font-serif text-lg font-semibold text-white">
                  {item.title}
                </p>
                <p className="text-sm text-white/80">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            View Full Portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* About Teaser */}
      <section className="bg-rose-50/50 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex-1">
            <img
              src={aboutImg}
              alt="Sushma Reddy at work"
              className="rounded-2xl object-cover shadow-lg shadow-rose-100/50"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Meet Sushma Reddy
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              With over a decade of experience in bridal and editorial makeup,
              Sushma brings an artist's eye and a bride's heart to every
              appointment. Trained under renowned international artists and
              certified in airbrush and HD makeup techniques.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Her work has been featured in leading bridal magazines and fashion
              editorials across India. Every bride deserves to feel like the most
              beautiful version of herself — and that's exactly what Sushma delivers.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-primary p-8 text-center sm:p-12">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl">
            Ready to Transform?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80">
            Book your consultation today and let's create your perfect look
            for your special day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-rose-50"
            >
              <Calendar className="h-4 w-4" />
              Book Appointment
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;