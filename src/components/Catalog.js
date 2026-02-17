import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from './ui/card';

const productImages = [
  'https://images.unsplash.com/photo-1636019411401-82485711b6ba?w=400&q=80',
  'https://images.unsplash.com/photo-1636019409518-7dd51dc8c31a?w=400&q=80',
  'https://images.unsplash.com/photo-1771053393647-a8c75798f58d?w=400&q=80',
  'https://images.unsplash.com/photo-1667242197482-ffe672de74da?w=400&q=80',
  'https://images.unsplash.com/photo-1667242196595-0f8f28afb92d?w=400&q=80',
  'https://images.unsplash.com/photo-1768548658056-f5cbb2d3d795?w=400&q=80',
];

const Catalog = () => {
  const { t, direction } = useLanguage();

  return (
    <section
      id="catalog"
      data-testid="catalog-section"
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/40 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            data-testid="catalog-title"
            className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            {t.catalog.title}
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p
            data-testid="catalog-subtitle"
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {t.catalog.subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.catalog.products.map((product, index) => (
            <Card
              key={index}
              data-testid={`catalog-product-${index}`}
              className="group bg-white/80 backdrop-blur-sm border-0 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 rounded-2xl overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={productImages[index]}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Price Tag */}
                <div className="absolute top-4 end-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="font-bold text-secondary">
                    {t.catalog.currency}{product.price}
                  </span>
                </div>
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors duration-300">
                  {product.name}
                </h3>
                <div className="w-12 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
