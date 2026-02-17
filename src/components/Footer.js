import { useLanguage } from '../context/LanguageContext';
import { Instagram, Facebook, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
    const { t, direction } = useLanguage();

    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
        { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
        {
            icon: MessageCircle,
            href: 'https://wa.me/972501234567',
            label: 'WhatsApp',
        },
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = [
        { key: 'home', id: 'hero' },
        { key: 'about', id: 'about' },
        { key: 'gallery', id: 'gallery' },
        { key: 'catalog', id: 'catalog' },
        { key: 'contact', id: 'contact' },
    ];

    return (
        <footer
            data-testid='footer'
            className='bg-secondary text-white py-16 relative overflow-hidden'
        >
            {/* Decorative Elements */}
            <div className='absolute top-0 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl' />
            <div className='absolute bottom-0 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl' />

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
                <div className='grid md:grid-cols-3 gap-12 mb-12'>
                    {/* Brand */}
                    <div>
                        <h3
                            data-testid='footer-logo'
                            className='font-heading text-3xl font-bold mb-4'
                        >
                            <span className='text-accent'>Coral</span> Empire
                        </h3>
                        <p className='text-white/70 leading-relaxed mb-6'>
                            {t.footer.tagline}
                        </p>
                        {/* Social Links */}
                        <div className='flex gap-4'>
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    data-testid={`footer-social-${social.label.toLowerCase()}`}
                                    className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300'
                                    aria-label={social.label}
                                >
                                    <social.icon className='w-5 h-5' />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className='font-heading text-lg font-semibold mb-6 text-accent'>
                            {direction === 'rtl'
                                ? 'קישורים מהירים'
                                : 'Quick Links'}
                        </h4>
                        <nav className='flex flex-col gap-3'>
                            {navItems.map((item) => (
                                <button
                                    key={item.key}
                                    onClick={() => scrollToSection(item.id)}
                                    data-testid={`footer-nav-${item.key}`}
                                    className='text-white/70 hover:text-accent transition-colors duration-300 text-start'
                                >
                                    {t.nav[item.key]}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className='font-heading text-lg font-semibold mb-6 text-accent'>
                            {t.nav.contact}
                        </h4>
                        <div className='space-y-3 text-white/70'>
                            <p>050-123-4567</p>
                            <p>info@coralempire.co.il</p>
                            <p>{t.contact.addressValue}</p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className='border-t border-white/10 pt-8'>
                    <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                        <p
                            data-testid='footer-copyright'
                            className='text-white/60 text-sm flex items-center gap-2'
                        >
                            © {currentYear} Coral Empire of Beauty.{' '}
                            {t.footer.rights}
                        </p>
                        <p className='text-white/60 text-sm flex items-center gap-2'>
                            {direction === 'rtl' ? 'נבנה עם' : 'Built with'}
                            <Heart className='w-4 h-4 text-accent fill-accent' />
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
