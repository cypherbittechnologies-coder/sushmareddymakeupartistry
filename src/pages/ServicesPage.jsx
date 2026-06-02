import React from "react";
import { Clock, ArrowRight } from "lucide-react";
import { services } from "../lib/data";

function ServicesPage({ navigate }) {
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
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
          Our Services
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Every service is crafted with precision, passion, and personalized care
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="group flex flex-col rounded-2xl border border-rose-200/40 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-rose-100/50"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-rose-50 text-primary">
              <span className="font-serif text-xl font-bold">
                {service.name.charAt(0)}
              </span>
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              {service.name}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {service.duration}
              </div>
              <span className="font-serif text-xl font-bold text-primary">
                ₹{service.price.toLocaleString()}
              </span>
            </div>
            <Link
              to="/booking"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-rose-600"
            >
              Book This Service <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;