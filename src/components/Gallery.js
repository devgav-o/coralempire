import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, ZoomIn } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80',
    alt: 'Elegant nail art design',
  },
  {
    src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80',
    alt: 'Professional manicure',
  },
  {
    src: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600&q=80',
    alt: 'Gel nail polish application',
  },
  {
    src: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&q=80',
    alt: 'French manicure style',
  },
  {
    src: 'https://images.unsplash.com/photo-1743617206507-447c78118622?w=600&q=80',
    alt: 'Purple painted nails',
  },
  {
    src: 'https://images.unsplash.com/photo-1691711802508-a8266ca1f67e?w=600&q=80',
    alt: 'Creative nail designs',
  },
  {
    src: 'https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=600&q=80',
    alt: 'Pink nail polish',
  },
  {
    src: 'https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?w=600&q=80',
    alt: 'Nail art inspiration',
  },
];

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="py-24 md:py-32 bg-muted/30 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            data-testid="gallery-title"
            className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            {t.gallery.title}
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p
            data-testid="gallery-subtitle"
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              data-testid={`gallery-image-${index}`}
              className="relative group aspect-square overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-secondary" />
                  </div>
                </div>
              </div>
              {/* Gold Corner Accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-accent/80 border-l-[40px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent
          data-testid="gallery-lightbox"
          className="max-w-4xl p-0 bg-transparent border-none shadow-none"
        >
          <DialogTitle className="sr-only">Gallery Image View</DialogTitle>
          <DialogDescription className="sr-only">
            Enlarged view of selected nail art image from gallery
          </DialogDescription>
          <button
            data-testid="lightbox-close"
            onClick={() => setSelectedImage(null)}
            className="absolute -top-12 right-0 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
          {selectedImage && (
            <img
              src={selectedImage.src.replace('w=600', 'w=1200')}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
