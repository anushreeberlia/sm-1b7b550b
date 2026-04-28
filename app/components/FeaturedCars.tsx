'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Fuel, Users, Car, Zap, Settings } from 'lucide-react'

const featuredCars = [
  {
    id: 1,
    name: 'Grand Vitara',
    category: 'Nexa',
    tagline: 'The Intelligent SUV',
    price: '₹10.70 - ₹19.94 Lakh',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&h=300&fit=crop',
    features: ['Strong Hybrid', 'AllGrip AWD', 'SmartPlay Pro+'],
    highlights: ['Best in Segment Mileage', 'Premium Interior', '6 Airbags'],
    fuel: 'Petrol/Hybrid',
    seating: '5',
    transmission: 'Manual/AT',
    popular: true
  },
  {
    id: 2,
    name: 'Fronx',
    category: 'Nexa',
    tagline: 'Bold. Sporty. Smart.',
    price: '₹7.51 - ₹13.04 Lakh',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&h=300&fit=crop',
    features: ['Turbo Engine', 'Coupe SUV Design', '9" SmartPlay Pro+'],
    highlights: ['1.0L Turbo Engine', '360° Camera', 'HUD Display'],
    fuel: 'Petrol',
    seating: '5',
    transmission: 'Manual/AT',
    popular: false
  },
  {
    id: 3,
    name: 'Swift',
    category: 'Arena',
    tagline: 'Born to Lead',
    price: '₹5.73 - ₹8.67 Lakh',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=300&fit=crop',
    features: ['DualJet Engine', 'AMT Available', 'SmartPlay Studio'],
    highlights: ['22.38 kmpl Mileage', 'Sporty Design', 'Spacious Interior'],
    fuel: 'Petrol',
    seating: '5',
    transmission: 'Manual/AMT',
    popular: true
  },
  {
    id: 4,
    name: 'Baleno',
    category: 'Nexa',
    tagline: 'Crafted Futurism',
    price: '₹6.61 - ₹9.88 Lakh',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=500&h=300&fit=crop',
    features: ['Next Gen Design', 'SmartPlay Pro', '16" Alloys'],
    highlights: ['Most Spacious', 'Premium Features', 'Head-Up Display'],
    fuel: 'Petrol',
    seating: '5',
    transmission: 'Manual/CVT',
    popular: false
  }
]

const FeaturedCars = () => {
  const [activeTab, setActiveTab] = useState('all')
  
  const filteredCars = activeTab === 'all' ? featuredCars : featuredCars.filter(car => car.category.toLowerCase() === activeTab)

  return (
    <section className="py-24 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
            <Car className="w-4 h-4" />
            <span>Featured Collection</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900">
            Discover Your Perfect
            <span className="block text-transparent bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text">
              Maruti Suzuki
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Explore our handpicked selection of the most popular and innovative vehicles. 
            From fuel-efficient hatchbacks to premium SUVs, find the car that matches your lifestyle.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-soft border border-neutral-200">
            <div className="flex gap-2">
              {[
                { key: 'all', label: 'All Cars', count: featuredCars.length },
                { key: 'arena', label: 'Arena', count: featuredCars.filter(c => c.category === 'Arena').length },
                { key: 'nexa', label: 'Nexa', count: featuredCars.filter(c => c.category === 'Nexa').length }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                    activeTab === tab.key
                      ? 'bg-primary-600 text-white shadow-medium'
                      : 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {filteredCars.map((car, index) => (
            <div key={car.id} className={`group relative ${index === 0 || index === 1 ? 'lg:col-span-1' : ''}`}>
              {/* Popular Badge */}
              {car.popular && (
                <div className="absolute top-6 left-6 z-20 bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Popular
                </div>
              )}

              {/* Category Badge */}
              <div className="absolute top-6 right-6 z-20">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  car.category === 'Arena' 
                    ? 'bg-blue-100 text-blue-800 border border-blue-200'
                    : 'bg-purple-100 text-purple-800 border border-purple-200'
                }`}>
                  {car.category}
                </span>
              </div>

              {/* Main Card */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-hard transition-all duration-500 group-hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-64 lg:h-72 overflow-hidden">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  {/* Title */}
                  <div className="space-y-2">
                    <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors duration-200">
                      {car.name}
                    </h3>
                    <p className="text-neutral-600 font-medium">{car.tagline}</p>
                    <p className="text-2xl font-bold text-primary-600">{car.price}</p>
                  </div>

                  {/* Specs */}
                  <div className="flex items-center gap-6 text-sm text-neutral-600">
                    <div className="flex items-center gap-2">
                      <Fuel className="w-4 h-4 text-primary-500" />
                      <span>{car.fuel}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary-500" />
                      <span>{car.seating} Seater</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Settings className="w-4 h-4 text-primary-500" />
                      <span>{car.transmission}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutral-800">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {car.features.map((feature, idx) => (
                        <span key={idx} className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutral-800">Highlights</h4>
                    <div className="space-y-2">
                      {car.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span className="text-sm text-neutral-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4">
                    <Link href={`/book-test-drive?car=${car.name}`} className="btn-primary flex-1 justify-center">
                      Book Test Drive
                    </Link>
                    <Link href={`/new-cars`} className="btn-secondary px-6">
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-8">
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-12 text-white">
            <div className="max-w-3xl mx-auto space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold">
                Can't Find Your Perfect Match?
              </h3>
              <p className="text-xl text-primary-100 leading-relaxed">
                Explore our complete collection of 15+ models from Arena and Nexa. Our experts will help you find the perfect car for your needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/new-cars" className="btn-secondary bg-white text-primary-600 hover:bg-neutral-100">
                  View All Cars
                </Link>
                <Link href="/contact" className="btn-primary bg-primary-500 hover:bg-primary-400 border-primary-400">
                  Talk to Expert
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCars