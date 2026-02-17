import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
    const { t, direction } = useLanguage();

    const scrollToGallery = () => {
        const element = document.getElementById('gallery');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const openWhatsApp = () => {
        window.open(
            'https://wa.me/972501234567?text=היי, אשמח להזמין תור',
            '_blank',
        );
    };

    return (
        <section
            id='hero'
            data-testid='hero-section'
            className='relative min-h-screen flex items-center justify-center overflow-hidden'
        >
            {/* Background Image with Overlay */}
            <div className='absolute inset-0'>
                <img
                    src='https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1920&q=80'
                    alt='Nail salon background'
                    className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-background/90' />
            </div>

            {/* Decorative Elements */}
            <div className='absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse-slow' />
            <div className='absolute bottom-40 right-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000' />

            {/* Content */}
            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20'>
                <div className='animate-fade-in-up'>
                    {/* Logo/Title */}
                    <h1
                        data-testid='hero-title'
                        className='font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4'
                    >
                        <span className='text-white drop-shadow-lg'>
                            {t.hero.title}
                        </span>
                    </h1>
                    <p
                        data-testid='hero-subtitle'
                        className='font-heading text-3xl sm:text-4xl md:text-5xl text-accent font-semibold mb-8 drop-shadow-md'
                    >
                        {t.hero.subtitle}
                    </p>

                    {/* Description */}
                    <p
                        data-testid='hero-description'
                        className='text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-sm'
                    >
                        {t.hero.description}
                    </p>

                    {/* CTAs */}
                    <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6'>
                        <Button
                            data-testid='hero-whatsapp-cta'
                            onClick={openWhatsApp}
                            className='bg-[#25a554] hover:bg-[#128C7E] text-white rounded-full px-8 py-6 text-lg font-medium flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300'
                        >
                            <MessageCircle className='w-6 h-6' />
                            {t.hero.cta}
                        </Button>
                        <Button
                            data-testid='hero-gallery-cta'
                            onClick={scrollToGallery}
                            variant='outline'
                            className='border-2 border-white text-white hover:bg-white hover:text-secondary rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 backdrop-blur-sm'
                        >
                            {t.hero.secondaryCta}
                        </Button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className='absolute -bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce'>
                    <ArrowDown className='w-8 h-8 text-white/70' />
                </div>
            </div>
        </section>
    );
};

export default Hero;
