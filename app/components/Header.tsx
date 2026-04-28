'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Car, Phone, MapPin } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'New Cars', href: '/new-cars' },
    { name: 'Commercial Vehicles', href: '/commercial-vehicles' },
    { name: 'Pre-Owned', href: '/pre-owned-cars' },
    { name: 'Services', href: '/services' },
    { name: 'Finance', href: '/finance' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-neutral-900 text-white py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91-353-2123456</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Sevoke Road, Siliguri</span>
              </div>
            </div>
            <div className="text-neutral-300">
              Mon-Sat: 9AM-6PM | Sun: 10AM-5PM
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-soft sticky top-0 z-50">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-neutral-900">Sevoke Motors</h1>
                <p className="text-sm text-neutral-600 leading-none">Authorized Maruti Suzuki Dealer</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-700 hover:text-primary-600 font-medium text-15 transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/book-test-drive" className="btn-primary">
                Book Test Drive
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-neutral-700" />
              ) : (
                <Menu className="w-6 h-6 text-neutral-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200 bg-white">
            <div className="max-w-7xl mx-auto section-padding py-4">
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-neutral-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-neutral-200">
                  <Link 
                    href="/book-test-drive" 
                    onClick={() => setIsMenuOpen(false)}
                    className="btn-primary w-full"
                  >
                    Book Test Drive
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header