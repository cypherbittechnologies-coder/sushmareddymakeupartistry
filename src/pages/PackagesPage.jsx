import React from "react";
import { Star, ArrowRight, Check } from "lucide-react";
import { packages } from "../lib/data";

function PackagesPage({ navigate }) {
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
          Bridal Packages
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Designed to make your wedding day absolutely flawless
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`relative rounded-2xl border p-8 transition-all hover:shadow-xl ${
              pkg.popular
                ? "border-primary bg-card shadow-lg shadow-rose-100/50"
                : "border-rose-200/40 bg-card"
            }`}
          >
            {pkg.popular && (
              <span className="absolute -top-3 left-8 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                Most Popular
              </span>
            )}
            <h2 className="font-serif text-2xl font-bold text-foreground">
              {pkg.name}
            </h2>
            <p className="mt-2 text-muted-foreground">{pkg.description}</p>
            <p className="mt-6 font-serif text-4xl font-bold text-primary">
              ₹{pkg.price.toLocaleString()}
            </p>
            <ul className="mt-6 space-y-3">
              {pkg.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/booking"
              className={`mt-8 block w-full rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                pkg.popular
                  ? "bg-primary text-primary-foreground hover:bg-rose-600"
                  : "border border-rose-200 text-foreground hover:bg-rose-50"
              }`}
            >
              Book This Package
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-rose-200/40 bg-rose-50/50 p-8 text-center">
        <h3 className="font-serif text-2xl font-bold text-foreground">
          Want a Custom Package?
        </h3>
        <p className="mt-3 text-muted-foreground">
          We can create a bespoke package tailored exactly to your needs and preferences.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-rose-600"
        >
          Request Custom Quote <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export default PackagesPage;