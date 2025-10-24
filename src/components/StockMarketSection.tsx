'use client';

import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function StockMarketSection() {
  const [activeTab, setActiveTab] = useState('US Stocks');
  const [activeSubTab, setActiveSubTab] = useState('Top Gainers');

  const tabs = ['US Stocks', 'US Options', 'US ETFs'];
  const subTabs = ['Top Gainers', 'Top Losers', 'Ranking by Market Cap', 'Ranking by Volume'];

  const stockData = [
    {
      symbol: 'RVYL',
      name: 'Ryvyl',
      price: '0.5080',
      change: '+0.2120',
      changePercent: '+71.62%',
      chart: '📈'
    },
    {
      symbol: 'FRMI',
      name: 'Fermi',
      price: '32.530',
      change: '+11.530',
      changePercent: '+54.90%',
      chart: '📈'
    },
    {
      symbol: 'PALI',
      name: 'Palisade Bio',
      price: '1.310',
      change: '+0.450',
      changePercent: '+52.38%',
      chart: '📈'
    },
    {
      symbol: 'AMBI',
      name: 'Ambipar Emerge...',
      price: '1.160',
      change: '+0.360',
      changePercent: '+44.98%',
      chart: '📈'
    },
  ];

  const MiniChart = ({ positive = true }: { positive?: boolean }) => (
    <div className="w-16 h-8">
      <svg className="w-full h-full" viewBox="0 0 64 32">
        <path
          d={positive ? "M0,24 Q16,16 32,12 T64,8" : "M0,8 Q16,12 32,16 T64,24"}
          stroke={positive ? "#16a34a" : "#dc2626"}
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );

  return (
    <section className="bg-white py-16">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          One-stop App to Trade Stocks, Options and ETFs
        </h2>

        {/* Main tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-semibold transition-colors ${
                  activeTab === tab
                    ? 'text-[#a4dd6b] border-b-2 border-[#a4dd6b]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Sub tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2">
            {subTabs.map((subTab) => (
              <button
                key={subTab}
                onClick={() => setActiveSubTab(subTab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSubTab === subTab
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {subTab}
              </button>
            ))}
          </div>
        </div>

        {/* Stock table - Desktop */}
        <div className="hidden md:block bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Symbol
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mini Chart
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Chg
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    % Chg
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Watchlist
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {stockData.map((stock, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{stock.symbol}</div>
                        <div className="text-sm text-gray-500">{stock.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <MiniChart positive={stock.changePercent.startsWith('+')} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {stock.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                      {stock.change}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                      {stock.changePercent}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-gray-400 hover:text-[#a4dd6b]">
                        <Heart className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stock cards - Mobile */}
        <div className="md:hidden space-y-4">
          {stockData.map((stock, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-sm font-medium text-gray-900">{stock.symbol}</div>
                  <div className="text-sm text-gray-500">{stock.name}</div>
                </div>
                <button className="text-gray-400 hover:text-[#a4dd6b]">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              <div className="flex justify-between items-end mt-4">
                <div>
                  <div className="text-lg font-medium text-gray-900">{stock.price}</div>
                  <div className="flex space-x-2 text-sm">
                    <span className="text-green-600">{stock.change}</span>
                    <span className="text-green-600">{stock.changePercent}</span>
                  </div>
                </div>
                <MiniChart positive={stock.changePercent.startsWith('+')} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            className="bg-[#a4dd6b] hover:bg-[#8ec65a] text-black px-8 py-3 rounded-full"
          >
            Learn more
          </Button>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-500">Disclosure</p>
        </div>
      </div>
    </section>
  );
}
