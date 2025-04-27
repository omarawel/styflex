import { useEffect, useState } from 'react';

const StickyNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'vorteile', label: 'Vorteile' },
    { id: 'shop', label: 'Shop' },
    { id: 'salons', label: 'Salons' },
    { id: 'vip', label: 'VIP' },
    { id: 'nfc', label: 'NFC Karten' },
    { id: 'faq', label: 'FAQ' },
    { id: 'kontakt', label: 'Kontakt' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-16 left-0 right-0 bg-white shadow-md z-50 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex justify-center space-x-6 py-4">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`text-gray-600 hover:text-primary transition ${
                  activeSection === section.id ? 'text-primary font-bold' : ''
                }`}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default StickyNav;
