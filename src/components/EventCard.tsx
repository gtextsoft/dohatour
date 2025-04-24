
import { Button } from "@/components/ui/button";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  price: number;
  stripeLink: string;
}

const EventCard = ({ 
  id, 
  title, 
  date, 
  time, 
  description, 
  image, 
  price,
  stripeLink
}: EventCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm opacity-90">{date} • {time}</p>
        </div>
      </div>
      <div className="p-5">
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
          <p className="text-navy font-bold mb-2 sm:mb-0">{price} QAR per person</p>
          
          <div className="space-x-3">
            <a href={stripeLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-gold text-navy hover:bg-gold-light">
                Purchase Ticket
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
