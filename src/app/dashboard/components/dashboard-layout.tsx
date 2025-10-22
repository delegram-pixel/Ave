"use client"

import type React from "react"
import { useState } from "react"
import { Home, TrendingUp, BookOpen, HelpCircle, Search, Bell, User, Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const navigation = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Invest", href: "/dashboard/invest", icon: TrendingUp },
  { name: "Learn", href: "/dashboard/learn", icon: BookOpen },
  { name: "Help", href: "/dashboard/help", icon: HelpCircle },
]

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen w-full bg-dashboard-bg overflow-x-hidden">
      {/* Sidebar Navigation */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 border-r border-gray-700 bg-dashboard-bg flex-col transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:flex`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-sidebar-border">
          <h1 className="text-2xl font-bold text-[#a4dd6b]">Allquity</h1>
          <p className="text-sm text-white mt-1">Investment Platform</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-allquity text-primary-foreground font-medium"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-700">
          <Link href="/dashboard/profile">
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-700 cursor-pointer hover:bg-gray-600 transition-colors">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-allquity">
                <User className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">Callistus I.</p>
                <p className="text-xs text-gray-400 truncate">View Profile</p>
              </div>
            </div>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 border-b border-gray-700 bg-dashboard-bg flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-400 hover:text-white"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu className="w-6 h-6" />
            </Button>
            <div className="hidden md:flex flex-1 max-w-xl">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search investments, transactions..."
                  className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 ml-4">
            <Button variant="ghost" size="icon" className="relative text-gray-400 hover:text-white">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-allquity"></span>
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">{children}</main>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  )
}
