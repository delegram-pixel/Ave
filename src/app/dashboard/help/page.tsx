"use client"

import { DashboardLayout } from "../components/dashboard-layout"
import { Card } from "@/components/ui/card"
import { ChevronRight, MessageSquare, HelpCircle } from "lucide-react"

export default function HelpPage() {
  return (
    <DashboardLayout>
      <div className="bg-teal-700 text-white px-6 pb-8 md:hidden">
        <h1 className="text-4xl font-bold mb-2">Hello there 👋</h1>
        <p className="text-xl">How can we help?</p>
      </div>
      <div className="p-6 md:p-8 max-w-4xl mx-auto">
        <div className="hidden md:block mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Hello there</h1>
          <p className="text-gray-300">How can we help?</p>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="flex-1 p-4 bg-card border flex items-center justify-between cursor-pointer hover:bg-card/80 transition">
              <span className="font-semibold text-white">Help</span>
              <HelpCircle size={20} className="text-teal-700" />
            </Card>
            <Card className="flex-1 p-4 bg-card border flex items-center justify-between cursor-pointer hover:bg-card/80 transition">
              <span className="font-semibold text-white">Messages</span>
              <MessageSquare size={20} className="text-teal-700" />
            </Card>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4">What do you need help with today?</h2>
          </div>

          <Card className="p-6 bg-card border cursor-pointer hover:bg-card/80 transition flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white mb-1">Send us a message</h3>
              <p className="text-sm text-gray-300">We&apos;ll be back online in 2 hours</p>
            </div>
            <ChevronRight size={20} className="text-teal-700" />
          </Card>

          <Card className="p-6 bg-card border cursor-pointer hover:bg-card/80 transition">
            <h3 className="font-bold text-white mb-2">How to Contact Our Support Team</h3>
            <p className="text-sm text-gray-300">Hi there! Is there an issue or question you&apos;d like to...</p>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}