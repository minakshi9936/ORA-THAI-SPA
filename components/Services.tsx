import { Flower2, Footprints, Sparkles, Leaf, Heart, Waves, Sun, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Flower2,
    title: 'Traditional Thai Massage',
    description: 'Ancient healing technique combining acupressure, stretching, and energy work for total body relaxation.',
    image: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Droplets,
    title: 'Aromatherapy Massage',
    description: 'Luxurious massage using essential oils to calm the mind and rejuvenate your senses.',
    image: 'https://images.pexels.com/photos/3865675/pexels-photo-3865675.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Footprints,
    title: 'Foot Reflexology',
    description: 'Therapeutic foot massage targeting pressure points to promote healing and relaxation throughout the body.',
    image: 'https://images.pexels.com/photos/5240834/pexels-photo-5240834.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Leaf,
    title: 'Herbal Compress Therapy',
    description: 'Warm herbal pouches applied to the body to ease muscle tension and promote deep relaxation.',
    image: 'https://images.pexels.com/photos/3997986/pexels-photo-3997986.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Heart,
    title: 'Couples Spa Experience',
    description: 'Share a peaceful retreat with your loved one in our private couples treatment room.',
    image: 'https://images.pexels.com/photos/3865552/pexels-photo-3865552.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Waves,
    title: 'Hot Stone Massage',
    description: 'Smooth heated stones placed on key points to melt away tension and restore balance.',
    image: 'https://images.pexels.com/photos/6663523/pexels-photo-6663523.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Sun,
    title: 'Body Scrub & Wrap',
    description: 'Exfoliating treatment followed by nourishing wrap to reveal soft, glowing skin.',
    image: 'https://images.pexels.com/photos/3997374/pexels-photo-3997374.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Sparkles,
    title: 'Signature Spa Package',
    description: 'Complete wellness experience combining our best treatments for ultimate rejuvenation.',
    image: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of authentic Thai spa treatments designed to restore harmony to your body and mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-accent/50"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-serif text-xl group-hover:text-accent transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-colors"
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
