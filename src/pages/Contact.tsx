import React from 'react';
import { Mail, Phone, MapPin, Globe, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-navy mb-8">Get in Touch</h1>
        <div className="bg-white shadow-lg rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-navy mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center group hover:text-gold transition-colors">
                  <Mail className="mr-4 text-gold w-6 h-6" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:products@stephenakintayo.com" className="text-gray-600 hover:text-gold">
                      products@stephenakintayo.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center group hover:text-gold transition-colors">
                  <Phone className="mr-4 text-gold w-6 h-6" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+2348155555616" className="text-gray-600 hover:text-gold">
                      +234 815 5555 616
                    </a>
                  </div>
                </div>
                <div className="flex items-center group hover:text-gold transition-colors">
                  <MapPin className="mr-4 text-gold w-6 h-6" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">Lagos, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-center group hover:text-gold transition-colors">
                  <Globe className="mr-4 text-gold w-6 h-6" />
                  <div>
                    <p className="font-medium">Global Presence</p>
                    <p className="text-gray-600">Nigeria | UAE | USA | UK</p>
                  </div>
                </div>
                <div className="flex items-center group hover:text-gold transition-colors">
                  <Clock className="mr-4 text-gold w-6 h-6" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM WAT</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:border-l md:pl-12 md:border-gray-200">
              <h2 className="text-2xl font-semibold text-navy mb-6">About Our Support</h2>
              <p className="text-gray-600 mb-4">
                Our dedicated team is here to assist you with any inquiries about Dr. Stephen Akintayo's events, mentorship programs, or business consultations.
              </p>
              <p className="text-gray-600 mb-4">
                Whether you're interested in real estate investments, digital marketing strategies, or attending our exclusive events, we're here to provide you with comprehensive information and support.
              </p>
              <p className="text-gray-600">
                For the fastest response, please reach out to us via email or phone during business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
