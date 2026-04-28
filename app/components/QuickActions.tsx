import Link from 'next/link'
import { Car, Calculator, Phone, MapPin, MessageCircle, Calendar } from 'lucide-react'

const actions = [
  {
    icon: Car,
    title: 'Book Test Drive',
    description: 'Experience your dream car',
    href: '/book-test-drive',
    color: 'bg-blue-600 hover:bg-blue-700',
    textColor: 'text-white'
  },
  {
    icon: Calculator,
    title: 'EMI Calculator',
    description: 'Calculate monthly payments',
    href: '/emi-calculator',
    color: 'bg-green-600 hover:bg-green-700',
    textColor: 'text-white'
  },
  {
    icon: Phone,
    title: 'Call Now',
    description: 'Speak to our experts',
    href: 'tel:+913532123456',
    color: 'bg-orange-600 hover:bg-orange-700',
    textColor: 'text-white'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Quick support & queries',
    href: 'https://wa.me/913532123456?text=Hi%20Sevoke%20Motors%2C%20I%20need%20assistance',
    color: 'bg-green-500 hover:bg-green-600',
    textColor: 'text-white'
  },
  {
    icon: Calendar,
    title: 'Service Booking',
    description: 'Schedule your service',
    href: '/service-booking',
    color: 'bg-purple-600 hover:bg-purple-700',
    textColor: 'text-white'
  },
  {
    icon: MapPin,
    title: 'Visit Showroom',
    description: 'Get directions',
    href: 'https://maps.google.com/?q=Sevoke+Motors+Siliguri',
    color: 'bg-red-600 hover:bg-red-700',
    textColor: 'text-white'
  }
]

export default function QuickActions() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Quick <span className="text-primary-600">Actions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need is just one click away. Get instant access to our most popular services.
          </p>
        </div>

        {/* Actions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {actions.map((action, index) => {
            const IconComponent = action.icon
            const isExternal = action.href.startsWith('http') || action.href.startsWith('tel:')
            
            if (isExternal) {
              return (
                <a
                  key={index}
                  href={action.href}
                  target={action.href.startsWith('http') ? '_blank' : undefined}
                  rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`${action.color} ${action.textColor} p-6 rounded-xl transition-all duration-200 hover:shadow-lg group`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{action.title}</h3>
                      <p className="text-sm opacity-90">{action.description}</p>
                    </div>
                  </div>
                </a>
              )
            }

            return (
              <Link
                key={index}
                href={action.href}
                className={`${action.color} ${action.textColor} p-6 rounded-xl transition-all duration-200 hover:shadow-lg group block`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{action.title}</h3>
                    <p className="text-sm opacity-90">{action.description}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Emergency Contact */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
          <p className="text-gray-300 mb-6">Our customer support team is available to help you with any urgent queries or roadside assistance.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+913532123456" 
              className="btn-primary bg-primary-600 hover:bg-primary-700 flex items-center gap-2 justify-center"
            >
              <Phone className="w-5 h-5" />
              Emergency Helpline
            </a>
            <a 
              href="https://wa.me/913532123456?text=Emergency%20assistance%20needed" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 flex items-center gap-2 justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}