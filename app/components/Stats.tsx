import { TrendingUp, Users, Award, Clock } from 'lucide-react'

const stats = [
  {
    icon: Clock,
    number: '25+',
    label: 'Years of Excellence',
    description: 'Serving Siliguri since 1995'
  },
  {
    icon: Users,
    number: '10,000+',
    label: 'Happy Customers',
    description: 'Trusted by families across North Bengal'
  },
  {
    icon: TrendingUp,
    number: '15+',
    label: 'Car Models',
    description: 'Complete Arena & Nexa range'
  },
  {
    icon: Award,
    number: '99%',
    label: 'Customer Satisfaction',
    description: 'Rated excellent by our customers'
  }
]

export default function Stats() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-200">
                  <IconComponent className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}