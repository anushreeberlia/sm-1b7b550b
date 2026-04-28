'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Filter, ArrowRight, Fuel, Users, Settings } from 'lucide-react'

const cars = [
  // Arena Cars
  { id: 1, name: 'Alto K10', category: 'Arena', price: '₹3.99 - ₹5.96 Lakh', fuel: 'Petrol/CNG', seating: '5', image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=400&h=250&fit=crop', features: ['AMT Available', 'CNG Option', 'Best Mileage'] },
  { id: 2, name: 'S-Presso', category: 'Arena', price: '₹4.25 - ₹6.12 Lakh', fuel: 'Petrol/CNG', seating: '5', image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=250&fit=crop', features: ['SUV Styling', 'Spacious', 'Urban Friendly'] },
  { id: 3, name: 'WagonR', category: 'Arena', price: '₹5.54 - ₹7.45 Lakh', fuel: 'Petrol/CNG', seating: '5', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=250&fit=crop', features: ['Tall Boy Design', 'CNG Available', 'Practical'] },
  { id: 4, name: 'Swift', category: 'Arena', price: '₹5.73 - ₹8.67 Lakh', fuel: 'Petrol', seating: '5', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=250&fit=crop', features: ['Premium Hatchback', 'Sporty Design', 'Feature Rich'] },
  { id: 5, name: 'Dzire', category: 'Arena', price: '₹6.51 - ₹9.39 Lakh', fuel: 'Petrol/CNG', seating: '5', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=250&fit=crop', features: ['Compact Sedan', 'CNG Available', 'Boot Space'] },
  { id: 6, name: 'Ertiga', category: 'Arena', price: '₹8.64 - ₹13.09 Lakh', fuel: 'Petrol/CNG', seating: '7', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=250&fit=crop', features: ['7-Seater MPV', 'Family Car', 'CNG Available'] },
  
  // Nexa Cars
  { id: 7, name: 'Ignis', category: 'Nexa', price: '₹5.49 - ₹8.06 Lakh', fuel: 'Petrol', seating: '5', image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=400&h=250&fit=crop', features: ['Premium Urban Car', 'Unique Design', 'Feature Loaded'] },
  { id: 8, name: 'Baleno', category: 'Nexa', price: '₹6.61 - ₹9.88 Lakh', fuel: 'Petrol', seating: '5', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=250&fit=crop', features: ['Premium Hatchback', 'SmartPlay Studio', 'Spacious'] },
  { id: 9, name: 'Fronx', category: 'Nexa', price: '₹7.51 - ₹13.04 Lakh', fuel: 'Petrol', seating: '5', image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=250&fit=crop', features: ['Coupe SUV', 'Turbo Engine', 'Adventure Ready'] },
  { id: 10, name: 'Ciaz', category: 'Nexa', price: '₹9.31 - ₹12.25 Lakh', fuel: 'Petrol', seating: '5', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=250&fit=crop', features: ['Premium Sedan', 'Executive Class', 'Spacious Cabin'] },
  { id: 11, name: 'XL6', category: 'Nexa', price: '₹11.61 - ₹14.77 Lakh', fuel: 'Petrol', seating: '6', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=250&fit=crop', features: ['Premium MPV', '6-Seater', 'Captain Seats'] },
  { id: 12, name: 'Grand Vitara', category: 'Nexa', price: '₹10.70 - ₹19.94 Lakh', fuel: 'Petrol/Hybrid', seating: '5', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=250&fit=crop', features: ['Mild Hybrid', 'Strong Hybrid', 'AllGrip AWD'] }
]

export default function NewCars() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedFuel, setSelectedFuel] = useState('All')
  const [showFilters, setShowFilters] = useState(false)

  const filteredCars = cars.filter(car => {
    const categoryMatch = selectedCategory === 'All' || car.category === selectedCategory
    const fuelMatch = selectedFuel === 'All' || car.fuel.includes(selectedFuel)
    return categoryMatch && fuelMatch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-automotive-dark to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto section-padding">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">New Cars</h1>
          <p className="text-xl text-blue-100 max-w-2xl">Explore our complete range of Maruti Suzuki Arena and Nexa vehicles. Find your perfect match from India's most trusted car brand.</p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b py-6">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden btn-secondary flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
              <div className="hidden lg:flex gap-4 items-center">
                <span className="text-gray-700 font-medium">Category:</span>
                {['All', 'Arena', 'Nexa'].map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="hidden lg:flex gap-4 items-center">
                <span className="text-gray-700 font-medium">Fuel:</span>
                {['All', 'Petrol', 'CNG', 'Hybrid'].map(fuel => (
                  <button
                    key={fuel}
                    onClick={() => setSelectedFuel(fuel)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      selectedFuel === fuel
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {fuel}
                  </button>
                ))}
              </div>
            </div>
            <div className="text-gray-600">
              Showing {filteredCars.length} of {cars.length} cars
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="mb-4">
                <span className="text-gray-700 font-medium block mb-2">Category:</span>
                <div className="flex gap-2 flex-wrap">
                  {['All', 'Arena', 'Nexa'].map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-gray-700 font-medium block mb-2">Fuel:</span>
                <div className="flex gap-2 flex-wrap">
                  {['All', 'Petrol', 'CNG', 'Hybrid'].map(fuel => (
                    <button
                      key={fuel}
                      onClick={() => setSelectedFuel(fuel)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        selectedFuel === fuel
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {fuel}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map(car => (
              <div key={car.id} className="card group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      car.category === 'Arena' 
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {car.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{car.name}</h3>
                  <p className="text-primary-600 text-xl font-semibold mb-4">{car.price}</p>
                  
                  <div className="flex items-center gap-4 mb-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <Fuel className="w-4 h-4" />
                      <span className="text-sm">{car.fuel}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{car.seating} Seater</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {car.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="btn-secondary flex-1 text-sm">
                      View Details
                    </button>
                    <button className="btn-primary flex items-center gap-2 text-sm">
                      Test Drive
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto section-padding text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Drive Home Your Dream Car?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Book a test drive today and experience the quality, safety, and innovation that makes Maruti Suzuki India's most trusted car brand.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/book-test-drive" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              Book Test Drive
            </a>
            <a href="/compare" className="btn-primary bg-primary-700 hover:bg-primary-800">
              Compare Cars
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}