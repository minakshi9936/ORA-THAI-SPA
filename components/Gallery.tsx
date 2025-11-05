'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Massage therapy',
    category: 'Treatments',
  },
  {
    url: 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Spa interior',
    category: 'Facilities',
  },
  {
    url: 'https://images.pexels.com/photos/3865675/pexels-photo-3865675.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Aromatherapy',
    category: 'Treatments',
  },
  {
    url: 'https://images.pexels.com/photos/3764538/pexels-photo-3764538.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Relaxation room',
    category: 'Facilities',
  },
  {
    url: 'https://images.pexels.com/photos/3997986/pexels-photo-3997986.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Herbal compress',
    category: 'Treatments',
  },
  {
    url: 'https://images.pexels.com/photos/6663523/pexels-photo-6663523.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Hot stones',
    category: 'Treatments',
  },
  {
    url: 'https://images.pexels.com/photos/3997374/pexels-photo-3997374.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Body treatment',
    category: 'Treatments',
  },
  {
    url: 'https://images.pexels.com/photos/5473184/pexels-photo-5473184.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Foot massage',
    category: 'Treatments',
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRjyYmRBIS1UzILFJAFB6raxlpf3GH2j7UxA&s',
    alt: 'Spa accessories',
    category: 'Products',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Step into our serene sanctuary and explore the tranquil spaces where wellness comes to life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white font-serif text-xl font-semibold mb-1">{image.alt}</p>
                <p className="text-accent text-sm uppercase tracking-wide">{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-full rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
}
