"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, Search, TrendingUp, TrendingDown, SlidersHorizontal, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const featuredPortfolios = [
  { name: "Nancy Pelosi's Last Buys", color: "bg-Allquity-orange" },
  { name: "Warren Buffett's Portfolio", color: "bg-Allquity-green" },
  { name: "Top Tech Stocks", color: "bg-Allquity-gray" },
]

const stocks = [
  {
    symbol: "AAPL",
    name: "Apple, Inc.",
    price: 254.24,
    change: -4.03,
    changePercent: -1.56,
    logo: "https://logo.clearbit.com/apple.com",
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: 227.56,
    change: 2.49,
    changePercent: 1.11,
    logo: "https://logo.clearbit.com/amazon.com",
  },
  {
    symbol: "ARGT",
    name: "Global X MSCI Arg...",
    price: 74.23,
    change: 4.5,
    changePercent: 6.47,
    logo: "/global-x-logo.jpg",
  },
  {
    symbol: "DIS",
    name: "The Walt Disney C...",
    price: 111.0,
    change: -0.84,
    changePercent: -0.75,
    logo: "https://logo.clearbit.com/disney.com",
  },
  {
    symbol: "ET",
    name: "Energy Transfer E...",
    price: 16.64,
    change: -0.02,
    changePercent: -0.11,
    logo: "/energy-transfer-logo.jpg",
  },
  {
    symbol: "GBTC",
    name: "Grayscale Bitcoin ...",
    price: 95.01,
    change: -1.88,
    changePercent: -1.94,
    logo: "/grayscale-bitcoin-logo.jpg",
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc. - Cla...",
    price: 241.25,
    change: -3.06,
    changePercent: -1.25,
    logo: "https://logo.clearbit.com/google.com",
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporat...",
    price: 522.79,
    change: -2.42,
    changePercent: -0.46,
    logo: "https://logo.clearbit.com/microsoft.com",
  },
  {
    symbol: "TSLA",
    name: "Tesla, Inc.",
    price: 342.88,
    change: 8.45,
    changePercent: 2.53,
    logo: "https://logo.clearbit.com/tesla.com",
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    price: 891.23,
    change: 15.67,
    changePercent: 1.79,
    logo: "https://logo.clearbit.com/nvidia.com",
  },
  {
    symbol: "META",
    name: "Meta Platforms, Inc.",
    price: 478.32,
    change: -5.21,
    changePercent: -1.08,
    logo: "https://logo.clearbit.com/meta.com",
  },
  {
    symbol: "NFLX",
    name: "Netflix, Inc.",
    price: 612.45,
    change: 12.34,
    changePercent: 2.06,
    logo: "https://logo.clearbit.com/netflix.com",
  },
]

export function StockBrowsePage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredStocks = stocks.filter(
    (stock) =>
      stock.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-sidebar border-b border-border">
        <div className="flex items-center gap-4 p-4">
          <Link href="/dashboard/invest">
            <Button variant="ghost" size="icon" className="text-foreground">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-semibold text-foreground">Search Stocks</h1>
        </div>

        {/* Search Bar */}
        <div className="px-4 pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search US Stocks"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card border-border text-foreground placeholder:text-muted-foreground h-12"
            />
          </div>
        </div>

        {/* Featured Portfolios */}
        <div className="px-4 pb-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {featuredPortfolios.map((portfolio, index) => (
              <Button
                key={index}
                variant="outline"
                className="whitespace-nowrap border-border text-foreground hover:bg-accent bg-transparent"
              >
                {portfolio.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Featured Stocks</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-border text-foreground hover:bg-accent bg-transparent"
            >
              <ArrowUpDown className="w-4 h-4 mr-2" />
              Sort
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-border text-foreground hover:bg-accent bg-transparent"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        {/* Stock List */}
        <div className="space-y-2">
          {filteredStocks.map((stock) => (
            <Link key={stock.symbol} href={`/stocks/${stock.symbol.toLowerCase()}`}>
              <Card className="p-4 bg-card border-border hover:bg-accent transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center overflow-hidden">
                      <Image 
                        src={stock.logo || "/placeholder.svg"} 
                        alt={stock.name} 
                        width={32} 
                        height={32} 
                        className="object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = '/placeholder.svg';
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-foreground font-medium truncate">{stock.name}</h3>
                      <p className="text-muted-foreground text-sm">{stock.symbol}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-foreground font-semibold">${stock.price.toFixed(2)}</p>
                    <div className="flex items-center justify-end gap-1">
                      {stock.change >= 0 ? (
                        <TrendingUp className="w-3 h-3 text-allquity" />
                      ) : (
                        <TrendingDown className="w-3 h-3 text-destructive" />
                      )}
                      <p className={`text-sm ${stock.change >= 0 ? "text-allquity" : "text-destructive"}`}>
                        {stock.changePercent.toFixed(2)}%
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
