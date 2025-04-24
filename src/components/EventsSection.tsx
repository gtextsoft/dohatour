
import { useState } from 'react';
import EventCard from './EventCard';
import { Separator } from "@/components/ui/separator";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  price: number;
  stripeLink: string;
}

const EventsSection = () => {
  const [events] = useState<Event[]>([
    {
      id: "boat-cruise",
      title: "Saturday Boat Cruise Life Class",
      date: "April 26, 2025",
      time: "10 AM - 1 PM",
      description: "Network & learn on the high seas. Enjoy a luxury experience while gaining invaluable insights from Dr. Stephen Akintayo.",
      image: "/Boat Cruise.jpg",
      price: 750,
      stripeLink: "https://buy.stripe.com/fZe149ffQgeSfm0cP1"
    },
    {
      id: "desert-safari",
      title: "Sunday Desert Safari",
      date: "April 27, 2025",
      time: "4 PM - 8 PM",
      description: "Recharge your vision in the desert with Dr Stephen Akintayo. An unforgettable experience in Qatar's natural beauty.",
      image: "/Desert Safari.jpg",
      price: 750,
      stripeLink: "https://buy.stripe.com/cN2eUZ9VwgeSddS3es"
    }
  ]);

  return (
    <div className="bg-offwhite py-16">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">Choose Your Experience</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Two unique experiences designed to provide extraordinary value and insights. 
            Select your preferred event and secure your spot today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map(event => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              description={event.description}
              image={event.image}
              price={event.price}
              stripeLink={event.stripeLink}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Separator className="my-8" />
          <p className="text-gray-500 mb-1">
            <span className="font-semibold">Strictly by registration only</span> • Limited spots available
          </p>
          <p className="text-gold font-medium">
            Registration closes Thursday, April 24 at midnight (QAT)
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
