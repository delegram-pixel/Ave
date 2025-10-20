"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const Dropdown = ({
  title,
  children,
  activeDropdown,
  onMenuMouseEnter,
  onMenuMouseLeave,
  isMegaMenu = false,
}: {
  title: string
  children: React.ReactNode
  activeDropdown: string | null
  onMenuMouseEnter: (title: string) => void
  onMenuMouseLeave: () => void
  isMegaMenu?: boolean
}) => {
  const dropdownName = title.toLowerCase().replace(" ", "-")
  const isActive = activeDropdown === dropdownName

  const megaMenuClasses = "absolute left-0 right-0 top-full h-[300px] bg-gray-900 shadow-lg z-50"
  const standardMenuClasses = "absolute right-0 mt-4  w-48 bg-[#1c1c1e] border border-[#2c2c2e] rounded-lg shadow-lg py-2 z-50"

  return (
    <div
      className={isMegaMenu ? "static" : "relative"}
      onMouseEnter={() => onMenuMouseEnter(dropdownName)}
      onMouseLeave={onMenuMouseLeave}
    >
      <button
        className={`flex items-center space-x-1 transition-colors ${
          isActive ? "text-Allquity-green" : "text-white"
        }`}
      >
        <span>{title}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`${isMegaMenu ? megaMenuClasses : standardMenuClasses} transition-opacity duration-300 ease-in-out ${
          isActive ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {isMegaMenu ? (
          <div className="h-full flex p-6 px-4 sm:px-6 lg:px-8">{children}</div>
        ) : (
          children
        )}
      </div>
    </div>
  )
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleDropdownOpen = (dropdownName: string) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current)
    }
    setActiveDropdown(dropdownName)
  }

  const handleDropdownClose = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 200)
  }

  return (
    <header className="bg-[#061519] text-white sticky top-0 z-50 border-b border-[#0f2b33]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/Allquity-logo.png"
              alt="Allquity Logo"
              width={120}
              height={90}
              className="h-20 w-auto object-contain"
              priority
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.onerror = null
                target.src = "https://via.placeholder.com/120x40?text=Allquity"
              }}
            />
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            <Dropdown
              title="Investments"
              activeDropdown={activeDropdown}
              onMenuMouseEnter={handleDropdownOpen}
              onMenuMouseLeave={handleDropdownClose}
              isMegaMenu
            >
              <nav className="flex flex-col space-y-2">
                <a href="#" className="block py-[6px] text-gray-300 hover:text-Allquity-green transition-colors">Options</a>
                <Link href="/dashboard/stocks" className="block py-[6px] text-gray-300 hover:text-Allquity-green transition-colors">Stocks</Link>
                <a href="#" className="flex items-center justify-between py-[6px] text-gray-300 hover:text-Allquity-green transition-colors">
                  <span>Crypto</span>
                  <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">New</span>
                </a>
                <a href="#" className="block py-[6px] text-gray-300 hover:text-Allquity-green transition-colors">ETFs</a>
                <a href="#" className="flex items-center justify-between py-[6px] text-gray-300 hover:text-Allquity-green transition-colors">
                  <span>IPO</span>
                  <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">New</span>
                </a>
                <a href="#" className="block py-[6px] text-gray-300 hover:text-Allquity-green transition-colors">Fractional Shares</a>
                <a href="#" className="block py-[6px] text-gray-300 hover:text-Allquity-green transition-colors">Cash Sweep</a>
              </nav>
            </Dropdown>

            <Dropdown
              title="Features"
              activeDropdown={activeDropdown}
              onMenuMouseEnter={handleDropdownOpen}
              onMenuMouseLeave={handleDropdownClose}
              isMegaMenu
            >
              <nav className="flex flex-col space-y-2">
                <a href="#" className="block py-[6px] text-gray-300 hover:text-Allquity-green transition-colors">Allquity AI </a>
                <a href="#" className="block py-[6px] text-gray-300 hover:text-Allquity-green transition-colors">Paper Trade</a>
                <a href="#" className="flex items-center justify-between py-[6px] text-gray-300 hover:text-Allquity-green transition-colors">
                  <span>Chart</span>
                  <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">New</span>
                </a>
                <a href="#" className="block py-[6px] text-gray-300 hover:text-Allquity-green transition-colors">ETFs</a>
                <a href="#" className="flex items-center justify-between py-[6px] text-gray-300 hover:text-Allquity-green transition-colors">
                  <span>Stock Analysis</span>
                  <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">New</span>
                </a>
                <a href="#" className="block py-[6px] text-gray-300 hover:text-Allquity-green transition-colors">Level 2 Data</a>
                <a href="#" className="block py-[6px] text-gray-300 hover:text-Allquity-green transition-colors">Allquity Desktop</a>
              </nav>
            </Dropdown>

           

          <Dropdown
              title="Market Analysis"
              activeDropdown={activeDropdown}
              onMenuMouseEnter={handleDropdownOpen}
              onMenuMouseLeave={handleDropdownClose}
              isMegaMenu
            >
              <div className="grid grid-cols-3 gap-6 w-full max-w-4xl">
                <div>
                  <h3 className="font-semibold text-white mb-2">Real-time Quotes</h3>
                  <div className="border-t border-gray-700 mb-4"></div>
                  <nav className="flex flex-col space-y-2">
                    <a href="#" className="block text-gray-300 hover:text-Allquity-green transition-colors">Stocks Market</a>
                    <a href="#" className="block text-gray-300 hover:text-Allquity-green transition-colors">Options Market</a>
                    <a href="#" className="block text-gray-300 hover:text-Allquity-green transition-colors">Futures Market</a>
                    <a href="#" className="block text-gray-300 hover:text-Allquity-green transition-colors">ETF Market</a>
                    <a href="#" className="block text-gray-300 hover:text-Allquity-green transition-colors">Forex Market</a>
                  </nav>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Technical Tools</h3>
                  <div className="border-t border-gray-700 mb-4"></div>
                  <nav className="flex flex-col space-y-2">
                    <a href="#" className="block text-gray-300 hover:text-Allquity-green transition-colors">Stock Screener</a>
                    <a href="#" className="block text-gray-300 hover:text-Allquity-green transition-colors">Heat Map</a>
                    <a href="#" className="block text-gray-300 hover:text-Allquity-green transition-colors">Earnings Calendar</a>
                    <a href="#" className="block text-gray-300 hover:text-Allquity-green transition-colors">Institutional Tracker</a>
                  </nav>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Trading News</h3>
                  <div className="border-t border-gray-700 mb-4"></div>
                  <nav className="flex flex-col space-y-2">
                    <a href="#" className="block text-gray-300 hover:text-Allquity-green transition-colors">Headlines</a>
                    <a href="#" className="block text-gray-300 hover:text-Allquity-green transition-colors">Latest News</a>
                    <a href="#" className="block text-gray-300 hover:text-Allquity-green transition-colors">Financial Calendar</a>
                    <a href="#" className="block text-gray-300 hover:text-Allquity-green transition-colors">Trending Topics</a>
                    <a href="#" className="block text-gray-300 hover:text-Allquity-green transition-colors">Video Analysis</a>
                  </nav>
                </div>
              </div>
            </Dropdown>

            <Dropdown
              title="Pricing"
              activeDropdown={activeDropdown}
              onMenuMouseEnter={handleDropdownOpen}
              onMenuMouseLeave={handleDropdownClose}
              isMegaMenu
            >
              <nav className="flex flex-col space-y-2">
                <a href="#" className="block py-[6px] text-gray-300 hover:text-Allquity-green transition-colors">Pricing</a>
                <a href="#" className="block py-[6px] text-gray-300 hover:text-Allquity-green transition-colors">Crypto Pricing</a>
                <a href="#" className="block py-[6px] text-gray-300 hover:text-Allquity-green transition-colors">Margin Rate</a>
              </nav>
            </Dropdown>

           

            <Dropdown
              title="Resources"
              activeDropdown={activeDropdown}
              onMenuMouseEnter={handleDropdownOpen}
              onMenuMouseLeave={handleDropdownClose}
              isMegaMenu
            >
              <div className="grid grid-cols-4 gap-6 w-full max-w-5xl">
                <div>
                  <h3 className="font-semibold text-white mb-2">Strategies and Insights</h3>
                  <div className="border-t border-gray-700 mb-4"></div>
                  <nav className="flex flex-col space-y-2">
                    <a href="#" className="block text-gray-300 hover:text-Allquity-green transition-colors">Blogs</a>
                  </nav>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Allquity Guide</h3>
                  <div className="border-t border-gray-700 mb-4"></div>
                  <nav className="flex flex-col space-y-2">
                    <a href="#" className="block text-gray-300 hover:text-Allquity-green transition-colors">Allquity Tutorials</a>
                  </nav>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Allquity Lessons</h3>
                  <div className="border-t border-gray-700 mb-4"></div>
                  <nav className="flex flex-col space-y-2">
                    <a href="#" className="block text-gray-300 hover:text-Allquity-green transition-colors">Investment Courses</a>
                  </nav>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Allquity Community</h3>
                  <div className="border-t border-gray-700 mb-4"></div>
                  <nav className="flex flex-col space-y-2">
                    <a href="#" className="block text-gray-300 hover:text-Allquity-green transition-colors">Feed</a>
                    <a href="#" className="block text-gray-300 hover:text-Allquity-green transition-colors">Discussions</a>
                  </nav>
                </div>
              </div>
            </Dropdown>

            <Dropdown
              title="More"
              activeDropdown={activeDropdown}
              onMenuMouseEnter={handleDropdownOpen}
              onMenuMouseLeave={handleDropdownClose}
            >
              <Link href="/dashboard/help" className="block px-4 py-2 text-white hover:bg-[#2c2c2e] transition-colors">Support</Link>
              <a href="#" className="block px-4 py-2 text-white hover:bg-[#2c2c2e] transition-colors">About Us</a>
            </Dropdown>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* <button className="p-2 hover:bg-[#0f2b33] rounded-md transition-colors">
              <Search className="w-5 h-5" />
            </button> */}

            <div className="hidden lg:flex items-center space-x-2">
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  className="bg-[#a4dd6b] hover:bg-[#8ec65a] text-[#061519] border-[#a4dd6b] transition-colors"
                >
                  Log in
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 hover:bg-[#0f2b33] rounded-md transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#0f2b33]">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="hover:text-[#a4dd6b] transition-colors">
                Investments
              </a>
              <a href="#" className="hover:text-[#a4dd6b] transition-colors">
                Features
              </a>
              <a href="#" className="hover:text-[#a4dd6b] transition-colors">
                Market Analysis
              </a>
              <a href="#" className="hover:text-[#a4dd6b] transition-colors">
                Pricing
              </a>
              <a href="#" className="hover:text-[#a4dd6b] transition-colors">
                Resources
              </a>
              <a href="#" className="hover:text-[#a4dd6b] transition-colors">
                Support
              </a>
              <a href="#" className="hover:text-[#a4dd6b] transition-colors">
                About Us
              </a>
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  className="bg-[#a4dd6b] hover:bg-[#8ec65a] text-[#061519] border-[#a4dd6b] w-fit transition-colors"
                >
                  Log in
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}