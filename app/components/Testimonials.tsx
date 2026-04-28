'use client'

import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Siliguri',
    car: 'Grand Vitara',
    rating: 5,
    text: 'Exceptional service from Sevoke Motors! The team was professional, transparent, and made my car buying experience smooth. My Grand Vitara has been performing excellently.'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Jalpaiguri',
    car: 'Swift',
    rating: 5,
    text: 'Amazing experience! The staff was knowledgeable and helped me choose the perfect Swift. The after-sales service is outstanding. Highly recommend Sevoke Motors.'
  },
  {
    id: 3,
    name: 'Amit Das',
    location: 'Darjeeling',
    car: 'Ertiga',
    rating: 5,
    text: 'Bought my Ertiga from Sevoke Motors 2 years ago. The service quality is unmatched. They treat customers like family and provide genuine advice.'
  },
  {
    id: 4,
    name: 'Meera Rai',
    location: 'Kalimpong',
    car: 'Baleno',
    rating: 5,
    text: 'Professional team, transparent pricing, and excellent service. My Baleno purchase was hassle-free, and their service center is top-notch. Very satisfied customer!'
  },
  {
    id: 5,
    name: 'Sunil Agarwal',
    location: 'Siliguri',
    car: 'Fronx',
    rating: 5,
    text: 'Sevoke Motors made my dream of owning a Fronx come true. The financing process was smooth, and the delivery was on time. Excellent customer service throughout.'
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoplay) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoplay])

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
    setIsAutoplay(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
    setIsAutoplay(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoplay(false)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`} 
      />
    ))
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-primary-600">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued customers 
            across Siliguri and North Bengal have to say about their experience.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mx-auto max-w-4xl">
            {/* Quote Icon */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <Quote className="w-8 h-8 text-primary-600" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              
              <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-xl font-bold text-gray-900 mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-600 mb-2">
                  {testimonials[currentIndex].location} • Owns {testimonials[currentIndex].car}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 lg:left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-primary-600 hover:text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 border border-gray-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 lg:right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-primary-600 hover:text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 border border-gray-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentIndex === index 
                  ? 'bg-primary-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-primary-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Average Rating</div>
              <div className="flex justify-center mt-2">
                {renderStars(5)}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Google Reviews</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-primary-600 mb-2">99%</div>
              <div className="text-gray-600">Recommend Us</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}