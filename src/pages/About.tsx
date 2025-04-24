import React from 'react';
import { Globe, Award, BookOpen, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy mb-4">About Dr. Stephen Akintayo</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Global Real Estate Visionary, Business Growth Expert & Philanthropist
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold rounded-xl bg-gold/5"></div>
            <img 
              src="https://s3.amazonaws.com/cco-avatars/973255f7-af63-4cc1-bcdb-9032f7d440b5.png"
              alt="Dr. Stephen Akintayo"
              className="rounded-xl shadow-lg relative z-10 w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Globe className="text-gold w-8 h-8 mb-3" />
              <h3 className="font-semibold text-navy mb-2">Global Presence</h3>
              <p className="text-gray-600">Operating in Nigeria, UAE, USA, UK and beyond</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Award className="text-gold w-8 h-8 mb-3" />
              <h3 className="font-semibold text-navy mb-2">Harvard Graduate</h3>
              <p className="text-gray-600">Excellence in Business Education</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <BookOpen className="text-gold w-8 h-8 mb-3" />
              <h3 className="font-semibold text-navy mb-2">Author</h3>
              <p className="text-gray-600">Published 35 insightful books</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Heart className="text-gold w-8 h-8 mb-3" />
              <h3 className="font-semibold text-navy mb-2">Philanthropist</h3>
              <p className="text-gray-600">Supported 2000+ vulnerable children</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8 space-y-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-6">
              Dr. Stephen Akintayo is Africa's most sought-after investment coach and the CEO/MD of Gtext Global, 
              a conglomerate with numerous subsidiaries including Gtext Homes - a real estate company with presence 
              across multiple continents. Through Stephen Akintayo Consulting (SAC), he builds capacities 
              worldwide via mentorship programs in real estate, e-commerce, digital marketing, freelancing, and more.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Born in the Gonge area of Maiduguri, Borno State, Nigeria, Dr. Akintayo rose from humble beginnings. 
              Despite early educational challenges and financial hardships, his entrepreneurial journey began at age 17. 
              Today, his business empire has grown into a multi-million dollar corporation with a vision to dominate 
              the real estate and digital marketing sectors globally.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              As founder of the Stephen Akintayo Foundation and Infinity Foundation, he has assisted over 2,000 orphans 
              and vulnerable children, partnering with more than 25 orphanage homes. His foundations provide relief materials, 
              food, and financial grants to school children and entrepreneurs.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              A Harvard University graduate and prolific author of 35 books, Dr. Akintayo hosts "Investment Chat in a 
              Rolls Royce" - a revolutionary business TV show blending luxury, entertainment, and investment insights. 
              His business empire is run by young, innovative professionals, reflecting his belief in youth-led business 
              revolution.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Dr. Akintayo holds a degree in microbiology from Olabisi Onabanjo University, is a member of the Institute 
              of Strategic Management (ISMN), and is certified by The Coaching Academy, UK. He is happily married and 
              blessed with three children.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
