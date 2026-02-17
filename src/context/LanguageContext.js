import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  he: {
    // Header
    nav: {
      home: 'בית',
      about: 'אודות',
      gallery: 'גלריה',
      catalog: 'קטלוג',
      contact: 'צור קשר',
    },
    // Hero
    hero: {
      title: 'קורל אמפייר',
      subtitle: 'של היופי',
      description: 'חווי את חוויית הציפורניים והיופי האולטימטיבית. טיפולי יוקרה מותאמים אישית עבורך.',
      cta: 'הזמיני דרך וואטסאפ',
      secondaryCta: 'לגלריה',
    },
    // About
    about: {
      title: 'אודות הסלון',
      description: 'קורל אמפייר של היופי הוא יעד היוקרה שלך לטיפולי ציפורניים ויופי מקצועיים. הצוות המיומן שלנו מחויב לספק שירות יוצא דופן באווירה מרגיעה ואלגנטית.',
      highlight1: 'מאסטריות מוסמכות',
      highlight2: 'מוצרים פרימיום',
      highlight3: 'אווירה מפנקת',
    },
    // Gallery
    gallery: {
      title: 'הגלריה שלנו',
      subtitle: 'התעוררי להשראה מהעבודות האחרונות שלנו',
    },
    // Catalog
    catalog: {
      title: 'המוצרים שלנו',
      subtitle: 'מוצרי יופי וטיפוח מובחרים',
      currency: '₪',
      products: [
        { name: 'לק ג\'ל פרימיום', price: '89' },
        { name: 'שמן ציפורניים מזין', price: '65' },
        { name: 'קרם ידיים לחות', price: '55' },
        { name: 'סט מניקור ביתי', price: '149' },
        { name: 'מסיר לק עדין', price: '35' },
        { name: 'קרם קוטיקולה', price: '45' },
      ],
    },
    // Contact
    contact: {
      title: 'צרי קשר',
      subtitle: 'נשמח לשמוע ממך',
      phone: 'טלפון',
      email: 'אימייל',
      address: 'כתובת',
      addressValue: 'רחוב דיזנגוף 123, תל אביב',
    },
    // Footer
    footer: {
      rights: 'כל הזכויות שמורות',
      tagline: 'יופי בכל נגיעה',
    },
  },
  en: {
    // Header
    nav: {
      home: 'Home',
      about: 'About',
      gallery: 'Gallery',
      catalog: 'Catalog',
      contact: 'Contact',
    },
    // Hero
    hero: {
      title: 'Coral Empire',
      subtitle: 'of Beauty',
      description: 'Experience the ultimate nail and beauty journey. Luxury treatments tailored just for you.',
      cta: 'Book via WhatsApp',
      secondaryCta: 'View Gallery',
    },
    // About
    about: {
      title: 'About Our Salon',
      description: 'Coral Empire of Beauty is your luxury destination for professional nail and beauty treatments. Our skilled team is committed to delivering exceptional service in a relaxing and elegant atmosphere.',
      highlight1: 'Certified Experts',
      highlight2: 'Premium Products',
      highlight3: 'Pampering Ambiance',
    },
    // Gallery
    gallery: {
      title: 'Our Gallery',
      subtitle: 'Get inspired by our latest work',
    },
    // Catalog
    catalog: {
      title: 'Our Products',
      subtitle: 'Premium beauty and care products',
      currency: '₪',
      products: [
        { name: 'Premium Gel Polish', price: '89' },
        { name: 'Nourishing Nail Oil', price: '65' },
        { name: 'Moisturizing Hand Cream', price: '55' },
        { name: 'Home Manicure Set', price: '149' },
        { name: 'Gentle Polish Remover', price: '35' },
        { name: 'Cuticle Cream', price: '45' },
      ],
    },
    // Contact
    contact: {
      title: 'Contact Us',
      subtitle: 'We\'d love to hear from you',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      addressValue: '123 Dizengoff St, Tel Aviv',
    },
    // Footer
    footer: {
      rights: 'All Rights Reserved',
      tagline: 'Beauty in Every Touch',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('he');
  const [direction, setDirection] = useState('rtl');

  useEffect(() => {
    const dir = language === 'he' ? 'rtl' : 'ltr';
    setDirection(dir);
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'he' ? 'en' : 'he'));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, direction, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
