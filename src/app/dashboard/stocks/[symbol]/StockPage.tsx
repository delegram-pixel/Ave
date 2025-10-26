"use client"

import { StockDetailPage } from "@/app/dashboard/components/stock-detail-page"
import { DashboardLayout } from "@/app/dashboard/components/dashboard-layout"

export default function StockPage({ params }: { params: { symbol: string } }) {
  return (
    <DashboardLayout>
      <StockDetailPage symbol={params.symbol} />
    </DashboardLayout>
  )
}
