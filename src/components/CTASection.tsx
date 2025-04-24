import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import CountdownTimer from './CountdownTimer';

interface CTASectionProps {
  isLoggedIn?: boolean;
}

const CTASection = ({ isLoggedIn = false }: CTASectionProps) => {
  // Set target date to midnight tonight (12 AM of the next day)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  return (
    <div className="bg-navy py-16">
      <div className="section-container text-center">
        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Weekend?
          </h2>
          <p className="text-white/80 mb-8">
            Don't miss this exclusive opportunity to learn from and network with Dr. Stephen Akintayo.
            Limited spots available - secure yours today!
          </p>
          
          <div className="bg-navy-light/50 rounded-xl p-6 mb-8">
            <p className="text-lg font-medium text-red-400 mb-1">⚠️ Registration Closes At</p>
            <p className="text-xs md:text-sm text-white/80 mb-4">When the timer hits 0</p>
            <CountdownTimer targetDate={tomorrow} />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          </div>
          
          <p className="text-white/60 mt-6 text-sm">
            Strictly by registration only • Limited spots available
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
