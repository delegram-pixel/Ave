import { Button } from '@/components/ui/button';

export function FeatureCardsSection() {
  const features = [
    {
      title: "Advanced orders, simplified",
      description: "Fine-tune your trading with advanced order types.",
      cta: "Learn more >",
      bgColor: "bg-[#0f2b33]"
    },
    {
      title: "Unlock in-depth market insights",
      description: "Navigate markets with real-time Level 2 data¹, with up to 60 bid/ask price levels.",
      cta: "Learn more >",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=300&h=400&fit=crop&crop=center",
      bgColor: "bg-gray-900"
    },
    {
      title: "24/7 professional support",
      description: "Phone support is available during trading hours⁶.",
      cta: "Learn more >",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=300&h=400&fit=crop&crop=center",
      bgColor: "bg-gray-900"
    },
    {
      title: "Trade anywhere",
      description: "Seamlessly manage your investments on the desktop, mobile app and TradingView. Customize your trading through OpenAPI.",
      cta: "Learn more >",
      image: "https://images.unsplash.com/photo-1518544866865-3f0de42b1003?w=300&h=400&fit=crop&crop=center",
      bgColor: "bg-gray-900"
    }
  ];

  return (
    <section className="bg-[#061519] py-16 overflow-x-hidden">
      <div className="container px-4 sm:px-6 lg:px-6 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left side - Header */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              Why trade with Allquity?
            </h2>
            <Button
              className="bg-[#a4dd6b] hover:bg-[#8ec65a] text-black px-8 py-3 rounded-full"
            >
              Get Started
            </Button>
            <p className="text-sm text-gray-500 mt-4">Disclosure</p>
          </div>

          {/* Right side - Feature cards */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-4 sm:gap-6 sm:px-0">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${feature.bgColor} rounded-lg p-6 text-white relative overflow-hidden`}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full bg-gradient-to-br from-[#a4dd6b]/20 to-transparent"></div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Phone mockup placeholder */}
                  <div className="bg-gray-800 rounded-lg p-2 mb-4">
                    <div className="bg-black rounded-lg p-3 h-32">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="text-gray-400 text-xs">Allquity</div>
                      </div>
                      <div className="space-y-2">
                        <div className="bg-[#a4dd6b]/20 rounded h-2"></div>
                        <div className="bg-green-500/20 rounded h-2 w-3/4"></div>
                        <div className="bg-blue-500/20 rounded h-2 w-1/2"></div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="text-[#a4dd6b] font-semibold hover:text-green-300 transition-colors text-sm"
                  >
                    {feature.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
