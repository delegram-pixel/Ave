export function PartnerLogos() {
  const partners = [
    { name: "Nasdaq", logo: "nasdaq" },
    { name: "NYSE", logo: "nyse" },
    { name: "Cboe", logo: "cboe" },
    { name: "TradingView", logo: "tradingview" },
    { name: "Bloomberg", logo: "bloomberg" },
    { name: "Dow Jones", logo: "dowjones" },
  ];

  const SvgLogo = ({ name }: { name: string }) => {
    switch (name) {
      case "nasdaq":
        return (
          <svg className="h-8 w-auto text-white" viewBox="0 0 132 32" fill="currentColor">
            <path d="M23.2,3.3V31.5h7.2V3.3H23.2z M49.3,3.3L37.7,21.8V3.3h-7.2v28.2h7.2l11.6-18.5v18.5h7.2V3.3H49.3z M70.3,3.3v28.2h18.2
              c6.5,0,11.7-5.2,11.7-11.7v-4.8c0-6.5-5.2-11.7-11.7-11.7H70.3z M77.5,9.5h9.3c2.8,0,5,2.2,5,5v4.8c0,2.8-2.2,5-5,5h-9.3V9.5z
              M113.8,3.3l-6.5,14.1L100.8,3.3h-7.7l10.4,21.8v6.4h7.2v-6.4l10.4-21.8H113.8z"/>
          </svg>
        );
      case "nyse":
        return (
          <svg className="h-8 w-auto text-white" viewBox="0 0 100 32" fill="currentColor">
            <path d="M12.4 31.5L0 12.2V31.5H-7.2V0.3h7.2l12.4 19.3V0.3h7.2v31.2h-7.2zM31.5 0.3h7.2v31.2h-7.2zM58.7 19.3l-2.9-4.8h-11.6l-2.9 4.8H34l12.4-21.8h7.2l12.4 21.8h-7.3zM50 9.5l-4.3 7.2h8.6L50 9.5zM81.2 0.3h12.4c6.5 0 11.7 5.2 11.7 11.7v4.8c0 6.5-5.2 11.7-11.7 11.7H81.2V0.3zm7.2 24.2h5.2c2.8 0 5-2.2 5-5v-4.8c0-2.8-2.2-5-5-5h-5.2v14.8z"/>
          </svg>
        );
      case "cboe":
        return <p className="text-2xl font-bold text-white">Cboe</p>
      case "tradingview":
        return <p className="text-2xl font-bold text-white">TradingView</p>
      case "bloomberg":
        return <p className="text-2xl font-bold text-white">Bloomberg</p>
      case "dowjones":
        return <p className="text-2xl font-bold text-white">DOW JONES</p>
      default:
        return null;
    }
  };

  return (
    <section className="bg-[#061519] py-12">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 lg:gap-16 opacity-80">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 min-w-[100px]"
            >
              <SvgLogo name={partner.logo} />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">Disclosure</p>
        </div>
      </div>
    </section>
  );
}
  