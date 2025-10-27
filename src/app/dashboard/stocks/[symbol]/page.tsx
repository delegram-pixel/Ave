"use client"

import { use } from "react"
import { StockDetailPage } from "@/app/dashboard/components/stock-detail-page"
import { DashboardLayout } from "@/app/dashboard/components/dashboard-layout"

export default function StockPage({ params }: { params: Promise<{ symbol: string }> }) {
  const { symbol } = use(params)
  
  return (
    <DashboardLayout>
      <StockDetailPage symbol={symbol} />
    </DashboardLayout>
  )
}