import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const phoneNumber = '+9838686121';

const products = [
  {
    name: 'Lavender Essential Oil',
    category: 'Essential Oils',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd2TJaxa8wjpKVdDgdKXg3icRgJXdz1dmchw&s',
    tag: 'Best Seller',
  },
  {
    name: 'Thai Herbal Compress',
    category: 'Herbal Products',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7peBrtaa27fF9NWDWI5L-2v1ZD89zqO5gWQ&s',
    tag: 'Traditional',
  },
  {
    name: 'Aromatherapy Gift Set',
    category: 'Gift Sets',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMq6tJc41aBLHPTzMR2JO0yhxWHqC7hgkkVw&s',
    tag: 'Premium',
  },
  {
    name: 'Coconut Body Cream',
    category: 'Body Care',
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: null,
  },
  {
    name: 'Lemongrass Massage Oil',
    category: 'Massage Oils',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4TOGa9L1u5D4wr1ZkcvNTEeMlyDDC7WqRew&s',
    tag: 'New',
  },
  {
    name: 'Himalayan Bath Salts',
    category: 'Bath Products',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxYKySPMGIlgaAeeF69SZEuSJFKf7aAqT3cw&s',
    tag: null,
  },
  {
    name: 'Thai Silk Eye Pillow',
    category: 'Accessories',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9QQsxxY-IfMSu9kynVJA1zyFYG80JWzNzWw&s',
    tag: null,
  },
  {
    name: 'Organic Face Serum',
    category: 'Skincare',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRjyYmRBIS1UzILFJAFB6raxlpf3GH2j7UxA&s',
    tag: 'Premium',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Spa Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take the spa experience home with our curated selection of premium wellness products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border-2 border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.tag && (
                  <Badge className="absolute top-4 right-4 bg-accent text-white">
                    {product.tag}
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <p className="text-xs text-accent font-semibold uppercase tracking-wide mb-2">
                  {product.category}
                </p>
                <h3 className="font-serif text-lg font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-end">
                  <a
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hello! I would like to buy the ${product.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full text-sm font-medium bg-accent hover:bg-accent/90 text-white px-4 py-2 transition-colors"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-white"
          >
            View All Products
          </Button>
        </div>  */}
      </div>
    </section>
  );
}
