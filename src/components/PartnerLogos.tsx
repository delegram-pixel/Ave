export function PartnerLogos() {
    const partners = [
      { name: "Nasdaq", logo: "NASDAQ" },
      { name: "NYSE", logo: "NYSE" },
      { name: "Cboe", logo: "Cboe" },
      { name: "TradingView", logo: "TradingView" },
      { name: "Bloomberg", logo: "Bloomberg" },
      { name: "Dow Jones", logo: "DOW JONES" },
    ];
  
    return (
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-12 min-w-[100px] text-gray-600 font-semibold text-lg"
              >
                {partner.logo === "NASDAQ" && (
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded mr-2"></div>
                    <span className="font-bold">Nasdaq</span>
                  </div>
                )}
                {partner.logo === "NYSE" && (
                  <div className="text-blue-700 font-bold text-xl">NYSE</div>
                )}
                {partner.logo === "Cboe" && (
                  <div className="text-purple-600 font-bold">Cboe</div>
                )}
                {partner.logo === "TradingView" && (
                  <div className="text-blue-500 font-bold">TradingView</div>
                )}
                {partner.logo === "Bloomberg" && (
                  <div className="text-black font-bold">Bloomberg</div>
                )}
                {partner.logo === "DOW JONES" && (
                  <div className="text-blue-800 font-bold text-sm">DOW JONES</div>
                )}
              </div>
            ))}
          </div>
  
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">Disclosure</p>
          </div>
        </div>
      </section>
    );
  }
  