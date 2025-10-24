"use client"

import { useState } from "react"
import { Plus, Minus, Users, TrendingUp, DollarSign, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AddMoneyModal } from "./add-money-modal"

const promoCards = [
  {
    title: "Share your referral code",
    subtitle: "Earn up to $1,000",
    color: "from-emerald-600 to-emerald-700",
  },
  {
    title: "What's new in Allquity",
    subtitle: "Discover latest features",
    color: "from-teal-600 to-teal-700",
  },
  {
    title: "NGX Investing for the Rest of 2025",
    subtitle: "Learn investment strategies",
    color: "from-yellow-500 to-yellow-600",
  },
]

const portfolioItems = [
  { name: "US Stocks", amount: "$0.00", currency: "USD", icon: TrendingUp, color: "bg-orange-600" },
  { name: "NG Stocks", amount: "₦0.00", currency: "NGN", icon: TrendingUp, color: "bg-teal-500" },
]

const wallets = [
  { name: "USD Wallet", amount: "$0.00", flag: "🇺🇸", icon: DollarSign },
  { name: "NGN Wallet", amount: "₦0.00", flag: "🇳🇬", icon: Wallet },
]

export function DashboardHome() {
  const [showAddMoneyModal, setShowAddMoneyModal] = useState(false)

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto bg-gray-950 min-h-full">
      {/* Promotional Cards Carousel */}
      <div className="mb-8">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {promoCards.map((card, index) => (
            <Card
              key={index}
              className={`min-w-[320px] p-6 bg-gradient-to-br ${card.color} border border-gray-700 cursor-pointer hover:scale-105 transition-transform`}
            >
              <h3 className="text-white font-semibold text-lg mb-1">{card.title}</h3>
              <p className="text-white/90 text-sm">{card.subtitle}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Total Wealth Section */}
      <Card className="mb-8 p-6 md:p-8 bg-gray-800 border-gray-700">
        <div className="mb-6">
          <p className="text-white text-sm mb-2">
            Your total wealth <span className="text-allquity">in NGN</span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">₦0.00</h2>
          <div className="flex flex-wrap gap-4">
            <Button
              className="bg-allquity hover:bg-allquity/90 text-primary-foreground font-medium"
              onClick={() => setShowAddMoneyModal(true)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add money
            </Button>
            <Button variant="outline" className="border-border text-white hover:bg-gray-300 bg-transparent">
              <Minus className="w-4 h-4 mr-2" />
              Withdraw
            </Button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Referrals */}
          <Card className="p-6 bg-gray-800 border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-orange-600/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Referrals</h3>
                  <p className="text-gray-300 text-sm">Invite friends to earn</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-white">$0.00</p>
            </div>
          </Card>

          {/* Call to Action */}
          <Card className="p-8 bg-gradient-to-br from-allquity/90 to-allquity border-0 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-white font-semibold text-xl mb-2">Ready to take an action?</h3>
              <p className="text-white/90 text-sm mb-4">Deposit any amount today, your goals start here</p>
            </div>
            <div className="absolute right-4 bottom-4 text-6xl opacity-20">💰</div>
          </Card>

          {/* Portfolio Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-[#a4dd6b]">Portfolio</h2>
              <Button variant="link" className="text-[#a4dd6b] hover:text-[#a4dd6b]/90 p-0 h-auto">
                + New Investment
              </Button>
            </div>
            <div className="space-y-3">
              {portfolioItems.map((item, index) => (
                <Card
                  key={index}
                  className="w-full p-4 bg-gray-800 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{item.name}</h4>
                        <p className="text-white text-xs">{item.currency}</p>
                      </div>
                    </div>
                    <p className="text-lg font-semibold text-white">{item.amount}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Cash Section */}
          <div>
            <h2 className="text-xl font-semibold text-[#a4dd6b] mb-4">Cash</h2>
            <div className="space-y-3">
              {wallets.map((wallet, index) => (
                <Card
                  key={index}
                  className="w-full p-4 bg-gray-800 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-xl">
                        {wallet.flag}
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{wallet.name}</h4>
                        <p className="text-gray-300 text-xs">Available balance</p>
                      </div>
                    </div>
                    <p className="text-lg font-semibold text-white">{wallet.amount}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <Card className="p-6 bg-gray-800 border border-gray-700">
            <h3 className="text-[#a4dd6b] font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start border-gray-600 text-white hover:bg-[#a4dd6b]/20 hover:border-[#a4dd6b]/30 bg-transparent h-12 transition-colors"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Start Investing
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start border-gray-600 text-white hover:bg-[#a4dd6b]/20 hover:border-[#a4dd6b]/30 bg-transparent h-12 transition-colors"
              >
                <Users className="w-4 h-4 mr-2" />
                Refer a Friend
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start border-gray-600 text-white hover:bg-[#a4dd6b]/20 hover:border-[#a4dd6b]/30 bg-transparent h-12 transition-colors"
              >
                <Wallet className="w-4 h-4 mr-2" />
                Fund Wallet
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <AddMoneyModal open={showAddMoneyModal} onOpenChange={setShowAddMoneyModal} />
    </div>
  )
}
