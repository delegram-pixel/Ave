'use client';

import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Header() {  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#061519] text-white sticky top-0 z-50 border-b border-[#0f2b33]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://via.placeholder.com/120x40?text=Allquity';
              }}
            />
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-6">
            <div className="relative group">
              <span className="flex items-center space-x-1 hover:text-[#a4dd6b] transition-colors">
                <span>Investments</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>

            <div className="relative group">
              <span className="flex items-center space-x-1 hover:text-[#a4dd6b] transition-colors">
                <span>Features</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>

            <div className="relative group">
              <span className="flex items-center space-x-1 hover:text-[#a4dd6b] transition-colors">
                <span>Market Analysis</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>

            <a href="#" className="hover:text-[#a4dd6b] transition-colors">Pricing</a>

            <div className="relative group">
              <span className="flex items-center space-x-1 hover:text-[#a4dd6b] transition-colors">
                <span>Promotions</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>

            <div className="relative group">
              <span className="flex items-center space-x-1 hover:text-[#a4dd6b] transition-colors">
                <span>Resources</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>

            <a href="#" className="hover:text-[#a4dd6b] transition-colors">Support</a>

            <div className="relative group">
              <span className="flex items-center space-x-1 hover:text-[#a4dd6b] transition-colors">
                <span>About Us</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="p-2 hover:bg-[#0f2b33] rounded-md transition-colors">
              <Search className="w-5 h-5" />
            </button>

            <div className="hidden lg:flex items-center space-x-2">
              <Button
                variant="outline"
                className="bg-[#a4dd6b] hover:bg-[#8ec65a] text-[#061519] border-[#a4dd6b] transition-colors"
              >
                Log in
              </Button>
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
              <a href="#" className="hover:text-[#a4dd6b] transition-colors">Investments</a>
              <a href="#" className="hover:text-[#a4dd6b] transition-colors">Features</a>
              <a href="#" className="hover:text-[#a4dd6b] transition-colors">Market Analysis</a>
              <a href="#" className="hover:text-[#a4dd6b] transition-colors">Pricing</a>
              <a href="#" className="hover:text-[#a4dd6b] transition-colors">Promotions</a>
              <a href="#" className="hover:text-[#a4dd6b] transition-colors">Resources</a>
              <a href="#" className="hover:text-[#a4dd6b] transition-colors">Support</a>
              <a href="#" className="hover:text-[#a4dd6b] transition-colors">About Us</a>
              <Button
                variant="outline"
                className="bg-[#a4dd6b] hover:bg-[#8ec65a] text-[#061519] border-[#a4dd6b] w-fit transition-colors"
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
