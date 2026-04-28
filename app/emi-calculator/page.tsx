'use client'

import { useState, useEffect } from 'react'
import { Calculator, TrendingUp, DollarSign, Calendar } from 'lucide-react'

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(800000)
  const [interestRate, setInterestRate] = useState(8.5)
  const [tenure, setTenure] = useState(5)
  const [emi, setEmi] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)

  // Calculate EMI
  useEffect(() => {
    const principal = loanAmount
    const rate = interestRate / 12 / 100
    const time = tenure * 12

    if (principal && rate && time) {
      const emiAmount = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1)
      const total = emiAmount * time
      const interest = total - principal

      setEmi(Math.round(emiAmount))
      setTotalAmount(Math.round(total))
      setTotalInterest(Math.round(interest))
    }
  }, [loanAmount, interestRate, tenure])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-automotive-dark to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto section-padding">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">EMI Calculator</h1>
          <p className="text-xl text-blue-100 max-w-2xl">Calculate your monthly car loan payments instantly. Plan your budget and choose the perfect financing option.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto section-padding py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator */}
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Calculator className="w-6 h-6 text-primary-600" />
              Loan Calculator
            </h2>
            
            <div className="space-y-8">
              {/* Loan Amount */}
              <div>
                <label className="block text-gray-700 font-medium mb-4">
                  Loan Amount: {formatCurrency(loanAmount)}
                </label>
                <input
                  type="range"
                  min="100000"
                  max="2000000"
                  step="50000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>₹1L</span>
                  <span>₹20L</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <label className="block text-gray-700 font-medium mb-4">
                  Interest Rate: {interestRate}% per annum
                </label>
                <input
                  type="range"
                  min="7"
                  max="15"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>7%</span>
                  <span>15%</span>
                </div>
              </div>

              {/* Tenure */}
              <div>
                <label className="block text-gray-700 font-medium mb-4">
                  Loan Tenure: {tenure} years
                </label>
                <input
                  type="range"
                  min="1"
                  max="7"
                  step="1"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>1 Year</span>
                  <span>7 Years</span>
                </div>
              </div>
            </div>

            {/* Manual Input */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Or Enter Values Manually</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Loan Amount (₹)</label>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Interest Rate (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Tenure (Years)</label>
                  <input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div>
            {/* EMI Result */}
            <div className="card p-8 mb-8 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Your Monthly EMI</h3>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold mb-2">
                  {formatCurrency(emi)}
                </div>
                <p className="text-primary-100">per month for {tenure} years</p>
              </div>
            </div>

            {/* Breakdown */}
            <div className="card p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Loan Breakdown</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Principal Amount</span>
                  </div>
                  <span className="font-semibold text-gray-900">{formatCurrency(loanAmount)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">Total Interest</span>
                  </div>
                  <span className="font-semibold text-gray-900">{formatCurrency(totalInterest)}</span>
                </div>
                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700 font-medium">Total Amount</span>
                  </div>
                  <span className="font-bold text-lg text-gray-900">{formatCurrency(totalAmount)}</span>
                </div>
              </div>
            </div>

            {/* Chart Placeholder */}
            <div className="card p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Payment Breakdown</h3>
              <div className="flex gap-4 mb-4">
                <div className="flex-1">
                  <div className="h-8 bg-green-200 rounded-lg overflow-hidden">
                    <div 
                      className="h-full bg-green-600"
                      style={{ width: `${(loanAmount / totalAmount) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Principal: {((loanAmount / totalAmount) * 100).toFixed(1)}%</p>
                </div>
                <div className="flex-1">
                  <div className="h-8 bg-red-200 rounded-lg overflow-hidden">
                    <div 
                      className="h-full bg-red-600"
                      style={{ width: `${(totalInterest / totalAmount) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Interest: {((totalInterest / totalAmount) * 100).toFixed(1)}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Cars */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Calculate EMI for Popular Cars</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Swift', price: '₹5.73 - ₹8.67 Lakh', avgPrice: 700000 },
              { name: 'Grand Vitara', price: '₹10.70 - ₹19.94 Lakh', avgPrice: 1500000 },
              { name: 'Fronx', price: '₹7.51 - ₹13.04 Lakh', avgPrice: 1000000 }
            ].map((car, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h3>
                <p className="text-gray-600 mb-4">{car.price}</p>
                <button
                  onClick={() => setLoanAmount(car.avgPrice)}
                  className="btn-primary w-full"
                >
                  Calculate EMI
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="card p-8 bg-gradient-to-br from-gray-50 to-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Apply for a Loan?</h3>
            <p className="text-gray-600 mb-6">Get pre-approved for your car loan and drive home your dream car today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/finance" className="btn-primary">
                Apply for Loan
              </a>
              <a href="/contact" className="btn-secondary">
                Talk to Expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}