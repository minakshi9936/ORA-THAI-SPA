import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const phoneNumber = '+9838686121';
  const message = 'Hello! I would like to inquire about your services at Ora Thai Spa.';

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-orange-600 text-white p-5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-bounce"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </a>
  );
}
