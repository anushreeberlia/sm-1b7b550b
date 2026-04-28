import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-automotive-dark via-gray-900 to-primary-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1920&h=1080&fit=crop"
          alt="Sevoke Motors Showroom"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto section-padding min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Drive Your <span className="text-primary-400">Dreams</span> Home
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Sevoke Motors - Siliguri's trusted Maruti Suzuki dealership for over 25 years. 
              Discover Arena & Nexa cars with unmatched service and genuine care.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/book-test-drive" className="btn-primary flex items-center gap-2 justify-center text-lg px-8 py-4">
                Book Test Drive
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/new-cars" className="btn-secondary text-white border-white hover:bg-white hover:text-gray-900 flex items-center gap-2 justify-center text-lg px-8 py-4">
                View Cars
              </Link>
            </div>
            
            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="tel:+913532123456" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call Us Now</p>
                  <p className="font-semibold">+91-353-2123456</p>
                </div>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Visit Showroom</p>
                  <p className="font-semibold">Sevoke Road, Siliguri</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Featured Car */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Featured This Month</h3>
                <p className="text-gray-300">Maruti Suzuki Grand Vitara</p>
              </div>
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&h=300&fit=crop"
                  alt="Maruti Suzuki Grand Vitara"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-white">
                <p className="text-primary-400 text-2xl font-bold mb-2">Starting ₹10.70 Lakh*</p>
                <p className="text-gray-300 mb-4">Mild Hybrid & Strong Hybrid Options</p>
                <div className="flex gap-3">
                  <Link href="/book-test-drive" className="btn-primary flex-1 text-center">
                    Book Test Drive
                  </Link>
                  <Link href="/emi-calculator" className="btn-secondary border-white text-white hover:bg-white hover:text-gray-900 flex-1 text-center">
                    EMI Calculator
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm">Explore More</p>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}