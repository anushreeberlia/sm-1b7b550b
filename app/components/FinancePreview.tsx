import Link from 'next/link'
import { Calculator, CreditCard, FileText, CheckCircle, ArrowRight } from 'lucide-react'

const financeOptions = [
  {
    title: 'Bank Loan',
    rate: '8.5% onwards',
    description: 'Partner bank financing with competitive rates',
    features: ['Up to 90% funding', 'Flexible tenure', 'Quick approval']
  },
  {
    title: 'Maruti Finance',
    rate: '8.9% onwards',
    description: 'Official Maruti Suzuki financing solutions',
    features: ['Hassle-free process', 'Special schemes', 'Doorstep service']
  },
  {
    title: 'Exchange Bonus',
    rate: 'Up to ₹50K',
    description: 'Additional benefit on your old car exchange',
    features: ['Best exchange value', 'Instant evaluation', 'Paperwork handled']
  }
]

const loanFeatures = [
  'Minimal documentation required',
  'Quick loan approval process',
  'Flexible repayment options',
  'No hidden charges or fees',
  'Insurance tie-up available',
  'End-to-end support'
]

export default function FinancePreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-blue-50">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Easy <span className="text-primary-600">Financing</span> Options
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make your dream car affordable with our flexible financing solutions. 
            Get pre-approved loans with competitive rates and minimal paperwork.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Finance Options */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Choose Your Financing Partner</h3>
            <div className="space-y-6">
              {financeOptions.map((option, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{option.title}</h4>
                      <p className="text-gray-600">{option.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-600">{option.rate}</div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-3">
                    {option.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Why Choose Our Finance Services?</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {loanFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* EMI Calculator Preview */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">EMI Calculator</h3>
              <p className="text-gray-600">Calculate your monthly payment instantly</p>
            </div>

            {/* Sample Calculation */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">₹10 Lakh</div>
                  <div className="text-sm text-gray-600">Loan Amount</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">5 Years</div>
                  <div className="text-sm text-gray-600">Tenure</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">8.5%</div>
                  <div className="text-sm text-gray-600">Interest Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600">₹20,276</div>
                  <div className="text-sm text-gray-600">Monthly EMI</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link href="/emi-calculator" className="btn-primary w-full flex items-center justify-center gap-2">
                <Calculator className="w-5 h-5" />
                Calculate Your EMI
              </Link>
              <Link href="/finance" className="btn-secondary w-full flex items-center justify-center gap-2">
                <CreditCard className="w-5 h-5" />
                Apply for Loan
              </Link>
            </div>

            {/* Process Steps */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">Quick Loan Process</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <span className="text-sm text-gray-600">Submit documents</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <span className="text-sm text-gray-600">Get instant pre-approval</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <span className="text-sm text-gray-600">Choose your car & drive home</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Your Car Financed?</h3>
            <p className="text-gray-600 mb-6">Our finance experts are ready to help you find the best loan option for your budget and requirements.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/finance" className="btn-primary flex items-center gap-2 justify-center">
                <FileText className="w-5 h-5" />
                Apply Now
              </Link>
              <a href="tel:+913532123456" className="btn-secondary flex items-center gap-2 justify-center">
                <ArrowRight className="w-5 h-5" />
                Speak to Expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}