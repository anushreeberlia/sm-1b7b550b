import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Play, Award, Clock, Users } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/90 via-neutral-900/70 to-primary-900/80 z-10"></div>
        <Image
          src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1920&h=1080&fit=crop"
          alt="Maruti Suzuki Showroom"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary-500/10 rounded-full blur-xl animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-secondary-500/10 rounded-full blur-lg animate-pulse hidden lg:block"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto section-padding py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium">
              <Award className="w-4 h-4 text-secondary-400" />
              <span>25+ Years of Trusted Service</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Drive Your
                <span className="block text-transparent bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text">
                  Dream Car
                </span>
                <span className="block">Today</span>
              </h1>
              <p className="text-xl lg:text-2xl text-neutral-300 max-w-xl leading-relaxed">
                Discover the complete range of Maruti Suzuki vehicles at Siliguri's most trusted dealership. Experience excellence in every drive.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book-test-drive" className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100 px-8 py-4 text-lg font-semibold">
                Book Test Drive
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/new-cars" className="btn-secondary border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
                View Cars
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400">10K+</div>
                <div className="text-sm text-neutral-400">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400">25+</div>
                <div className="text-sm text-neutral-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400">15+</div>
                <div className="text-sm text-neutral-400">Car Models</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Featured Car Card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop"
                      alt="Grand Vitara"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-white space-y-3">
                    <h3 className="text-2xl font-bold">Grand Vitara</h3>
                    <p className="text-neutral-300">India's No. 1 SUV with Strong Hybrid Technology</p>
                    <div className="flex items-center justify-between">
                      <span className="text-secondary-400 font-semibold text-xl">₹10.70L onwards</span>
                      <Link href="/book-test-drive" className="btn-primary bg-primary-600 hover:bg-primary-700 text-sm px-4 py-2">
                        Test Drive
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary-500 rounded-2xl flex items-center justify-center animate-bounce">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center animate-pulse">
                <Clock className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-neutral-50 to-transparent z-10"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden lg:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero