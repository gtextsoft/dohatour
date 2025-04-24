
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "faq1",
    question: "What are the dates for the events?",
    answer: "The events take place over one weekend from April 25-27, 2025. The Friday Masterclass runs from 9 AM to 5 PM, the Saturday Boat Cruise Life Class from 10 AM to 1 PM, and the Sunday Desert Safari from 4 PM to 8 PM."
  },
  {
    id: "faq2",
    question: "How much does it cost to attend?",
    answer: "Each event costs 750 QAR per person. You can choose to attend individual events or all three. Please log in to see pricing details and available packages."
  },
  {
    id: "faq3",
    question: "Is there a registration deadline?",
    answer: "Yes, registration closes on Thursday, April 24, 2025, at midnight Qatar time. We encourage early registration as spots are limited and fill up quickly."
  },
  {
    id: "faq4",
    question: "What's included in each event?",
    answer: "Each event includes access to the sessions with Dr. Stephen Akintayo, all materials needed for the activities, and refreshments. The boat cruise includes a meal on board, and the desert safari includes transportation to and from the venue."
  },
  {
    id: "faq5", 
    question: "How can I register for the events?",
    answer: "To register, you need to create an account or log in, then select the events you wish to attend and complete the registration form with your details. Payment can be made online through our secure payment gateway."
  }
];

const FAQSection = () => {
  return (
    <div className="bg-offwhite py-16">
      <div className="section-container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Dr. Stephen Akintayo's transformational weekend events.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="border-b border-gray-200">
              <AccordionTrigger className="text-navy font-medium text-lg py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Still have questions? <a href="/contact" className="text-gold font-medium hover:underline">Contact us</a> for more information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
