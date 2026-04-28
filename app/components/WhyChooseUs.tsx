import { Shield, Award, Users, Clock, Wrench, CreditCard } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: '25+ Years of Trust',
    description: 'Serving Siliguri with unwavering commitment since 1995. Your trusted automotive partner.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Award,
    title: 'Authorized Dealer',
    description: 'Official Maruti Suzuki dealership with genuine parts, warranty, and service standards.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Certified professionals with deep automotive knowledge and customer-first approach.',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Clock,
    title: 'Quick Service',
    description: 'Fast test drives, efficient paperwork, and prompt after-sales service delivery.',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    icon: Wrench,
    title: 'Complete Solutions',
    description: 'From car selection to financing, insurance, and maintenance - we handle everything.',
    color: 'bg-red-100 text-red-600'
  },
  {
    icon: CreditCard,
    title: 'Easy Financing',
    description: 'Multiple loan options, competitive rates, and hassle-free approval process.',
    color: 'bg-teal-100 text-teal-600'
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-primary-600">Sevoke Motors?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference that comes with choosing North Bengal's most trusted 
            Maruti Suzuki dealership. Here's what sets us apart.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="group">
                <div className="bg-gray-50 hover:bg-white rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl border border-transparent hover:border-gray-200">
                  <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats */}
        <div className="bg-primary-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">25+</div>
              <div className="text-primary-100">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">10,000+</div>
              <div className="text-primary-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">15+</div>
              <div className="text-primary-100">Car Models</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">99%</div>
              <div className="text-primary-100">Customer Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Awards & Recognition</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-gray-100 px-6 py-3 rounded-lg">
              <span className="font-semibold text-gray-700">Best Dealer Award 2023</span>
            </div>
            <div className="bg-gray-100 px-6 py-3 rounded-lg">
              <span className="font-semibold text-gray-700">Customer Excellence Award</span>
            </div>
            <div className="bg-gray-100 px-6 py-3 rounded-lg">
              <span className="font-semibold text-gray-700">Service Quality Recognition</span>
            </div>
            <div className="bg-gray-100 px-6 py-3 rounded-lg">
              <span className="font-semibold text-gray-700">Sales Performance Award</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}