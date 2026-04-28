import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-primary-color text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Sevoke Motors Siliguri</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/new-cars">New Cars</Link></li>
            <li><Link href="/commercial-vehicles">Commercial Vehicles</Link></li>
            <li><Link href="/pre-owned-cars">Pre-Owned Cars</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/finance">Finance</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
