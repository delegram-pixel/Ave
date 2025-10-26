"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowLeft, Search, TrendingUp, TrendingDown, SlidersHorizontal, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { stocks as initialStocks } from "./stock-data"
import Link from "next/link"

export function StockBrowsePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [stocks, setStocks] = useState<typeof initialStocks>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setStocks(initialStocks)
      setLoading(false)
    }, 1500)
  }, [])

  const filteredStocks = stocks.filter(
    (stock) =>
      stock.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-dashboard-bg text-white">
      {/* Content */}
      <div className="space-y-6">
        {/* Back Button */}
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground -ml-2"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search stocks..."
            className="w-full bg-card border-border pl-10 focus-visible:ring-1 focus-visible:ring-ring"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-allquity">Featured Stocks</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-border hover:bg-accent bg-card"
            >
              <ArrowUpDown className="w-4 h-4 mr-2" />
              Sort
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-border hover:bg-accent bg-card"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        {/* Stock List */}
        <div className="space-y-3">
          {loading ? (
            <div className="flex justify-center items-center h-48">
              <p>Loading stocks...</p>
            </div>
          ) : filteredStocks.length > 0 ? (
            filteredStocks.map((stock) => (
              <Link key={stock.symbol} href={`/dashboard/stocks/${stock.symbol.toLowerCase()}`}>
                <Card className="p-4 bg-card border-border hover:bg-accent transition-colors cursor-pointer">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="w-12 h-12 rounded-lg bg-secondary flex-shrink-0 flex items-center justify-center overflow-hidden">
                        <Image
                          src={stock.logo || "/placeholder.svg"}
                          alt={`${stock.name} logo`}
                          width={32}
                          height={32}
                          className="object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.onerror = null
                            target.src = "/placeholder.svg"
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium truncate">{stock.name}</h3>
                        <p className="text-muted-foreground text-sm">{stock.symbol}</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-semibold">${stock.price.toFixed(2)}</p>
                      <div className="flex items-center justify-end gap-1">
                        {stock.change >= 0 ? (
                          <TrendingUp className="w-3 h-3 text-allquity" />
                        ) : (
                          <TrendingDown className="w-3 h-3 text-destructive" />
                        )}
                        <p
                          className={`text-sm font-medium ${
                            stock.change >= 0 ? "text-allquity" : "text-destructive"
                          }`}
                        >
                          {stock.changePercent.toFixed(2)}%
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))
          ) : (
            <div className="flex justify-center items-center h-48">
              <p>No stocks found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
