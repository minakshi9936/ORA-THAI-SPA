import { Award, Users, Star, Clock } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    value: '15+',
    label: 'Years of Experience',
  },
  {
    icon: Users,
    value: '50+',
    label: 'Specialist Therapists',
  },
  {
    icon: Star,
    value: '5-Star',
    label: 'Customer Rating',
  },
  {
    icon: Award,
    value: '20K+',
    label: 'Happy Clients',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Spa interior"
                className="rounded-2xl w-full h-64 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/3764538/pexels-photo-3764538.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Spa treatment"
                className="rounded-2xl w-full h-64 object-cover mt-8"
              />
              <img
                src="https://images.pexels.com/photos/3865675/pexels-photo-3865675.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Relaxation"
                className="rounded-2xl w-full h-64 object-cover -mt-8"
              />
              <img
                src="https://images.pexels.com/photos/4919813/pexels-photo-4919813.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Spa products"
                className="rounded-2xl w-full h-64 object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-accent text-white p-8 rounded-2xl shadow-xl hidden lg:block">
              <p className="font-serif text-4xl font-bold">15+</p>
              <p className="text-sm">Years Serving</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
                Your Journey to Wellness Begins Here
              </h2>
              <div className="w-20 h-1 bg-accent rounded"></div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              At Ora Thai Spa, we bring you the ancient wisdom of Thai healing arts combined with modern wellness practices. Our sanctuary is designed to provide a complete escape from the stresses of daily life.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2008, we have built a reputation for excellence in authentic Thai massage and holistic treatments. Our team of certified therapists are trained in traditional techniques passed down through generations, ensuring you receive the most authentic and effective treatments.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in the healing power of touch and the importance of creating a peaceful environment where body and mind can truly relax and rejuvenate. Every detail, from our serene ambiance to our carefully selected natural products, is designed with your wellbeing in mind.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-6 bg-white rounded-xl border-2 border-border hover:border-accent/50 transition-colors"
                  >
                    <Icon className="h-8 w-8 text-accent mx-auto mb-3" />
                    <p className="font-serif text-2xl font-bold text-primary mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
