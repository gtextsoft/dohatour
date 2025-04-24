import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  // Set target date to midnight tonight (12 AM of the next day)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  
  return (
    <div className="relative bg-navy text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://source.unsplash.com/random/?abstract,pattern')] opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Two Transformational Experiences in One Weekend
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gold mb-6">
            Saturday Boat Cruise Life Class • Sunday Desert Safari with Dr Stephen Akintayo
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
            Choose your transformational experience. Each event offers unique insights and networking opportunities.
            Purchase your tickets now before spots fill up.
          </p>
        </div>
        
        {/* Registration Deadline */}
        <div className="bg-navy-light/70 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto">
          <div className="text-center mb-4">
            <p className="text-lg font-medium text-red-400">⚠️ Registration Closes At</p>
            <p className="text-xs md:text-sm opacity-80">When the timer hits 0</p>
          </div>
          <CountdownTimer targetDate={tomorrow} className="mt-2" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
