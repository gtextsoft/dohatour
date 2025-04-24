
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="section-container flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="font-montserrat font-bold text-navy text-2xl">
            Dr. Stephen Akintayo
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-navy hover:text-gold font-medium">Home</Link>
          <Link to="/events" className="text-navy hover:text-gold font-medium">Events</Link>
          <Link to="/about" className="text-navy hover:text-gold font-medium">About</Link>
          <Link to="/contact" className="text-navy hover:text-gold font-medium">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-navy focus:outline-none"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-navy hover:text-gold font-medium py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/events" className="text-navy hover:text-gold font-medium py-2" onClick={() => setIsMenuOpen(false)}>Events</Link>
            <Link to="/about" className="text-navy hover:text-gold font-medium py-2" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" className="text-navy hover:text-gold font-medium py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
