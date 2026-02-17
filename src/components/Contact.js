import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const Contact = () => {
  const { t, direction } = useLanguage();

  const openWhatsApp = () => {
    window.open('https://wa.me/972501234567?text=היי, אשמח להזמין תור', '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: '050-123-4567',
      href: 'tel:+972501234567',
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: 'info@coralempire.co.il',
      href: 'mailto:info@coralempire.co.il',
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: t.contact.addressValue,
      href: 'https://maps.google.com/?q=Dizengoff+Street+123+Tel+Aviv',
    },
  ];

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-24 md:py-32 bg-muted/30 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            data-testid="contact-title"
            className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            {t.contact.title}
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p
            data-testid="contact-subtitle"
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.icon === MapPin ? '_blank' : undefined}
                rel={item.icon === MapPin ? 'noopener noreferrer' : undefined}
                data-testid={`contact-info-${index}`}
                className="flex items-center gap-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/50 rounded-xl flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-secondary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-lg font-semibold text-foreground">{item.value}</p>
                </div>
              </a>
            ))}

            {/* WhatsApp CTA */}
            <Button
              data-testid="contact-whatsapp-cta"
              onClick={openWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl px-8 py-6 text-lg font-medium flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6" />
              {t.hero.cta}
            </Button>
          </div>

          {/* Map */}
          <div
            data-testid="contact-map"
            className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.0876577392!2d34.77261!3d32.07765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b9b48a2c5b1%3A0x9c9d8b33b99a01e!2sDizengoff%20St%2C%20Tel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Coral Empire Location"
              className="absolute inset-0"
            />
            {/* Map Overlay Gradient */}
            <div className="absolute inset-0 pointer-events-none border-4 border-white/20 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
