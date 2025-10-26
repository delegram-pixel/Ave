"use client"

import { useState } from "react"
import { DashboardLayout } from "../components/dashboard-layout"
import { ChevronDown } from "lucide-react"

const categories = [
  "Quick Start Guide",
  "Glossary",
  "Stock Market Basics",
  "Beyond",
  "Advanced Trading",
  "Risk Management",
]

const faqs = [
  {
    question: "What is the portfolio value ?",
    duration: "2-3 min",
    answer:
      "The portfolio value represents the total value of all the assets in your account, including stocks, ETFs, and cash. It is calculated in real-time based on the current market prices of your holdings.",
  },
  {
    question: "What is buying power (US Stock) and cash (Nigerian Stock) ?",
    duration: "5 min",
    answer:
      "Buying power is the total amount of money you have available to purchase securities. For US stocks, this includes unsettled cash from recent trades. For Nigerian stocks, it is the cleared cash balance in your account.",
  },
  {
    question: "What is Market Cap?",
    duration: "3 min",
    answer:
      "Market capitalization, or market cap, is the total value of a company's outstanding shares of stock. It is calculated by multiplying the company's share price by its total number of shares.",
  },
  {
    question: "What is a 52 Week High?",
    duration: "2 min",
    answer:
      "The 52-week high is the highest price at which a stock has traded during the previous year. It is a key indicator used by traders and investors to assess a stock's performance and momentum.",
  },
  {
    question: "What is a 52 Week Low?",
    duration: "2 min",
    answer:
      "The 52-week low is the lowest price at which a stock has traded during the previous year. This metric helps investors gauge a stock's performance and identify potential buying opportunities.",
  },
  {
    question: "What is a buy price?",
    duration: "3 min",
    answer:
      "The buy price, or 'ask price,' is the lowest price a seller is willing to accept for a security. When you place a market order to buy, you will typically purchase the stock at the current ask price.",
  },
  {
    question: "What is a sell price?",
    duration: "3 min",
    answer:
      "The sell price, or 'bid price,' is the highest price a buyer is willing to pay for a security. When you place a market order to sell, you will typically sell your stock at the current bid price.",
  },
  {
    question: 'What does "Buy When Price Increases" mean? (US Stock)',
    duration: "4 min",
    answer:
      'A "Buy When Price Increases" order, also known as a buy stop order, is an order to buy a security at a specified price above the current market price. It is often used to enter a position once a stock shows upward momentum.',
  },
]

export default function LearnPage() {
  const [activeCategory, setActiveCategory] = useState("Quick Start Guide")
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <DashboardLayout>
      <div className="p-8 max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-white text-center mb-8">Learn</h1>

        {/* Category Tabs */}
        <div className="mb-8 border-b border-border">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap text-sm font-medium transition-colors pb-2 ${
                  activeCategory === category
                    ? "text-white border-b-2 border-white"
                    : "text-gray-500 hover:text-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-center text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Empower your investment journey with our comprehensive educational resources. 
          Whether you&apos;re a beginner or an experienced investor, our guides will help you 
          navigate the financial markets with confidence.
        </p>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800 hover:bg-gray-750 transition-colors"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-750 transition-colors"
              >
                <span className="text-white font-medium text-left">{faq.question}</span>
                <div className="flex items-center gap-3 ml-4">
                  <span className="bg-teal-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    {faq.duration}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-primary transition-transform ${expandedIndex === index ? "rotate-180" : ""}`}
                  />
                </div>
              </button>

              {/* Expanded Content */}
              {expandedIndex === index && (
                <div className="px-6 py-4 bg-background border-t border-border">
                  <p className="text-white">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
