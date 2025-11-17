'use client';

import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Hero() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const handleBookAppointment = () => {
    const phoneNumber = '+9838686121';
    const message = 'Hello! I would like to book an appointment at Ora Thai Spa.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCheckAvailability = () => {
    const phoneNumber = '+9838686121';
    const message = `Hello! I would like to check availability for ${selectedService} on ${selectedDate} at Ora Thai Spa.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary/40 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-20 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Experience True <span className="text-accent">Serenity</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Authentic Thai massage and wellness treatments in a luxurious, peaceful sanctuary
        </p>
        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          onClick={handleBookAppointment}
        >
          Book Your Appointment
        </Button>

        <div className="mt-16 bg-white/95 backdrop-blur-md rounded-2xl p-6 max-w-4xl mx-auto shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4 text-accent" />
                Select Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Service</label>
              <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Thai Massage">Thai Massage</SelectItem>
                  <SelectItem value="Aromatherapy">Aromatherapy</SelectItem>
                  <SelectItem value="Foot Massage">Foot Massage</SelectItem>
                  <SelectItem value="Herbal Compress">Herbal Compress</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              className="bg-primary hover:bg-primary/90 text-white h-12"
              onClick={handleCheckAvailability}
            >
              Check Availability
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
