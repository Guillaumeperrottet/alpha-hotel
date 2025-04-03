import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState('FR');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
    console.log(`Langue changée en: ${lang}`);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
        scrolled || menuOpen ? 'bg-white shadow-md' : 'bg-transparent'
      } ${menuOpen ? 'menu-open' : ''}`}
    >
      <div className="w-full px-4 flex justify-between items-center py-4">
        <button
          className="md:hidden order-1 mr-4"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Menu principal"
        >
          <div className="relative w-6 h-6">
            <span
              className={`absolute top-0 left-0 w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2.5' : ''
              }`}
            ></span>
            <span
              className={`absolute top-2.5 left-0 w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`}
            ></span>
          </div>
        </button>

        <button
          className="hidden md:flex items-center order-1 text-gray-800 hover:text-gray-600"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Menu principal"
        >
          <div className="relative w-6 h-6 mr-2">
            <span
              className={`absolute top-0 left-0 w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2.5' : ''
              }`}
            ></span>
            <span
              className={`absolute top-2.5 left-0 w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`}
            ></span>
          </div>
          {menuOpen ? 'Fermer' : 'Menu'}
        </button>

        <div className="text-lg font-bold absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            {<Image src="/images/logo.png" alt="Alpha-Hotel Logo" width={40} height={40} />}
          </Link>
        </div>

        <div className="hidden md:block order-3">
          <Link
            href="/reserver"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Réserver une chambre
          </Link>
        </div>

        {/* Menu de navigation avec transition améliorée */}
        <div
          className={`fixed left-0 right-0 bottom-0 top-[53px] bg-white z-10 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
            menuOpen
              ? 'opacity-100 translate-x-0 pointer-events-auto'
              : 'opacity-0 -translate-x-full pointer-events-none'
          }`}
        >
          <nav className="text-center space-y-4 text-lg py-16 w-full">
            <ul className="flex flex-col space-y-4">
              <li><Link href="/" className="hover:text-gray-600 transition-colors duration-200">Accueil</Link></li>
              <li><Link href="/dormir" className="hover:text-gray-600 transition-colors duration-200">Dormir</Link></li>
              <li><Link href="/le-spot" className="hover:text-gray-600 transition-colors duration-200">Le Spot</Link></li>
              <li><Link href="/activites" className="hover:text-gray-600 transition-colors duration-200">Idées d'activités</Link></li>
              <li><Link href="/engagements" className="hover:text-gray-600 transition-colors duration-200">Nos engagements</Link></li>
              <li><Link href="/groupes" className="hover:text-gray-600 transition-colors duration-200">Corpo et groupes</Link></li>
              <li><Link href="/galerie" className="hover:text-gray-600 transition-colors duration-200">Galerie photos</Link></li>
              <li><Link href="/contact" className="hover:text-gray-600 transition-colors duration-200">Contact & Accès</Link></li>
            </ul>
          </nav>
          <div className="mb-8 text-center">
            <p className="mb-4">Nous suivre :</p>
            <div className="flex justify-center space-x-4">
              <Link href="https://facebook.com" className="hover:text-gray-600 transition-colors duration-200" aria-label="Facebook">Facebook</Link>
              <Link href="https://instagram.com" className="hover:text-gray-600 transition-colors duration-200" aria-label="Instagram">Instagram</Link>
            </div>
            <div className="mt-4">
              <p>Langue :</p>
              <div className="flex justify-center space-x-4">
                <button
                  className={`hover:text-gray-600 transition-colors duration-200 ${currentLang === 'FR' ? 'font-bold' : ''}`}
                  onClick={() => handleLanguageChange('FR')}
                  aria-pressed={currentLang === 'FR'}
                >
                  FR
                </button>
                <button
                  className={`hover:text-gray-600 transition-colors duration-200 ${currentLang === 'EN' ? 'font-bold' : ''}`}
                  onClick={() => handleLanguageChange('EN')}
                  aria-pressed={currentLang === 'EN'}
                >
                  EN
                </button>
                <button
                  className={`hover:text-gray-600 transition-colors duration-200 ${currentLang === 'DE' ? 'font-bold' : ''}`}
                  onClick={() => handleLanguageChange('DE')}
                  aria-pressed={currentLang === 'DE'}
                >
                  DE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
