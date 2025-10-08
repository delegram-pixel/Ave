import { Button } from '@/components/ui/button';

export function PromotionSection() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="transform -rotate-3">
              <div className="text-[#a4dd6b] text-lg font-semibold uppercase tracking-wider">
                EARN UP TO
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-6xl lg:text-8xl font-bold">
                $1000
              </div>
              <div className="text-2xl lg:text-3xl">
                in NVDA STOCK
              </div>
            </div>

            <div className="bg-[#a4dd6b]/20 border border-[#a4dd6b] rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <div className="bg-[#a4dd6b] rounded-lg p-3">
                  <span className="text-black text-xl font-bold">8.1%</span>
                </div>
                <div>
                  <div className="text-white font-semibold">APY</div>
                  <div className="text-sm text-gray-300">*$0 investment minimum, 6.25% base APY + 4.25% extra for 3 months</div>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-[#a4dd6b] hover:bg-[#8ec65a] text-black px-12 py-6 text-xl rounded-full font-bold"
            >
              Unlock Now
            </Button>

            <div className="text-sm text-gray-400 leading-relaxed">
              Offer <span className="text-[#a4dd6b] underline cursor-pointer">Terms & Conditions apply</span>. Options trading is risky and not for all. Read the <span className="text-[#a4dd6b] underline cursor-pointer">Options Disclosure Document</span> before trading. <span className="text-[#a4dd6b] underline cursor-pointer">Disclosure</span>
            </div>
          </div>

          {/* Right side - Visual elements */}
          <div className="relative">
            <div className="text-center">
              {/* NVDA stock visualization */}
              <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-8 shadow-2xl transform rotate-3">
                <div className="text-white text-center space-y-4">
                  <div className="text-2xl font-bold">NVDA</div>
                  <div className="text-4xl font-bold">$445.78</div>
                  <div className="text-green-200">+3.67%</div>

                  {/* Mini chart */}
                  <div className="bg-white/20 rounded-lg p-4 mt-4">
                    <svg className="w-full h-16" viewBox="0 0 200 64">
                      <path
                        d="M0,48 Q25,32 50,28 T100,20 T150,16 T200,12"
                        stroke="white"
                        strokeWidth="3"
                        fill="none"
                        className="drop-shadow-lg"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 bg-yellow-500 rounded-full p-4 text-black font-bold text-lg shadow-lg">
                FREE
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 rounded-lg p-3 text-white font-semibold shadow-lg">
                Up to $1000
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
