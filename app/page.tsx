import Hero from './components/Hero'
import FeaturedCars from './components/FeaturedCars'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import QuickActions from './components/QuickActions'
import FinancePreview from './components/FinancePreview'
import Stats from './components/Stats'

export const metadata = {
  title: 'Home',
  description: 'Sevoke Motors Siliguri - Your trusted Maruti Suzuki dealership on Sevoke Road. Explore new Arena & Nexa cars, commercial vehicles, pre-owned cars with best-in-class service and financing options.',
  openGraph: {
    title: 'Sevoke Motors Siliguri | Authorized Maruti Suzuki Dealership',
    description: 'Your trusted Maruti Suzuki dealership on Sevoke Road. Explore new cars, commercial vehicles, and pre-owned cars with expert service.',
  }
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedCars />
      <WhyChooseUs />
      <FinancePreview />
      <Testimonials />
      <QuickActions />
    </>
  )
}