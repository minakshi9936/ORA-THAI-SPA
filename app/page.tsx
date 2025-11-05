import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Therapies from '@/components/Therapies';
import Products from '@/components/Products';
import About from '@/components/About';
import Pricing from '@/components/Pricing';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <Hero />
      <Services />
      <Therapies />
      <Products />
      <About />
      <Pricing />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
