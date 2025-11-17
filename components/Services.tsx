'use client';

import React, { useState } from 'react';
import { Flower2, Footprints, Sparkles, Leaf, Heart, Waves, Sun, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  image: string;
  benefits: string[];
}

const services: Service[] = [
  {
    icon: Flower2,
    title: 'Traditional Thai Massage',
    description: 'Ancient healing technique combining acupressure, stretching, and energy work for total body relaxation.',
    image: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Relieves muscle tension and pain',
      'Improves flexibility and range of motion',
      'Enhances blood circulation',
      'Reduces stress and anxiety',
      'Balances energy flow (Sen lines)',
      'Promotes better sleep quality'
    ],
  },
  {
    icon: Droplets,
    title: 'Aromatherapy Massage',
    description: 'Luxurious massage using essential oils to calm the mind and rejuvenate your senses.',
    image: 'https://images.pexels.com/photos/3865675/pexels-photo-3865675.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Reduces stress and promotes relaxation',
      'Alleviates anxiety and depression',
      'Improves sleep quality',
      'Enhances mood and emotional well-being',
      'Boosts immune system function',
      'Relieves muscle pain and tension'
    ],
  },
  {
    icon: Footprints,
    title: 'Foot Reflexology',
    description: 'Therapeutic foot massage targeting pressure points to promote healing and relaxation throughout the body.',
    image: 'https://images.pexels.com/photos/5240834/pexels-photo-5240834.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Relieves foot pain and discomfort',
      'Improves circulation throughout the body',
      'Reduces stress and promotes relaxation',
      'Enhances organ function through reflex points',
      'Alleviates headaches and migraines',
      'Improves sleep quality'
    ],
  },
  {
    icon: Leaf,
    title: 'Herbal Compress Therapy',
    description: 'Warm herbal pouches applied to the body to ease muscle tension and promote deep relaxation.',
    image: 'https://images.pexels.com/photos/3997986/pexels-photo-3997986.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Reduces inflammation and swelling',
      'Eases muscle pain and tension',
      'Improves blood circulation',
      'Detoxifies the body',
      'Promotes deep relaxation',
      'Enhances skin health and appearance'
    ],
  },
  {
    icon: Heart,
    title: 'Couples Spa Experience',
    description: 'Share a peaceful retreat with your loved one in our private couples treatment room.',
    image: 'https://images.pexels.com/photos/3865552/pexels-photo-3865552.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Strengthens relationship bonds',
      'Reduces stress together',
      'Creates shared relaxation experience',
      'Improves communication and intimacy',
      'Provides quality time away from daily routine',
      'Enhances overall well-being as a couple'
    ],
  },
  {
    icon: Waves,
    title: 'Hot Stone Massage',
    description: 'Smooth heated stones placed on key points to melt away tension and restore balance.',
    image: 'https://images.pexels.com/photos/6663523/pexels-photo-6663523.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Deeply relaxes muscles and tissues',
      'Improves blood circulation',
      'Reduces stress and anxiety',
      'Alleviates pain and discomfort',
      'Balances energy flow',
      'Promotes better sleep'
    ],
  },
  {
    icon: Sun,
    title: 'Body Scrub & Wrap',
    description: 'Exfoliating treatment followed by nourishing wrap to reveal soft, glowing skin.',
    image: 'https://images.pexels.com/photos/3997374/pexels-photo-3997374.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Exfoliates dead skin cells',
      'Improves skin texture and tone',
      'Enhances skin hydration',
      'Stimulates blood circulation',
      'Promotes cell renewal',
      'Leaves skin soft and glowing'
    ],
  },
  {
    icon: Sparkles,
    title: 'Signature Spa Package',
    description: 'Complete wellness experience combining our best treatments for ultimate rejuvenation.',
    image: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Comprehensive body and mind relaxation',
      'Addresses multiple wellness needs',
      'Customized treatment combination',
      'Extended relaxation time',
      'Complete detoxification experience',
      'Ultimate rejuvenation and renewal'
    ],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleBookNow = (serviceTitle: string) => {
    const phoneNumber = '9838686121';
    const message = `Hi, I would like to book the ${serviceTitle} service.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

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
                  <CardDescription className="text-sm line-clamp-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    onClick={() => handleLearnMore(service)}
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

        {/* Service Details Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl text-primary flex items-center gap-3">
                {selectedService && (
                  <>
                    <selectedService.icon className="h-8 w-8 text-accent" />
                    {selectedService.title}
                  </>
                )}
              </DialogTitle>
            </DialogHeader>

            {selectedService && (
              <div className="space-y-6">
                {/* Service Image */}
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Service Description */}
                <div>
                  <h3 className="font-serif text-xl font-semibold text-primary mb-3">About This Service</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedService.description}
                  </p>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="font-serif text-xl font-semibold text-primary mb-3">Benefits</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Book Now Button */}
                <div className="flex justify-center pt-4">
                  <Button
                    onClick={() => handleBookNow(selectedService.title)}
                    className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
