import { ChevronRight, TrendingUp, DollarSign, HelpCircle } from 'lucide-react';

export function NavigationCards() {
  const cards = [
    {
      icon: <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
        <span className="text-white text-sm font-bold">?</span>
      </div>,
      title: "What we offer",
      description: "Discover our investment products and features",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Stock market today",
      description: "View real-time market data and trends",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-moomoo-orange" />,
      title: "Fees and commissions",
      description: "Learn about our competitive pricing",
    },
    {
      icon: <HelpCircle className="w-8 h-8 text-purple-500" />,
      title: "Why moomoo",
      description: "See what makes us different",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                {card.icon}
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-moomoo-orange transition-colors" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
