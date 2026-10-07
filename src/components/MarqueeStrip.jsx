import React from 'react';

export default function MarqueeStrip() {
  const items = [
    "CODING + AI WORKFLOWS",
    "FULLSTACK DEV",
    "REACT 19",
    "TYPESCRIPT",
    "LARAVEL 11",
    "TAILWIND CSS",
    "NEXT.JS",
    "REST APIS",
    "DOCKER",
    "MYSQL & POSTGRESQL",
    "CLEAN ARCHITECTURE",
    "FIGMA TO CODE",
    "AI-ASSISTED DEVELOPMENT",
    "CONTINUOUS INTEGRATION",
  ];

  // Repeat for continuous loop
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="w-full bg-inverse-canvas text-inverse-ink py-2.5 overflow-hidden border-y border-black select-none z-20">
      <div className="flex w-max animate-marquee space-x-8 font-mono text-xs uppercase tracking-widest font-medium">
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-6 whitespace-nowrap">
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-block-lime inline-block"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
