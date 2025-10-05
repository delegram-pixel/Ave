'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export function WhatsNewSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    {
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=240&fit=crop&crop=center",
      title: "Unlock rewards and start investing",
      description: "Get 8.1% APY* on uninvested cash and unlock up to $1000 in NVDA stock*.",
      cta: "Get Started >",
      disclaimer: "Offer Terms & Conditions apply. Full Disclosures"
    },
    {
      image: "https://images.unsplash.com/photo-1518544866865-3f0de42b1003?w=400&h=240&fit=crop&crop=center",
      title: "Crypto Trading Available Now",
      description: "Trade 40+ coins now with moomoo.",
      cta: "Get started >",
      disclaimer: "Crypto services are offered by Moomoo Crypto Inc. (\"MCI\"). Disclosure"
    },
    {
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=240&fit=crop&crop=center",
      title: "More options strategies and order types",
      description: "13 options strategies and 9 order types to help unleash your trading potential.",
      cta: "Learn more >",
      disclaimer: "Disclosure"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop&crop=center",
      title: "Unlock your trading potential with moomoo Desktop",
      description: "Meet moomoo Desktop, the next-gen workspace designed to unlock your trading potential.",
      cta: "Learn more >",
      disclaimer: ""
    },
    {
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=240&fit=crop&crop=center",
      title: "Gain trading insights with advanced charting tools",
      description: "100+ free technical indicators and 38+ drawing tools to help identify potential trading opportunities.",
      cta: "Learn More >",
      disclaimer: ""
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, cards.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, cards.length - 2)) % Math.max(1, cards.length - 2));
  };

  return (
    <section className="bg-moomoo-light py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          What&apos;s New
        </h2>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Cards container */}
          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
            >
              {cards.map((card, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-3">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative w-full h-48">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl text-gray-900 mb-3">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {card.description}
                      </p>
                      <a
                        href="#"
                        className="text-moomoo-orange font-semibold hover:text-moomoo-orange-hover transition-colors"
                      >
                        {card.cta}
                      </a>
                      {card.disclaimer && (
                        <p className="text-xs text-gray-400 mt-3">
                          {card.disclaimer}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
