import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-automotive-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto section-padding py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SM</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Sevoke Motors</h3>
                <p className="text-sm text-gray-400">Authorized Maruti Suzuki Dealer</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Serving Siliguri and North Bengal with premium automotive solutions for over 25 years. Your trusted partner for Maruti Suzuki cars, service, and support.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/new-cars" className="text-gray-300 hover:text-white transition-colors">New Cars</Link></li>
              <li><Link href="/commercial" className="text-gray-300 hover:text-white transition-colors">Commercial Vehicles</Link></li>
              <li><Link href="/pre-owned" className="text-gray-300 hover:text-white transition-colors">Pre-Owned Cars</Link></li>
              <li><Link href="/service" className="text-gray-300 hover:text-white transition-colors">Service & Repairs</Link></li>
              <li><Link href="/book-test-drive" className="text-gray-300 hover:text-white transition-colors">Book Test Drive</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-300">New Car Sales</span></li>
              <li><span className="text-gray-300">Arena & Nexa Models</span></li>
              <li><span className="text-gray-300">Commercial Vehicles</span></li>
              <li><span className="text-gray-300">True Value (Pre-owned)</span></li>
              <li><span className="text-gray-300">Car Financing</span></li>
              <li><span className="text-gray-300">Insurance Services</span></li>
              <li><span className="text-gray-300">Authorized Service</span></li>
              <li><span className="text-gray-300">Genuine Spare Parts</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300">
                    Sevoke Road, Siliguri<br />
                    West Bengal - 734001
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91-353-2123456</p>
                  <p className="text-sm text-gray-400">Sales & General Inquiry</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <p className="text-gray-300">info@sevokemotors.com</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300">Mon-Sat: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto section-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Sevoke Motors. All rights reserved. | Authorized Maruti Suzuki Dealer
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}