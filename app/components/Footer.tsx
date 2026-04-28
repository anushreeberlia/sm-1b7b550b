import Link from 'next/link'
import { Car, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'New Cars', href: '/new-cars' },
    { name: 'Pre-Owned Cars', href: '/pre-owned-cars' },
    { name: 'Commercial Vehicles', href: '/commercial-vehicles' },
    { name: 'Service Center', href: '/services' },
    { name: 'Finance Options', href: '/finance' },
  ]

  const services = [
    { name: 'Book Test Drive', href: '/book-test-drive' },
    { name: 'EMI Calculator', href: '/emi-calculator' },
    { name: 'Service Booking', href: '/service-booking' },
    { name: 'Car Comparison', href: '/compare' },
    { name: 'Insurance', href: '/insurance' },
    { name: 'Accessories', href: '/accessories' },
  ]

  const carModels = [
    'Alto K10', 'S-Presso', 'WagonR', 'Swift', 'Dzire', 'Ertiga',
    'Ignis', 'Baleno', 'Fronx', 'Ciaz', 'XL6', 'Grand Vitara'
  ]

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto section-padding py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Sevoke Motors</h3>
                <p className="text-sm text-neutral-400">Siliguri</p>
              </div>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              Your trusted Maruti Suzuki partner in Siliguri since 1995. Experience excellence in automotive sales, service, and customer care across North Bengal.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-neutral-300">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span>Sevoke Road, Siliguri, West Bengal - 734001</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span>+91-353-2123456</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span>info@sevokemotors.com</span>
              </div>
              <div className="flex items-start gap-3 text-neutral-300">
                <Clock className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p>Mon-Sat: 9:00 AM - 6:00 PM</p>
                  <p>Sun: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href} 
                    className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Car Models */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Popular Models</h4>
            <div className="grid grid-cols-2 gap-2">
              {carModels.map((model) => (
                <Link 
                  key={model} 
                  href={`/new-cars?model=${model.toLowerCase()}`}
                  className="text-sm text-neutral-300 hover:text-primary-400 transition-colors duration-200 py-1"
                >
                  {model}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto section-padding py-12">
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Stay Updated with Latest Offers
                </h3>
                <p className="text-primary-100 text-lg">
                  Get exclusive deals, new model launches, and service updates directly in your inbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-300"
                />
                <button className="btn-secondary bg-white text-primary-600 hover:bg-neutral-100 px-8 py-3">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto section-padding py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex flex-col lg:flex-row items-center gap-4 text-sm text-neutral-400">
              <p>&copy; {currentYear} Sevoke Motors Siliguri. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="hover:text-primary-400 transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-primary-400 transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/sitemap" className="hover:text-primary-400 transition-colors duration-200">
                  Sitemap
                </Link>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-neutral-400">Follow us:</span>
              <div className="flex items-center gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer