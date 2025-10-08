export function OptionsSection() {
    const features = [
      {
        title: "Unusual options activity",
        description: "Detect market shifts, get live insights on high-volume options trades, and view institutional block buys and sales for specific contracts⁶."
      },
      {
        title: "Active 0DTE options",
        description: "Access same-day expiration options for advanced trading strategies."
      },
      {
        title: "Paper trading",
        description: "Practice options strategies risk-free with virtual money and real market data."
      }
    ];
  
    return (
      <section className="bg-white py-16 lg:py-24">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Experience a Pro-level Options Trading Platform
                </h2>
              </div>
  
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-700">
                  Customized 13 option strategies
                </h3>
  
                {features.map((feature, index) => (
                  <div key={index} className="border-l-4 border-[#a4dd6b] pl-6 py-2">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Right side - Phone mockup */}
            <div className="relative">
              <div className="relative max-w-sm mx-auto">
                {/* Phone frame */}
                <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl">
                  <div className="bg-black rounded-3xl p-4 h-[600px] flex flex-col">
                    {/* Status bar */}
                    <div className="flex justify-between items-center mb-4 text-white text-sm">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                      </div>
                    </div>
  
                    {/* App header */}
                    <div className="text-center mb-6">
                      <h3 className="text-white text-lg font-bold">T***A</h3>
                      <div className="text-green-400 text-3xl font-bold">212.080</div>
                      <div className="text-green-400 text-sm">+10.000 +0.04%</div>
                    </div>
  
                    {/* Navigation tabs */}
                    <div className="flex space-x-4 mb-6">
                      <button className="text-gray-400 text-sm">Post-Mkt</button>
                      <button className="text-gray-400 text-sm">Overnight</button>
                      <button className="text-white text-sm font-semibold">Chart</button>
                      <button className="text-green-400 text-sm font-semibold">Options</button>
                      <button className="text-gray-400 text-sm">News</button>
                      <button className="text-gray-400 text-sm">Company</button>
                    </div>
  
                    {/* Unusual Activity section */}
                    <div className="bg-gray-800 rounded-lg p-3 mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white text-sm font-semibold">Unusual Activity</span>
                      </div>
  
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-gray-400">16:09:29</span>
                          <span className="text-green-400">*** 240401 511.00C</span>
                          <span className="text-green-400">Unusual</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-gray-400">16:09:28</span>
                          <span className="text-red-400">*** 241218 33.00C</span>
                          <span className="text-red-400">Unusual</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-gray-400">15:47:21</span>
                          <span className="text-green-400">*** 240419 140.00C</span>
                          <span className="text-green-400">Unusual</span>
                        </div>
                      </div>
                    </div>
  
                    {/* Chart placeholder */}
                    <div className="flex-1 bg-gray-800 rounded-lg p-2">
                      <div className="h-full bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded"></div>
                    </div>
                  </div>
                </div>
  
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-[#a4dd6b] rounded-lg p-3 text-white text-sm font-semibold shadow-lg">
                  Pro Options
                </div>
              </div>
            </div>
          </div>
  
          <div className="text-center mt-12">
            <p className="text-sm text-gray-500">Disclosure</p>
          </div>
        </div>
      </section>
    );
  }
  