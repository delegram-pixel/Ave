import { ChevronRight, TrendingUp, DollarSign, HelpCircle } from 'lucide-react';

export function NavigationCards() {
  const cards = [
    {
      icon: <div className="w-4 h-4 bg-[#a4dd6b] rounded-full flex items-center justify-center">
        <span className="text-white text-sm font-bold">?</span>
      </div>,
      title: "What we offer",
      description: "Discover our investment products and features",
    },
    {
      icon: <TrendingUp className="w-4 h-4 text-[#a4dd6b]" />,
      title: "Stock market today",
      description: "View real-time market data and trends",
    },
    {
      icon: <DollarSign className="w-4 h-4 text-[#a4dd6b]" />,
      title: "Fees and commissions",
      description: "Learn about our competitive pricing",
    },
    {
      icon: <HelpCircle className="w-4 h-4 text-[#a4dd6b]" />,
      title: "Why Allquity",
      description: "See what makes us different",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-[#1a3b44] rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer group hover:border-[#a4dd6b]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {card.icon}
                  <h3 className="font-semibold text-black">{card.title}</h3>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#a4dd6b] transition-colors" />
              </div>
              {/* <p className="text-sm text-black">{card.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
