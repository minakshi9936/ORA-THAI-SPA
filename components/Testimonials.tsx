'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'New York, USA',
    rating: 5,
    text: 'Absolutely divine experience! The therapists are incredibly skilled and the atmosphere is so peaceful. I left feeling completely rejuvenated. The traditional Thai massage was the best I have ever had.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    treatment: 'Traditional Thai Massage',
  },
  {
    name: 'Michael Chen',
    location: 'Singapore',
    rating: 5,
    text: 'Been coming here for 3 years now and it never disappoints. The attention to detail and personalized care makes Ora Thai Spa stand out. Highly recommend the aromatherapy package!',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    treatment: 'Aromatherapy Package',
  },
  {
    name: 'Emma Rodriguez',
    location: 'London, UK',
    rating: 5,
    text: 'My husband and I did the couples retreat and it was magical. The private suite, the attentive staff, everything was perfect. Will definitely return on our next visit to the city.',
    image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=200',
    treatment: 'Couples Retreat',
  },
  {
    name: 'David Thompson',
    location: 'Sydney, Australia',
    rating: 5,
    text: 'Outstanding service from start to finish. The herbal compress therapy was incredibly soothing for my chronic back pain. The therapist really knew what she was doing.',
    image: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=200',
    treatment: 'Herbal Compress Therapy',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why thousands of clients trust us for their wellness journey
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-secondary/20 rounded-3xl p-8 md:p-12">
            <Quote className="absolute top-8 left-8 h-16 w-16 text-accent/20" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-accent shadow-lg"
                />
                <div className="text-center md:text-left">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-1">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    {testimonials[currentIndex].location}
                  </p>
                  <div className="flex gap-1 justify-center md:justify-start">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-lg text-foreground leading-relaxed mb-6 italic">
                {testimonials[currentIndex].text}
              </p>

              <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                {testimonials[currentIndex].treatment}
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full hover:bg-accent hover:text-white hover:border-accent"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-muted'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full hover:bg-accent hover:text-white hover:border-accent"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-secondary/20 rounded-xl">
              <p className="text-4xl font-bold text-primary mb-2">5,000+</p>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center p-6 bg-secondary/20 rounded-xl">
              <p className="text-4xl font-bold text-primary mb-2">4.9/5</p>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div className="text-center p-6 bg-secondary/20 rounded-xl">
              <p className="text-4xl font-bold text-primary mb-2">98%</p>
              <p className="text-muted-foreground">Would Recommend</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
