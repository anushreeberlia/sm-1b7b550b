'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MapPin, Clock, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNewCarsOpen, setIsNewCarsOpen] = useState(false)

  return (
    <>
      {/* Top Bar */}
      <div className="bg-automotive-dark text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto section-padding flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91-353-2123456</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Mon-Sat: 9AM-6PM</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Sevoke Road, Siliguri</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SM</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Sevoke Motors</h1>
                <p className="text-xs text-gray-600">Authorized Maruti Suzuki Dealer</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                About Us
              </Link>
              
              {/* New Cars Dropdown */}
              <div className="relative">
                <button 
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors flex items-center gap-1"
                  onMouseEnter={() => setIsNewCarsOpen(true)}
                  onMouseLeave={() => setIsNewCarsOpen(false)}
                >
                  New Cars
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isNewCarsOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                    onMouseEnter={() => setIsNewCarsOpen(true)}
                    onMouseLeave={() => setIsNewCarsOpen(false)}
                  >
                    <Link href="/new-cars" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-600">
                      All New Cars
                    </Link>
                    <Link href="/new-cars?category=Arena" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-600">
                      Arena Cars
                    </Link>
                    <Link href="/new-cars?category=Nexa" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-600">
                      Nexa Cars
                    </Link>
                  </div>
                )}
              </div>
              
              <Link href="/commercial" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Commercial
              </Link>
              <Link href="/pre-owned" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Pre-Owned
              </Link>
              <Link href="/service" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Service
              </Link>
              <Link href="/finance" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Finance
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <Link href="/book-test-drive" className="hidden lg:block btn-primary">
              Book Test Drive
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-3">
                <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium py-2">
                  Home
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium py-2">
                  About Us
                </Link>
                <Link href="/new-cars" className="text-gray-700 hover:text-primary-600 font-medium py-2">
                  New Cars
                </Link>
                <Link href="/commercial" className="text-gray-700 hover:text-primary-600 font-medium py-2">
                  Commercial Vehicles
                </Link>
                <Link href="/pre-owned" className="text-gray-700 hover:text-primary-600 font-medium py-2">
                  Pre-Owned Cars
                </Link>
                <Link href="/service" className="text-gray-700 hover:text-primary-600 font-medium py-2">
                  Service & Repairs
                </Link>
                <Link href="/finance" className="text-gray-700 hover:text-primary-600 font-medium py-2">
                  Finance & Offers
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium py-2">
                  Contact Us
                </Link>
                <Link href="/book-test-drive" className="btn-primary mt-4">
                  Book Test Drive
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}