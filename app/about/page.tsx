import Image from 'next/image'
import { Award, Users, Calendar, MapPin } from 'lucide-react'

export const metadata = {
  title: 'About Us',
  description: 'Learn about Sevoke Motors - Siliguri\'s premier Maruti Suzuki dealership since 1995. Committed to excellence in automotive sales and service with over 25+ years of trusted service.',
}

export default function About() {
  const milestones = [
    { year: '1995', title: 'Establishment', desc: 'Started as authorized Maruti Suzuki dealer' },
    { year: '2005', title: 'Expansion', desc: 'Added commercial vehicles division' },
    { year: '2015', title: 'Nexa Launch', desc: 'Became premium Nexa channel partner' },
    { year: '2020', title: 'Digital First', desc: 'Launched online booking & services' },
  ]

  const leadership = [
    { name: 'Mr. Rajesh Sharma', position: 'Managing Director', experience: '25+ years' },
    { name: 'Ms. Priya Gupta', position: 'Sales Director', experience: '18+ years' },
    { name: 'Mr. Amit Kumar', position: 'Service Head', experience: '20+ years' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-automotive-dark to-primary-900 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto section-padding h-full flex items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Sevoke Motors</h1>
            <p className="text-xl text-blue-100 max-w-2xl">Driving Siliguri forward with trust, quality, and exceptional automotive experiences since 1995.</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">For over 25 years, Sevoke Motors has been the trusted automotive partner for families and businesses across Siliguri and North Bengal. What started as a small dealership has grown into the region's premier Maruti Suzuki destination.</p>
              <p className="text-gray-600 mb-4">Located strategically on Sevoke Road, we serve customers from Siliguri, Jalpaiguri, Kalimpong, Darjeeling, and neighboring areas with a commitment to excellence that goes beyond just selling cars.</p>
              <p className="text-gray-600">Our journey reflects the growth of Siliguri itself - from a small town to a major commercial hub. We've been part of thousands of families' automotive journeys, celebrating milestones and creating memories on wheels.</p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                alt="Sevoke Motors Showroom"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">These principles guide everything we do, from customer interactions to community involvement.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Excellence', desc: 'Striving for perfection in every interaction and service delivery.' },
              { icon: Users, title: 'Customer First', desc: 'Your satisfaction and trust are our highest priorities.' },
              { icon: Calendar, title: 'Reliability', desc: 'Consistent, dependable service you can count on every time.' },
              { icon: MapPin, title: 'Community', desc: 'Deeply rooted in Siliguri, contributing to local growth.' }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Key milestones that shaped Sevoke Motors into Siliguri's leading automotive destination.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Experienced professionals leading Sevoke Motors with vision and dedication.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{leader.position}</p>
                <p className="text-gray-600">{leader.experience} in automotive industry</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto section-padding text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Sevoke Motors Difference</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Visit our showroom and discover why thousands of customers trust us for their automotive needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/book-test-drive" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              Book Test Drive
            </a>
            <a href="/contact" className="btn-primary bg-primary-700 hover:bg-primary-800">
              Visit Showroom
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}