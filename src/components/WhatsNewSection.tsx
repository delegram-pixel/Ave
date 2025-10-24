'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export function WhatsNewSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [slidesInView, setSlidesInView] = useState(3);

  useEffect(() => {
    const calculateSlidesInView = () => {
      if (window.innerWidth < 768) {
        setSlidesInView(1);
      } else {
        setSlidesInView(3);
      }
    };

    calculateSlidesInView();
    window.addEventListener('resize', calculateSlidesInView);
    return () => window.removeEventListener('resize', calculateSlidesInView);
  }, []);

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
      description: "Trade 40+ coins now with Allquity.",
      cta: "Get started >",
      disclaimer: "Crypto services are offered by Allquity Crypto Inc. (\"MCI\"). Disclosure"
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
      title: "Unlock your trading potential with Allquity Desktop",
      description: "Meet Allquity Desktop, the next-gen workspace designed to unlock your trading potential.",
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

  const totalCards = cards.length;
  const maxSlide = totalCards > slidesInView ? totalCards - slidesInView : 0;

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-black mb-12">
          What&apos;s New
        </h2>

        <div className="relative">
          <div className="overflow-hidden" ref={containerRef}>
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesInView)}%)`,
                width: `${(totalCards / slidesInView) * 100}%`,
              }}
            >
              {cards.map((card, index) => (
                <div key={index} className="w-full px-2" style={{ flexBasis: `${100 / totalCards}%` }}>
                  <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                    <div className="relative w-full h-48">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-bold text-xl text-gray-900 mb-3">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                        {card.description}
                      </p>
                      <a
                        href="#"
                        className="text-[#a4dd6b] font-semibold hover:text-[#8ec65a] transition-colors mt-auto"
                      >
                        {card.cta}
                      </a>
                      {card.disclaimer && (
                        <p className="text-xs text-gray-500 mt-3">
                          {card.disclaimer}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow -translate-x-1/2 disabled:opacity-50"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow translate-x-1/2 disabled:opacity-50"
            disabled={currentSlide === maxSlide}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
