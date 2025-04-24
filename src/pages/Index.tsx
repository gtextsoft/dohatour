import HeroSection from '@/components/HeroSection';
import EventsSection from '@/components/EventsSection';
import SpeakerSection from '@/components/SpeakerSection';
/*import TestimonialsSection from '@/components/TestimonialsSection';*/
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <HeroSection />
        <EventsSection />
        <SpeakerSection />
        {/*<TestimonialsSection />*/}
        <FAQSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
