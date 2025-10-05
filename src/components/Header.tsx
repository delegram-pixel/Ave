'use client';

import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-moomoo-orange rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">m</span>
              </div>
              <span className="ml-2 text-xl font-semibold">moomoo</span>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-moomoo-orange transition-colors">
                <span>Investments</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-moomoo-orange transition-colors">
                <span>Features</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-moomoo-orange transition-colors">
                <span>Market Analysis</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <a href="#" className="hover:text-moomoo-orange transition-colors">Pricing</a>

            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-moomoo-orange transition-colors">
                <span>Promotions</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-moomoo-orange transition-colors">
                <span>Resources</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <a href="#" className="hover:text-moomoo-orange transition-colors">Support</a>

            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-moomoo-orange transition-colors">
                <span>About Us</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-800 rounded-md">
              <Search className="w-5 h-5" />
            </button>

            <div className="hidden lg:flex items-center space-x-2">
              <Button
                variant="outline"
                className="bg-moomoo-orange hover:bg-moomoo-orange-hover text-white border-moomoo-orange"
              >
                Log in
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="hover:text-moomoo-orange transition-colors">Investments</a>
              <a href="#" className="hover:text-moomoo-orange transition-colors">Features</a>
              <a href="#" className="hover:text-moomoo-orange transition-colors">Market Analysis</a>
              <a href="#" className="hover:text-moomoo-orange transition-colors">Pricing</a>
              <a href="#" className="hover:text-moomoo-orange transition-colors">Promotions</a>
              <a href="#" className="hover:text-moomoo-orange transition-colors">Resources</a>
              <a href="#" className="hover:text-moomoo-orange transition-colors">Support</a>
              <a href="#" className="hover:text-moomoo-orange transition-colors">About Us</a>
              <Button
                variant="outline"
                className="bg-moomoo-orange hover:bg-moomoo-orange-hover text-white border-moomoo-orange w-fit"
              >
                Log in
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
