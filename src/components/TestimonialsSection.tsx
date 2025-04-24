/*
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, Innovation Labs",
    text: "Dr. Akintayo's masterclass transformed our business approach. His strategies helped us double our revenue in just 6 months.",
    image: "https://source.unsplash.com/random/?woman,professional,1"
  },
  {
    id: 2,
    name: "Michael Chang",
    position: "Real Estate Investor",
    text: "The boat cruise experience was unlike anything I've attended before. The networking opportunities and insights gained were invaluable.",
    image: "https://source.unsplash.com/random/?man,professional,2"
  },
  {
    id: 3,
    name: "Amina Patel",
    position: "Startup Founder",
    text: "Dr. Stephen has a unique way of breaking down complex business principles into actionable steps. I left the desert safari with clarity and a renewed vision.",
    image: "https://source.unsplash.com/random/?woman,professional,3"
  }
];

const TestimonialsSection = () => {
  return (
    <div className="bg-navy text-white py-16">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-white/80 max-w-3xl mx-auto">
            Hear from past participants who have experienced transformation through Dr. Stephen Akintayo's events.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-navy-light rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gold text-sm">{testimonial.position}</p>
                </div>
              </div>
              <p className="italic text-white/90">{testimonial.text}</p>
              <div className="flex mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
*/
