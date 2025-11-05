import { Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const pricingTiers = [
  {
    name: 'Essential',
    price: 89,
    duration: '60 minutes',
    description: 'Perfect for first-time visitors or quick relaxation',
    features: [
      'Choice of Thai or Swedish massage',
      'Herbal tea and refreshments',
      'Complimentary foot soak',
      'Relaxation lounge access',
      'Aromatherapy enhancement',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    price: 159,
    duration: '90 minutes',
    description: 'Our most popular package for complete rejuvenation',
    features: [
      'Extended massage therapy',
      'Herbal compress treatment',
      'Full body scrub',
      'Hot stone enhancement',
      'Priority booking',
      'Premium essential oils',
      'Private treatment room',
    ],
    popular: true,
  },
  {
    name: 'Signature',
    price: 249,
    duration: '120 minutes',
    description: 'Ultimate luxury spa experience',
    features: [
      'Complete spa journey',
      'Aromatherapy massage',
      'Thai herbal compress',
      'Facial treatment',
      'Foot reflexology',
      'Body wrap therapy',
      'Champagne and fruits',
      'Personal spa concierge',
    ],
    popular: false,
  },
  {
    name: 'Couples Retreat',
    price: 399,
    duration: '120 minutes',
    description: 'Share a blissful experience together',
    features: [
      'Side-by-side massage',
      'Private couples suite',
      'Rose petal ceremony',
      'Hot stone treatment',
      'Champagne and chocolates',
      'Aromatherapy enhancement',
      'Commemorative photo',
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Pricing & Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your wellness journey. All packages include complimentary access to our facilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                tier.popular
                  ? 'border-accent shadow-2xl scale-105 lg:scale-110'
                  : 'border-border hover:border-accent/50 hover:shadow-xl'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <div className="mb-6">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">${tier.price}</span>
                    <span className="text-muted-foreground">/ {tier.duration}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    tier.popular
                      ? 'bg-accent hover:bg-accent/90 text-white'
                      : 'bg-primary hover:bg-primary/90 text-white'
                  }`}
                >
                  {tier.popular && <Sparkles className="h-4 w-4 mr-2" />}
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Not sure which package is right for you?
          </p>
          <Button variant="outline" size="lg" className="border-2 border-accent text-accent hover:bg-accent hover:text-white">
            Speak with Our Spa Consultant
          </Button>
        </div>
      </div>
    </section>
  );
}
