import { Button } from '@/components/ui/button';

export function LowerFeesSection() {
  return (
    <section className="bg-black text-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Lower fees.<br />
                More trading potential.
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-lg">$0 commission</span>
                <sup className="text-sm text-gray-400">1</sup>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg">6.8% margin rate</span>
                <sup className="text-sm text-gray-400">2</sup>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg">$0 equity options contract fee</span>
                <sup className="text-sm text-gray-400">3</sup>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-moomoo-orange hover:bg-moomoo-orange-hover text-white px-8 py-4 text-lg rounded-full"
            >
              Learn More
            </Button>

            <div className="text-sm text-gray-400 leading-relaxed">
              Regulatory fees, exchange fees, and index option contract fees may apply. Fees are subject to change. <span className="text-moomoo-orange underline cursor-pointer">Disclosure</span>
            </div>
          </div>

          {/* Right side - Highlight boxes */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-moomoo-orange to-orange-600 rounded-2xl p-6 transform rotate-1 shadow-xl">
              <div className="text-white text-3xl lg:text-4xl font-bold">
                $0 commission
              </div>
            </div>

            <div className="bg-gradient-to-r from-moomoo-orange to-orange-600 rounded-2xl p-6 transform -rotate-1 shadow-xl">
              <div className="text-white text-3xl lg:text-4xl font-bold">
                6.8% margin rate
              </div>
            </div>

            <div className="bg-gradient-to-r from-moomoo-orange to-orange-600 rounded-2xl p-6 transform rotate-2 shadow-xl">
              <div className="text-white text-xl lg:text-2xl font-bold">
                $0 equity option contract fee
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
