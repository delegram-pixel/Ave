import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-moomoo-orange/10 to-transparent"></div>

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                The Next-Gen<br />
                Online Trading Platform
              </h1>
            </div>

            {/* Awards */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-yellow-600 text-black px-3 py-2 rounded-lg text-sm font-semibold">
                Best Stock Trading App
              </div>
              <div className="bg-yellow-600 text-black px-3 py-2 rounded-lg text-sm font-semibold">
                Best Mobile App
              </div>
              <div className="bg-yellow-600 text-black px-3 py-2 rounded-lg text-sm font-semibold">
                Best Day Trading Software
              </div>
              <div className="bg-yellow-600 text-black px-3 py-2 rounded-lg text-sm font-semibold">
                Best Broker Award
              </div>
            </div>

            <Button
              size="lg"
              className="bg-moomoo-orange hover:bg-moomoo-orange-hover text-white px-8 py-4 text-lg rounded-full"
            >
              Open Account
            </Button>

            <div className="text-sm text-gray-400">
              *Options trading is risky and not appropriate for all investors.<br />
              Read <span className="text-moomoo-orange underline cursor-pointer">Options Disclosure Document</span> before trading. <span className="text-moomoo-orange underline cursor-pointer">Disclosure</span>
            </div>
          </div>

          {/* Right side - Computer screens */}
          <div className="relative">
            <div className="relative max-w-lg mx-auto">
              {/* Main screen */}
              <div className="bg-gray-800 rounded-lg p-1 shadow-2xl transform rotate-3">
                <div className="bg-black rounded-lg p-4 h-80 flex flex-col">
                  {/* Mock trading interface */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-gray-400 text-xs">moomoo Desktop</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 h-full">
                    <div className="bg-gray-900 rounded p-2">
                      <div className="text-green-400 text-xs mb-1">AAPL</div>
                      <div className="text-white text-sm">$150.25</div>
                      <div className="text-green-400 text-xs">+2.45%</div>
                      <div className="mt-2 h-8 bg-gradient-to-r from-green-500/20 to-green-500/40 rounded"></div>
                    </div>
                    <div className="bg-gray-900 rounded p-2">
                      <div className="text-red-400 text-xs mb-1">TSLA</div>
                      <div className="text-white text-sm">$234.50</div>
                      <div className="text-red-400 text-xs">-1.23%</div>
                      <div className="mt-2 h-8 bg-gradient-to-r from-red-500/20 to-red-500/40 rounded"></div>
                    </div>
                    <div className="bg-gray-900 rounded p-2">
                      <div className="text-green-400 text-xs mb-1">NVDA</div>
                      <div className="text-white text-sm">$445.78</div>
                      <div className="text-green-400 text-xs">+3.67%</div>
                      <div className="mt-2 h-8 bg-gradient-to-r from-green-500/20 to-green-500/40 rounded"></div>
                    </div>
                    <div className="bg-gray-900 rounded p-2">
                      <div className="text-blue-400 text-xs mb-1">MSFT</div>
                      <div className="text-white text-sm">$378.90</div>
                      <div className="text-blue-400 text-xs">+0.89%</div>
                      <div className="mt-2 h-8 bg-gradient-to-r from-blue-500/20 to-blue-500/40 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-moomoo-orange rounded-lg p-3 text-white text-sm font-semibold shadow-lg">
                Live Market Data
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-600 rounded-lg p-3 text-white text-sm font-semibold shadow-lg">
                $0 Commission
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
