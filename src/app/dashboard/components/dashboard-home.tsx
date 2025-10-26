"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus, Minus, Users, TrendingUp, DollarSign, Wallet, Gift, Newspaper, BarChart, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AddMoneyModal } from "./add-money-modal"

const promoCards = [
  {
    title: "Share your referral code & Earn up to $1,000",
    icon: Gift,
    color: "bg-[#166534] text-white",
  },
  {
    title: "What's new in Bamboo",
    icon: Newspaper,
    color: "bg-[#14b8a6] text-white",
  },
  {
    title: "NGX Investing for the Rest of 2025",
    icon: BarChart,
    color: "bg-[#eab308] text-black",
  },
  {
    title: "Let experts manage your money",
    icon: Briefcase,
    color: "bg-[#14b8a6] text-white",
  },
]

const portfolioItems = [
  { name: "US Stocks", amount: "$0.00", currency: "USD", icon: TrendingUp, color: "bg-[#dc2626]" },
  { name: "Crypto", amount: "$0.00", currency: "BTC, ETH", icon: TrendingUp, color: "bg-[#14b8a6]" },
]

const wallets = [
  { name: "USD Wallet", amount: "$0.00", flag: "🇺🇸", icon: DollarSign },
  { name: "Crypto Wallet", amount: "$0.00", flag: "₿", icon: Wallet },
]

export function DashboardHome() {
  const [showAddMoneyModal, setShowAddMoneyModal] = useState(false)

  return (
    <div className="p-4 bg-dashboard-bg min-h-full text-white">
      {/* Promotional Cards */}
      <div className="flex gap-3 overflow-x-auto pb-2 mb-6 scrollbar-hide">
        {promoCards.map((card, index) => {
          const Icon = card.icon
          return (
            <Card
              key={index}
              className={`p-3 ${card.color} border-0 rounded-2xl flex flex-col items-start justify-between text-left h-32 w-24 flex-shrink-0`}
            >
              <Icon className="w-8 h-8 mb-2" />
              <p className="text-xs font-medium leading-tight">{card.title}</p>
            </Card>
          )
        })}
      </div>

      {/* Total Wealth Section */}
      <Card className="mb-6 p-6 bg-[#2d2d2d] border-0 text-left rounded-2xl">
        <p className="text-sm text-gray-400 mb-2">
          Your total wealth <span className="text-[#14b8a6]">in USD</span>
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">$0<span className="text-gray-500">.00</span></h2>
        <div className="flex flex-col md:flex-row gap-3 justify-stretch">
          <Button
            className="bg-[#14b8a6] hover:bg-[#0f9b8e] text-white font-semibold flex-1 h-12 rounded-xl"
            onClick={() => setShowAddMoneyModal(true)}
          >
            <Plus className="w-5 h-5 mr-2" />
            Add money
          </Button>
          <Button className="border-0 text-white hover:bg-[#404040] bg-[#383838] flex-1 h-12 rounded-xl font-semibold">
            <Minus className="w-5 h-5 mr-2" />
            Withdraw
          </Button>
        </div>
      </Card>

      <div className="space-y-6">
        {/* Referrals */}
        <Card className="p-4 bg-card border-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-orange-400" />
              </div>
              <p className="text-sm md:text-base font-medium">Referrals</p>
            </div>
            <p className="text-base md:text-lg font-semibold">$0.00</p>
          </div>
        </Card>

        {/* Call to Action */}
        <Card className="p-6 bg-blue-900/50 border-0 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="relative z-10">
              <h3 className="font-semibold text-md md:text-lg mb-1">Ready to take an action?</h3>
              <p className="text-white/80 text-xs md:text-sm">Deposit any amount today, your goals start here</p>
            </div>
            <Image 
              src="/res.png" 
              alt="Coins" 
              width={60} 
              height={60}
              className="opacity-80 hidden sm:block"
            />
          </div>
        </Card>

        {/* Portfolio Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg md:text-xl font-semibold text-allquity">Portfolio</h2>
            <Button variant="link" className="text-allquity hover:text-allquity/90 p-0 h-auto">
              + New Investment
            </Button>
          </div>
          <div className="space-y-3">
            {portfolioItems.map((item, index) => (
              <Card
                key={index}
                className="w-full p-4 bg-card border-0 rounded-lg"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-medium">{item.name}</h4>
                      <p className="text-muted-foreground text-xs">{item.currency}</p>
                    </div>
                  </div>
                  <p className="text-base md:text-lg font-semibold">{item.amount}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Cash Section */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-allquity mb-4">Cash</h2>
          <div className="space-y-3">
            {wallets.map((wallet, index) => (
              <Card
                key={index}
                className="w-full p-4 bg-card border-0 rounded-lg"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-xl">
                      {wallet.flag}
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-medium">{wallet.name}</h4>
                      <p className="text-muted-foreground text-xs">Available balance</p>
                    </div>
                  </div>
                  <p className="text-base md:text-lg font-semibold">{wallet.amount}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <AddMoneyModal open={showAddMoneyModal} onOpenChange={setShowAddMoneyModal} />
    </div>
  )
}