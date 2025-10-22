"use client"

import { useState } from "react"
import { TrendingUp, FileText, Vault, Target, FolderKanban, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const filterTabs = [
  { id: "all", label: "All" },
  { id: "usd", label: "USD only" },
  { id: "naira", label: "Naira only" },
]

const assetOfferings = [
  {
    id: "us-stocks",
    name: "US Stocks",
    description: "Buy U.S companies.",
    icon: TrendingUp,
    color: "bg-gradient-to-br from-orange-600 to-orange-700",
    currency: "usd",
    isNew: false,
    href: "/dashboard/stocks",
  },
  {
    id: "ng-stocks",
    name: "NG Stocks",
    description: "Buy local companies.",
    icon: TrendingUp,
    color: "bg-gradient-to-br from-teal-600 to-teal-700",
    currency: "naira",
    isNew: false,
    href: "/stocks",
  },
  {
    id: "treasury-bills",
    name: "Treasury Bills",
    description: "Buy government bills.",
    icon: FileText,
    color: "bg-gradient-to-br from-emerald-600 to-emerald-700",
    currency: "naira",
    isNew: false,
  },
  {
    id: "naira-savings",
    name: "Naira Savings",
    description: "Earn up to 17% per annum.",
    icon: Vault,
    color: "bg-gradient-to-br from-green-600 to-green-700",
    currency: "naira",
    isNew: true,
  },
  {
    id: "fixed-returns",
    name: "Fixed Returns",
    description: "Earn up to 7% dollar returns.",
    icon: Target,
    color: "bg-gradient-to-br from-yellow-600 to-yellow-700",
    currency: "usd",
    isNew: false,
  },
  {
    id: "managed-portfolio",
    name: "Managed Portfolio",
    description: "Let experts manage your money",
    icon: FolderKanban,
    color: "bg-gradient-to-br from-blue-600 to-blue-700",
    currency: "all",
    isNew: true,
  },
]

export function AssetsPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredAssets = assetOfferings.filter((asset) => {
    if (activeFilter === "all") return true
    if (activeFilter === "usd") return asset.currency === "usd" || asset.currency === "all"
    if (activeFilter === "naira") return asset.currency === "naira" || asset.currency === "all"
    return true
  })

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#a4dd6b] mb-2">Assets</h1>
        <p className="text-white">Explore investment opportunities and grow your wealth</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-3 mb-8">
        {filterTabs.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            variant={activeFilter === tab.id ? "default" : "outline"}
            className={
              activeFilter === tab.id
                ? "bg-allquity hover:bg-allquity/90 text-primary-foreground font-medium"
                : "border-border text-white hover:bg-accent hover:text-[#a4dd6b]"
            }
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Promotional Banner */}
      <Card className="mb-8 p-8 bg-gradient-to-br from-emerald-700 to-teal-700 border-0 relative overflow-hidden">
        <div className="relative z-10 max-w-xl">
          <h2 className="text-white font-bold text-2xl mb-2">Personalised investing?</h2>
          <p className="text-white/90 mb-6">Set up your account to work for you.</p>
          <Button className="bg-allquity hover:bg-allquity/90 text-primary-foreground font-medium">
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
        <div className="absolute right-8 bottom-0 text-9xl opacity-10">📊</div>
      </Card>

      {/* All Assets Offerings */}
      <div>
        <h2 className="text-2xl font-semibold text-[#a4dd6b] mb-6">All Assets Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAssets.map((asset) => {
            const Icon = asset.icon
            const CardContent = (
              <Card
                key={asset.id}
                className="group relative p-6 bg-card border border-gray-700 hover:bg-accent hover:border-allquity/50 transition-all cursor-pointer overflow-hidden h-full"
              >
                {asset.isNew && (
                  <Badge className="absolute top-4 right-4 bg-allquity text-primary-foreground hover:bg-allquity/90">
                    New
                  </Badge>
                )}
                <div
                  className={`w-16 h-16 rounded-xl ${asset.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[#a4dd6b] font-semibold text-lg mb-2">{asset.name}</h3>
                <p className="text-white text-sm leading-relaxed">{asset.description}</p>
                <div className="mt-4 flex items-center text-allquity opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium ">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            )

            return asset.href ? (
              <Link key={asset.id} href={asset.href} className="h-full">
                {CardContent}
              </Link>
            ) : (
              <div key={asset.id} className="h-full">{CardContent}</div>
            )
          })}
        </div>
      </div>

      {/* Additional Info Section */}
      <Card className="mt-8 p-6 bg-card border-border">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-allquity/20 flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-6 h-6 text-allquity" />
          </div>
          <div>
            <h3 className="text-[#a4dd6b] font-semibold mb-2">New to investing?</h3>
            <p className="text-white text-sm leading-relaxed mb-4">
              Start your investment journey with as little as $1. Our platform makes it easy to build wealth over time
              with diversified portfolios and expert guidance.
            </p>
            <Button variant="link" className="text-allquity hover:text-allquity/90 p-0">
              Learn the basics
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
