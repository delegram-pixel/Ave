import { Button } from '@/components/ui/button';

export function LowerFeesSection() {
  return (
    <section className="bg-[#061519] text-white py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className=" rounded-2xl p-6 md:p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Lower fees.<br />
                More trading potential.
              </h2>
            </div>

            <div className="space-y-4 inline-block lg:block">
              <div className="flex items-center space-x-2">
                <span className="text-lg">$0 commission</span>
                <sup className="text-sm text-gray-400">1</sup>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg">7.2% margin rate</span>
                <sup className="text-sm text-gray-400">2</sup>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg">$0 equity options contract fee</span>
                <sup className="text-sm text-gray-400">3</sup>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-[#a4dd6b] hover:bg-[#8ec65a] text-black px-8 py-4 text-lg rounded-full"
            >
              Learn More
            </Button>

            <div className="text-sm text-gray-400 leading-relaxed">
              Regulatory fees, exchange fees, and index option contract fees may apply. Fees are subject to change. <span className="text-[#a4dd6b] underline cursor-pointer">Disclosure</span>
            </div>
          </div>

          {/* Right side - Highlight boxes */}
          <div className="space-y-4 sm:space-y-6 max-w-2xl mx-auto lg:mx-0">
            <div className="bg-gradient-to-r from-[#a4dd6b] to-[#8ec65a] rounded-2xl p-6 transform rotate-1 shadow-xl">
              <div className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold">
                $0 commission
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#a4dd6b] to-[#8ec65a] rounded-2xl p-6 transform -rotate-1 shadow-xl">
              <div className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold">
                7.2% margin rate
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#a4dd6b] to-[#8ec65a] rounded-2xl p-6 transform rotate-2 shadow-xl">
              <div className="text-black text-lg sm:text-xl lg:text-2xl font-bold">
                $0 equity option contract fee
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
