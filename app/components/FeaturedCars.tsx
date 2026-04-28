import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Fuel, Users, Zap } from 'lucide-react'

const cars = [
  {
    id: 1,
    name: 'Swift',
    category: 'Arena',
    price: '₹5.73 - ₹8.67 Lakh',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop',
    features: ['1.2L Petrol', '5 Seater', 'Manual/AMT'],
    highlights: 'India\'s favourite premium hatchback',
    mileage: '23.2 kmpl'
  },
  {
    id: 2,
    name: 'Grand Vitara',
    category: 'Nexa',
    price: '₹10.70 - ₹19.94 Lakh',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop',
    features: ['Strong Hybrid', '5 Seater', 'Automatic'],
    highlights: 'India\'s No.1 SUV with Strong Hybrid Technology',
    mileage: '27.97 kmpl'
  },
  {
    id: 3,
    name: 'Fronx',
    category: 'Nexa',
    price: '₹7.51 - ₹13.04 Lakh',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
    features: ['1.2L Petrol', '5 Seater', 'Manual/AMT'],
    highlights: 'Bold SUV Coupe with Premium Features',
    mileage: '21.5 kmpl'
  },
  {
    id: 4,
    name: 'Baleno',
    category: 'Nexa',
    price: '₹6.61 - ₹9.88 Lakh',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop',
    features: ['1.2L Petrol', '5 Seater', 'Manual/CVT'],
    highlights: 'Premium Hatchback with Smart Technology',
    mileage: '22.35 kmpl'
  },
  {
    id: 5,
    name: 'Ertiga',
    category: 'Arena',
    price: '₹8.64 - ₹13.03 Lakh',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop',
    features: ['1.5L Petrol', '7 Seater', 'Manual/AT'],
    highlights: 'Spacious 7-seater MPV for families',
    mileage: '20.51 kmpl'
  },
  {
    id: 6,
    name: 'Dzire',
    category: 'Arena',
    price: '₹6.57 - ₹9.39 Lakh',
    image: 'https://images.unsplash.com/photo-1619976215249-2f0bb0e7caf3?w=600&h=400&fit=crop',
    features: ['1.2L Petrol', '5 Seater', 'Manual/AMT'],
    highlights: 'India\'s most loved compact sedan',
    mileage: '23.26 kmpl'
  }
]

export default function FeaturedCars() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-primary-600">Maruti Suzuki</span> Cars
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our complete range of Maruti Suzuki vehicles. From fuel-efficient hatchbacks 
            to premium SUVs, find your perfect car at Sevoke Motors.
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cars.map((car) => (
            <div key={car.id} className="group">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={car.image}
                    alt={`Maruti Suzuki ${car.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      car.category === 'Nexa' 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-secondary-500 text-white'
                    }`}>
                      {car.category}
                    </span>
                  </div>
                  {/* Mileage Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <div className="flex items-center gap-1 text-sm font-semibold text-gray-700">
                      <Fuel className="w-4 h-4" />
                      <span>{car.mileage}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Maruti Suzuki {car.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{car.highlights}</p>
                    <div className="text-2xl font-bold text-primary-600">{car.price}</div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {car.features.map((feature, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Link 
                      href="/book-test-drive" 
                      className="flex-1 btn-primary text-center py-3 text-sm"
                    >
                      Test Drive
                    </Link>
                    <Link 
                      href="/contact" 
                      className="flex-1 btn-secondary text-center py-3 text-sm"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-gray-600 mb-6">Our expert team can help you find the perfect Maruti Suzuki car that fits your needs and budget.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary flex items-center gap-2 justify-center">
                Talk to Expert
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/new-cars" className="btn-secondary flex items-center gap-2 justify-center">
                View All Cars
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}