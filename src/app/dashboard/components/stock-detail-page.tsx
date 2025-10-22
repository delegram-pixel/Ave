"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, Heart, TrendingDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { InsufficientBalanceModal } from "./insufficient-balance-modal"
import { AddMoneyModal } from "./add-money-modal"

interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  logo: string;
  marketStatus: string;
}

const stockData: Record<string, StockData> = {
  aapl: {
    symbol: "AAPL",
    name: "Apple, Inc.",
    price: 254.24,
    change: -4.03,
    changePercent: -1.56,
    logo: "https://logo.clearbit.com/apple.com",
    marketStatus: "Market closed",
  },
  amzn: {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: 227.56,
    change: 2.49,
    changePercent: 1.11,
    logo: "https://logo.clearbit.com/amazon.com",
    marketStatus: "Market closed",
  },
  googl: {
    symbol: "GOOGL",
    name: "Alphabet Inc. - Class A",
    price: 241.25,
    change: -3.06,
    changePercent: -1.25,
    logo: "https://logo.clearbit.com/google.com",
    marketStatus: "Market closed",
  },
}

const timePeriods = ["TODAY", "1W", "1M", "3M", "1Y", "5Y"]

export function StockDetailPage({ symbol }: { symbol: string }) {
  const [selectedPeriod, setSelectedPeriod] = useState("TODAY")
  const [isFavorite, setIsFavorite] = useState(false)
  const [showInsufficientBalanceModal, setShowInsufficientBalanceModal] = useState(false)
  const [showAddMoneyModal, setShowAddMoneyModal] = useState(false)

  const stock = stockData[symbol] || stockData.aapl

  const handleBuyClick = () => {
    // Simulate checking balance (always insufficient for demo)
    setShowInsufficientBalanceModal(true)
  }

  const handleMakeDeposit = () => {
    setShowAddMoneyModal(true)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-sidebar border-b border-border">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <Link href="/stocks">
              <Button variant="ghost" size="icon" className="text-foreground">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div className="text-center">
              <h1 className="text-xl font-semibold text-foreground">{stock.symbol}</h1>
              <p className="text-sm text-muted-foreground">{stock.name}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-foreground" onClick={() => setIsFavorite(!isFavorite)}>
            <Heart className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border">
          <button className="flex-1 py-3 text-sm font-medium text-foreground border-b-2 border-Allquity">About</button>
          <button className="flex-1 py-3 text-sm font-medium text-muted-foreground hover:text-foreground">
            Financials
          </button>
          <button className="flex-1 py-3 text-sm font-medium text-muted-foreground hover:text-foreground">News</button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Market Status */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <p className="text-sm text-muted-foreground">{stock.marketStatus}</p>
        </div>

        {/* Price Section */}
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-bold text-foreground">${stock.price.toFixed(2)}</h2>
            <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center overflow-hidden">
              <Image 
                src={stock.logo || "/placeholder.svg"} 
                alt={stock.name} 
                width={48} 
                height={48} 
                className="object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/placeholder.svg';
                }}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-red-500 font-medium">
              {stock.change > 0 ? "+" : ""}${stock.change.toFixed(2)}
            </p>
            <div className="flex items-center gap-1">
              <TrendingDown className="w-4 h-4 text-red-500" />
              <p className="text-red-500">{Math.abs(stock.changePercent).toFixed(2)}%</p>
            </div>
            <p className="text-muted-foreground">· Today</p>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div className="mb-6 h-64 bg-card border border-border rounded-lg relative overflow-hidden">
          {/* Simple line chart visualization */}
          <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
            <path
              d="M 0,100 L 50,80 L 100,90 L 150,60 L 200,70 L 250,50 L 300,65 L 350,45 L 400,55"
              fill="none"
              stroke="rgb(34, 197, 94)"
              strokeWidth="2"
              opacity="0.8"
            />
            <path
              d="M 0,100 L 50,80 L 100,90 L 150,60 L 200,70 L 250,50 L 300,65 L 350,45 L 400,55 L 400,200 L 0,200 Z"
              fill="url(#gradient)"
              opacity="0.2"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Time Period Selector */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          {timePeriods.map((period) => (
            <Button
              key={period}
              variant={selectedPeriod === period ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedPeriod(period)}
              className={
                selectedPeriod === period
                  ? "bg-Allquity text-Background"
                  : "text-muted-foreground hover:text-foreground"
              }
            >
              {period}
            </Button>
          ))}
        </div>

        {/* Recurring Purchase Card */}
        <Card className="mb-4 p-4 bg-gradient-to-br from-Allquity to-Allquity/80 border-0 cursor-pointer hover:scale-[1.02] transition-transform">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">💰</div>
              <div>
                <h3 className="text-Background font-semibold">Set a recurring purchase</h3>
                <p className="text-Background/90 text-sm">Automate your investing</p>
              </div>
            </div>
            <div className="text-Background">›</div>
          </div>
        </Card>

        {/* Info Card */}
        <Card className="mb-6 p-4 bg-muted border-border">
          <p className="text-sm text-foreground">{stock.symbol} shares are trading within their normal range today.</p>
        </Card>

        {/* Buy Button */}
        <Button
          className="w-full bg-Allquity hover:bg-Allquity/90 text-Background font-medium h-12 text-lg"
          onClick={handleBuyClick}
        >
          + Buy
        </Button>
      </div>

      {/* Modals */}
      <InsufficientBalanceModal
        open={showInsufficientBalanceModal}
        onOpenChange={setShowInsufficientBalanceModal}
        stockSymbol={stock.symbol}
        onMakeDeposit={handleMakeDeposit}
      />
      <AddMoneyModal open={showAddMoneyModal} onOpenChange={setShowAddMoneyModal} />
    </div>
  )
}
