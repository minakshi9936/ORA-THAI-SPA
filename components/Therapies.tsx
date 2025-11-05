import { Check } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const therapies = [
  {
    title: 'Traditional Thai Massage',
    duration: '60 / 90 / 120 minutes',
    description: 'Experience the ancient art of Thai massage, combining rhythmic pressure and gentle stretching to release tension and restore energy flow.',
    benefits: [
      'Improves flexibility and range of motion',
      'Reduces muscle tension and stress',
      'Enhances circulation and energy levels',
      'Promotes deep relaxation and mental clarity',
    ],
    image: 'https://images.pexels.com/photos/3757957/pexels-photo-3757957.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Aromatherapy Massage',
    duration: '60 / 90 minutes',
    description: 'Indulge in a sensory journey with our aromatherapy massage, using premium essential oils customized to your needs.',
    benefits: [
      'Calms the nervous system',
      'Relieves anxiety and promotes better sleep',
      'Nourishes and hydrates the skin',
      'Balances emotions and uplifts mood',
    ],
    image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Therapeutic Foot Massage',
    duration: '45 / 60 minutes',
    description: 'Revitalize your entire body through targeted foot reflexology, addressing pressure points that correspond to organs and systems.',
    benefits: [
      'Improves circulation in feet and legs',
      'Reduces pain and swelling',
      'Supports immune system function',
      'Induces deep relaxation',
    ],
    image: 'https://images.pexels.com/photos/5473184/pexels-photo-5473184.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Herbal Compress Massage',
    duration: '90 minutes',
    description: 'Traditional Thai healing using warm herbal pouches filled with therapeutic herbs to relieve muscle soreness and inflammation.',
    benefits: [
      'Eases chronic muscle pain',
      'Reduces inflammation naturally',
      'Improves skin tone and texture',
      'Promotes lymphatic drainage',
    ],
    image: 'https://images.pexels.com/photos/7823495/pexels-photo-7823495.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Therapies() {
  return (
    <section id="therapies" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Premium Therapies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our signature massage therapies, each designed to address specific wellness needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
              {therapies.map((therapy, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-xl border-2 border-border hover:border-accent/50 transition-colors overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center gap-4 text-left">
                      <div className="flex-1">
                        <h3 className="font-serif text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                          {therapy.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">{therapy.duration}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-foreground mb-4">{therapy.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-primary">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {therapy.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="grid grid-cols-2 gap-4 h-fit">
            {therapies.map((therapy, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden group cursor-pointer aspect-square"
              >
                <img
                  src={therapy.image}
                  alt={therapy.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-serif font-semibold">{therapy.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
