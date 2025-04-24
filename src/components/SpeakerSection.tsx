
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const SpeakerSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-navy mb-4">Meet Dr. Stephen Akintayo</h2>
            <h3 className="text-lg font-medium text-gold mb-4">Global Real Estate Visionary & Business Growth Expert</h3>
            <p className="text-gray-600 mb-4">
              Dr. Stephen Akintayo is a renowned entrepreneur, investor, and mentor who has transformed thousands of lives through his strategic business approach and wealth creation principles.
            </p>
            <p className="text-gray-600 mb-6">
              With over 15 years of experience in real estate and business development across multiple countries, Dr. Akintayo brings practical insights and proven strategies that have helped countless professionals and entrepreneurs scale their impact and achieve financial freedom.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-navy-light/10 p-3 rounded-lg">
                <p className="font-bold text-navy text-2xl">15+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="bg-navy-light/10 p-3 rounded-lg">
                <p className="font-bold text-navy text-2xl">30+</p>
                <p className="text-sm text-gray-600">Countries</p>
              </div>
              <div className="bg-navy-light/10 p-3 rounded-lg">
                <p className="font-bold text-navy text-2xl">10k+</p>
                <p className="text-sm text-gray-600">Students Mentored</p>
              </div>
            </div>
            <div className="mt-6">
              <Link to="/about">
                <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold rounded-xl bg-gold/5"></div>
              <img 
                src="https://s3.amazonaws.com/cco-avatars/973255f7-af63-4cc1-bcdb-9032f7d440b5.png" 
                alt="Dr. Stephen Akintayo" 
                className="rounded-xl shadow-lg relative z-10 w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-navy text-white p-3 rounded-lg shadow-lg z-20">
                <p className="font-medium">Exclusive Weekend</p>
                <p className="text-sm opacity-80">April 25-27, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerSection;
