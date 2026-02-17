import { useLanguage } from '../context/LanguageContext';
import { Award, Sparkles, Heart } from 'lucide-react';

const About = () => {
  const { t, direction } = useLanguage();

  const highlights = [
    { icon: Award, text: t.about.highlight1 },
    { icon: Sparkles, text: t.about.highlight2 },
    { icon: Heart, text: t.about.highlight3 },
  ];

  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative group">
              <img
                data-testid="about-image"
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                alt="Nail salon interior"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
              />
              {/* Floating Accent Card */}
              <div className="absolute -bottom-6 -right-6 md:-right-10 bg-white/90 backdrop-blur-xl p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-secondary">10+</p>
                    <p className="text-sm text-muted-foreground">
                      {direction === 'rtl' ? 'שנות ניסיון' : 'Years Experience'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <h2
              data-testid="about-title"
              className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              {t.about.title}
            </h2>
            <div className="w-20 h-1 bg-accent mb-8" />
            <p
              data-testid="about-description"
              className="text-lg text-muted-foreground leading-relaxed mb-10"
            >
              {t.about.description}
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  data-testid={`about-highlight-${index}`}
                  className="flex flex-col items-center text-center p-6 bg-primary/30 rounded-xl hover:bg-primary/50 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                    <item.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <p className="font-medium text-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
