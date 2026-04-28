import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import FeaturedCars from './components/FeaturedCars';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import QuickActions from './components/QuickActions';
import FinancePreview from './components/FinancePreview';

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <FeaturedCars />
            <WhyChooseUs />
            <Testimonials />
            <QuickActions />
            <FinancePreview />
            <Footer />
        </>
    );
};

export default Home;