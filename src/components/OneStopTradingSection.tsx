import { ChevronRight } from 'lucide-react';

export function OneStopTradingSection() {
  const features = [
    {
      title: "Global Stocks",
      description: "Invest in domestic and international stocks",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop&crop=center",
      flags: ["🇭🇰", "🇺🇸", "🇨🇦", "🇨🇳"]
    },
    {
      title: "Options",
      description: "$0 commission¹ options trading Real-time intuitive analysis 13 options strategies²",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=200&h=200&fit=crop&crop=center",
      badge: "CALL/PUT"
    },
    {
      title: "Crypto",
      description: "One of the lowest fees available",
      image: "https://images.unsplash.com/photo-1518544866865-3f0de42b1003?w=200&h=200&fit=crop&crop=center",
      disclaimer: "Crypto services are offered by Allquity Crypto Inc. (\"MCI\"). Disclosure"
    }
  ];

  const additionalFeatures = [
    { title: "Fractional Shares³", icon: "📊" },
    { title: "Cash Sweep³", icon: "💰" },
    { title: "Dividend Reinvestment Program³", icon: "🔄" }
  ];

  return (
    <section className="bg-black text-white py-16 lg:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            One-Stop Online Trading
          </h2>
          <p className="text-xl text-gray-300">
            Diversify your investment portfolio with one account
          </p>
        </div>

        {/* Main feature cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#a4dd6b] transition-colors" />
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Feature-specific content */}
              <div className="relative">
                {feature.flags && (
                  <div className="flex space-x-2 mb-4">
                    {feature.flags.map((flag, i) => (
                      <span key={i} className="text-2xl">{flag}</span>
                    ))}
                  </div>
                )}

                {feature.badge && (
                  <div className="absolute top-0 right-0 bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">
                    {feature.badge}
                  </div>
                )}

                {/* Mockup content */}
                <div className="bg-gray-800 rounded-lg p-4 h-32 flex items-center justify-center">
                  {index === 0 && (
                    <div className="text-center">
                      <div className="text-green-400 text-sm mb-1">Global Markets</div>
                      <div className="text-2xl font-bold">📱</div>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="text-center">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-green-600 rounded p-2 text-xs">CALL</div>
                        <div className="bg-red-600 rounded p-2 text-xs">PUT</div>
                      </div>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="text-center">
                      <div className="text-yellow-400 text-3xl mb-1">₿</div>
                      <div className="text-xs text-gray-400">Crypto Trading</div>
                    </div>
                  )}
                </div>

                {feature.disclaimer && (
                  <p className="text-xs text-gray-500 mt-3">
                    {feature.disclaimer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional features */}
        <div className="flex flex-wrap justify-center gap-8">
          {additionalFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              <span className="text-2xl">{feature.icon}</span>
              <span className="font-medium">{feature.title}</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">Disclosures</p>
        </div>
      </div>
    </section>
  );
}
