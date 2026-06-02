import React, { useState } from "react";
import { portfolioItems } from "../lib/data";
import portfolio1 from "../assets/portfolio1.jpg";
import portfolio2 from "../assets/portfolio2.jpg";
import portfolio3 from "../assets/portfolio3.jpg";
import portfolio4 from "../assets/portfolio4.jpg";
import portfolio5 from "../assets/portfolio5.jpg";

const images = {
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
};

const categories = ["All", "Bridal", "Party", "Editorial", "Hair"];

function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
          Portfolio
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A curated collection of our finest transformations
        </p>
      </div>

      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "border border-rose-200 bg-card text-muted-foreground hover:bg-rose-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
          >
            <img
              src={images[item.image] || portfolio1}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 p-5 opacity-0 transition-opacity group-hover:opacity-100">
              <p className="font-serif text-xl font-semibold text-white">
                {item.title}
              </p>
              <p className="text-sm text-white/80">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioPage;