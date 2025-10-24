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
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-card border-b border-border">
        <div className="flex items-center justify-between p-4">
          <Link href="/dashboard/stocks">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="text-center">
            <h1 className="text-lg font-semibold">{stock.symbol}</h1>
            <p className="text-sm text-muted-foreground truncate max-w-[200px]">{stock.name}</p>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsFavorite(!isFavorite)}>
            <Heart className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border">
          <button className="flex-1 py-3 text-sm font-medium text-allquity border-b-2 border-allquity">About</button>
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
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h2 className="text-4xl md:text-5xl font-bold">${stock.price.toFixed(2)}</h2>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-secondary flex items-center justify-center overflow-hidden">
              <Image 
                src={stock.logo || "/placeholder.svg"} 
                alt={`${stock.name} logo`}
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
            <p className="font-medium text-destructive">
              {stock.change > 0 ? "+" : ""}${stock.change.toFixed(2)}
            </p>
            <div className="flex items-center gap-1">
              <TrendingDown className="w-4 h-4 text-destructive" />
              <p className="text-destructive">{Math.abs(stock.changePercent).toFixed(2)}%</p>
            </div>
            <p className="text-muted-foreground text-sm">· Today</p>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div className="mb-6 h-64 bg-card border border-border rounded-lg relative overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
            <path
              d="M 0,100 C 50,80 150,120 200,70 S 350,20 400,55"
              fill="none"
              stroke="hsl(var(--destructive))"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Time Period Selector */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {timePeriods.map((period) => (
            <Button
              key={period}
              variant={selectedPeriod === period ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedPeriod(period)}
              className={
                selectedPeriod === period
                  ? "bg-allquity hover:bg-allquity/90 text-primary-foreground"
                  : "border-border bg-card hover:bg-accent"
              }
            >
              {period}
            </Button>
          ))}
        </div>

        {/* Recurring Purchase Card */}
        <Card className="mb-6 p-4 bg-gradient-to-br from-allquity to-green-600 border-0 cursor-pointer hover:scale-[1.02] transition-transform">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">💰</div>
              <div>
                <h3 className="text-primary-foreground font-semibold">Set a recurring purchase</h3>
                <p className="text-primary-foreground/90 text-sm">Automate your investing</p>
              </div>
            </div>
            <div className="text-primary-foreground text-2xl font-light">›</div>
          </div>
        </Card>

        {/* Info Card */}
        <Card className="mb-6 p-4 bg-card border-border">
          <p className="text-sm text-muted-foreground">{stock.symbol} shares are trading within their normal range today.</p>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="w-full border-border bg-card hover:bg-accent h-12 text-lg"
          >
            Sell
          </Button>
          <Button
            className="w-full bg-allquity hover:bg-allquity/90 text-primary-foreground font-medium h-12 text-lg"
            onClick={handleBuyClick}
          >
            Buy
          </Button>
        </div>
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
