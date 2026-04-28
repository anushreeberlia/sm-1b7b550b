import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Fuel, Users, Star } from 'lucide-react'

const featuredCars = [
  {
    id: 1,
    name: 'Grand Vitara',
    category: 'Nexa',
    price: '₹10.70 - ₹19.94 Lakh',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=250&fit=crop',
    fuel: 'Petrol/Hybrid',
    seating: '5',
    rating: 4.8,
    highlights: ['Mild Hybrid', 'Strong Hybrid', 'AllGrip AWD'],
    isPopular: true
  },
  {
    id: 2,
    name: 'Swift',
    category: 'Arena',
    price: '₹5.73 - ₹8.67 Lakh',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=250&fit=crop',
    fuel: 'Petrol',
    seating: '5',
    rating: 4.6,
    highlights: ['Premium Hatchback', 'Sporty Design', 'Feature Rich'],
    isPopular: false
  },
  {
    id: 3,
    name: 'Fronx',
    category: 'Nexa',
    price: '₹7.51 - ₹13.04 Lakh',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=250&fit=crop',
    fuel: 'Petrol',
    seating: '5',
    rating: 4.7,
    highlights: ['Coupe SUV', 'Turbo Engine', 'Adventure Ready'],
    isPopular: true
  },
  {
    id: 4,
    name: 'Ertiga',
    category: 'Arena',
    price: '₹8.64 - ₹13.09 Lakh',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=250&fit=crop',
    fuel: 'Petrol/CNG',
    seating: '7',
    rating: 4.5,
    highlights: ['7-Seater MPV', 'Family Car', 'CNG Available'],
    isPopular: false
  }
]

export default function FeaturedCars() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-primary-600">Cars</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked selection of the most popular Maruti Suzuki models. 
            From fuel-efficient hatchbacks to premium SUVs, find your perfect match.
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredCars.map((car) => (
            <div key={car.id} className="card group cursor-pointer hover:shadow-2xl transition-all duration-300">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {car.isPopular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </span>
                  </div>
                )}
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

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-gray-900">{car.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{car.rating}</span>
                  </div>
                </div>
                
                <p className="text-primary-600 text-xl font-bold mb-4">{car.price}</p>
                
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
                  <div className="flex flex-wrap gap-1">
                    {car.highlights.map((highlight, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link 
                    href={`/book-test-drive?car=${car.name}`} 
                    className="btn-primary flex-1 text-sm py-2 px-4 flex items-center justify-center gap-2"
                  >
                    Test Drive
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button className="btn-secondary flex-1 text-sm py-2 px-4">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/new-cars" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3">
            View All Cars
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}