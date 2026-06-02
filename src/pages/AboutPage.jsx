import React from "react";
import { Award, Users, Heart, Globe } from "lucide-react";
import aboutImg from "../assets/about.jpg";

const highlights = [
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized by top bridal publications and beauty awards across India.",
  },
  {
    icon: Users,
    title: "500+ Happy Brides",
    description: "Transformed over 500 brides into their most beautiful selves.",
  },
  {
    icon: Heart,
    title: "Passion Driven",
    description: "Every brushstroke is guided by love for the art of makeup.",
  },
  {
    icon: Globe,
    title: "International Training",
    description: "Certified in airbrush, HD, and editorial techniques from global academies.",
  },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
          About Sushma Reddy
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The artist behind the brush
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <img
            src={aboutImg}
            alt="Sushma Reddy - Makeup Artist"
            className="rounded-2xl object-cover shadow-lg shadow-rose-100/50"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="font-serif text-2xl font-bold text-foreground">
            A Decade of Transforming Dreams
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Sushma Reddy discovered her passion for makeup at a young age, watching
            her mother get ready for special occasions. What started as a childhood
            fascination evolved into a celebrated career spanning over ten years.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            After formal training from the London School of Makeup and advanced
            certifications in airbrush and HD techniques, Sushma returned to India
            with a vision: to give every bride the luxury bridal experience she deserves.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Her signature style blends traditional Indian bridal aesthetics with
            contemporary techniques — think glowing skin, sculpted features, and eyes
            that tell a story. She believes makeup should enhance, not mask, and her
            approach has earned her a devoted clientele across the country.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-rose-50 p-4">
              <p className="font-serif text-2xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="rounded-xl bg-rose-50 p-4">
              <p className="font-serif text-2xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Brides Transformed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-rose-200/40 bg-card p-6 text-center transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-rose-100/50"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-primary">
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutPage;