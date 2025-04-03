import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout/Layout';

export default function Dormir() {
  // État pour gérer la chambre active (au lieu de la navigation active)
  const [activeRoom, setActiveRoom] = useState('simple');
  const [menuOpen, setMenuOpen] = useState(false); // État pour le menu principal

  // Fonction pour changer la chambre active
  const changeRoom = (roomId) => {
    setActiveRoom(roomId);
    // Optionnel: ajouter un paramètre à l'URL pour permettre le partage direct
    window.history.pushState({}, '', `?room=${roomId}`);
  };

  // Effet pour récupérer le paramètre d'URL au chargement
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const roomParam = params.get('room');
    if (roomParam && ['simple', 'double', 'superieur', 'omega'].includes(roomParam)) {
      setActiveRoom(roomParam);
    }
  }, []);

  // Gestion de l'ouverture/fermeture du menu principal - SOLUTION CORRIGÉE
  useEffect(() => {
    // Fonction pour vérifier l'état du menu
    const checkMenuState = () => {
      const menuElement = document.querySelector('header');
      if (menuElement) {
        // Vérifiez si le menu a la classe 'menu-open'
        const isMenuOpen = menuElement.classList.contains('menu-open');
        setMenuOpen(isMenuOpen);
      }
    };

    // Vérifiez immédiatement l'état initial après le montage du composant
    const timeoutId = setTimeout(() => {
      checkMenuState();
    }, 100);

    // Utilisez un MutationObserver pour détecter les changements de classe sur le header
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkMenuState();
        }
      });
    });

    const menuElement = document.querySelector('header');
    if (menuElement) {
      observer.observe(menuElement, { attributes: true });
    }

    // Ajoutez également un écouteur d'événements pour les clics sur le bouton de menu
    const menuButton = document.querySelector('.menu-button'); // Ajustez selon votre sélecteur réel
    if (menuButton) {
      menuButton.addEventListener('click', () => {
        // Petit délai pour laisser le temps à la classe d'être appliquée
        setTimeout(checkMenuState, 50);
      });
    }

    // Nettoyage
    return () => {
      clearTimeout(timeoutId);
      if (observer) {
        observer.disconnect();
      }
      if (menuButton) {
        menuButton.removeEventListener('click', checkMenuState);
      }
    };
  }, []);

  // Données des chambres pour faciliter la maintenance
  const roomsData = {
    simple: {
      title: "CHAMBRE simple",
      image: "/images/rooms/simple-room.jpg",
      description: "Nos chambres simple offrent un espace chaleureux et confortable de 25m², dotées d'une décoration soignée et d'une vue sur le jardin. Chaque chambre dispose d'une salle de bain privative avec douche à l'italienne.",
      features: [
        "Surface: 25m²",
        "Capacité: 2 personnes",
        "Lit king-size ou deux lits simples",
        "Petit-déjeuner inclus"
      ],
      price: "À partir de 120€ / nuit",
      imageOnLeft: true
    },
    double: {
      title: "SUITE double",
      image: "/images/rooms/double-suite.jpg",
      description: "Nos suites double de 40m² offrent un espace de vie séparé et une terrasse privative donnant sur notre jardin méditerranéen. Profitez d'un séjour spacieux et élégant, idéal pour les séjours prolongés.",
      features: [
        "Surface: 40m²",
        "Capacité: 2-3 personnes",
        "Lit king-size et canapé convertible",
        "Terrasse privative"
      ],
      price: "À partir de 180€ / nuit",
      imageOnLeft: false
    },
    superieur: {
      title: "SUITE superieur",
      image: "/images/rooms/superieur-suite.jpg",
      description: "Notre suite superieur de 60m² offre le summum du luxe avec un salon séparé, une grande terrasse privative et une vue panoramique. Une expérience d'exception pour votre séjour, avec des prestations haut de gamme.",
      features: [
        "Surface: 60m²",
        "Capacité: 2-4 personnes",
        "Chambre séparée avec lit king-size",
        "Grande terrasse avec vue panoramique",
        "Bain à remous privatif"
      ],
      price: "À partir de 250€ / nuit",
      imageOnLeft: true
    },
    omega: {
      title: "SUITE omega",
      image: "/images/rooms/family-suite.jpg",
      description: "Notre suite omega de 75m² est parfaite pour les familles ou groupes d'amis. Avec deux chambres séparées, un salon commun et une grande terrasse, elle offre tout l'espace et le confort nécessaires pour un séjour en groupe.",
      features: [
        "Surface: 75m²",
        "Capacité: 4-6 personnes",
        "Deux chambres avec lit double et lits jumeaux",
        "Deux salles de bains complètes",
        "Terrasse aménagée avec vue panoramique"
      ],
      price: "À partir de 320€ / nuit",
      imageOnLeft: false
    }
  };

  // Composant pour afficher une chambre
  const RoomDisplay = ({ room }) => {
    const data = roomsData[room];

    // Disposition conditionnelle basée sur imageOnLeft
    const imageBlock = (
      <div className="relative h-[500px]">
        <Image
          src={data.image}
          alt={data.title}
          fill
          style={{objectFit: "cover"}}
          className="rounded-lg"
          quality={85}
          loading={room === 'simple' ? "eager" : "lazy"}
        />
      </div>
    );

    const contentBlock = (
      <div>
        <h3 className="text-3xl font-light mb-6">{data.title}</h3>
        <p className="text-gray-700 mb-6">
          {data.description}
        </p>
        <ul className="mb-8 space-y-2">
          {data.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
        <p className="text-xl font-semibold mb-6">{data.price}</p>
        <button className="bg-amber-800 hover:bg-amber-900 text-white py-3 px-8 rounded-lg transition">
          RÉSERVER
        </button>
      </div>
    );

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {data.imageOnLeft ? (
          <>
            {imageBlock}
            {contentBlock}
          </>
        ) : (
          <>
            <div className="order-2 lg:order-1">{contentBlock}</div>
            <div className="order-1 lg:order-2">{imageBlock}</div>
          </>
        )}
      </div>
    );
  };

  return (
    <Layout>
      <Head>
        <title>Dormir | Alpha Hotel</title>
        <meta name="description" content="Découvrez nos différentes options d'hébergement pour votre séjour" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[60vh]">
        <Image
          src="/images/rooms/hero-bedroom.jpg"
          alt="Nos chambres"
          fill
          priority
          style={{objectFit: "cover"}}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl text-white font-light">DORMIR</h1>
        </div>
      </div>

      {/* Navigation des chambres (sticky) */}
      <div
        className={`sticky top-[56px] z-30 bg-white shadow-md transition-opacity duration-300 ${
          menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="container mx-auto px-4">
          {/* Version mobile avec défilement horizontal */}
          <div className="flex overflow-x-auto scrollbar-hide md:hidden">
            <button
              onClick={() => changeRoom('simple')}
              className={`py-4 px-4 whitespace-nowrap font-light text-sm transition-colors ${activeRoom === 'simple' ? 'text-amber-800 border-b-2 border-amber-800' : 'text-gray-600 hover:text-amber-800'}`}
            >
              Chambre simple
            </button>
            <button
              onClick={() => changeRoom('double')}
              className={`py-4 px-4 whitespace-nowrap font-light text-sm transition-colors ${activeRoom === 'double' ? 'text-amber-800 border-b-2 border-amber-800' : 'text-gray-600 hover:text-amber-800'}`}
            >
              Chambre double
            </button>
            <button
              onClick={() => changeRoom('superieur')}
              className={`py-4 px-4 whitespace-nowrap font-light text-sm transition-colors ${activeRoom === 'superieur' ? 'text-amber-800 border-b-2 border-amber-800' : 'text-gray-600 hover:text-amber-800'}`}
            >
              Chambre supérieur
            </button>
            <button
              onClick={() => changeRoom('omega')}
              className={`py-4 px-4 whitespace-nowrap font-light text-sm transition-colors ${activeRoom === 'omega' ? 'text-amber-800 border-b-2 border-amber-800' : 'text-gray-600 hover:text-amber-800'}`}
            >
              Suite Omega
            </button>
          </div>

          {/* Version desktop avec grille */}
          <div className="hidden md:grid md:grid-cols-4 md:text-center">
            <button
              onClick={() => changeRoom('simple')}
              className={`py-4 px-2 whitespace-nowrap font-light text-lg transition-colors ${activeRoom === 'simple' ? 'text-amber-800 border-b-2 border-amber-800' : 'text-gray-600 hover:text-amber-800'}`}
            >
              Chambre simple
            </button>
            <button
              onClick={() => changeRoom('double')}
              className={`py-4 px-2 whitespace-nowrap font-light text-lg transition-colors ${activeRoom === 'double' ? 'text-amber-800 border-b-2 border-amber-800' : 'text-gray-600 hover:text-amber-800'}`}
            >
              Chambre double
            </button>
            <button
              onClick={() => changeRoom('superieur')}
              className={`py-4 px-2 whitespace-nowrap font-light text-lg transition-colors ${activeRoom === 'superieur' ? 'text-amber-800 border-b-2 border-amber-800' : 'text-gray-600 hover:text-amber-800'}`}
            >
              Chambre supérieur
            </button>
            <button
              onClick={() => changeRoom('omega')}
              className={`py-4 px-2 whitespace-nowrap font-light text-lg transition-colors ${activeRoom === 'omega' ? 'text-amber-800 border-b-2 border-amber-800' : 'text-gray-600 hover:text-amber-800'}`}
            >
              Suite Omega
            </button>
          </div>
        </div>
      </div>

      {/* Room Display - Affiche uniquement la chambre active */}
      <div className="container mx-auto px-4 pb-16">
        <div className="mb-24">
          <RoomDisplay room={activeRoom} />
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6">RÉSERVEZ VOTRE SÉJOUR</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-8">
            Pour toute demande spéciale ou pour des informations complémentaires sur nos chambres,
            n'hésitez pas à nous contacter directement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-800 hover:bg-amber-900 text-white py-3 px-8 rounded-lg transition">
              RÉSERVER MAINTENANT
            </button>
            <button className="border border-amber-800 text-amber-800 hover:bg-amber-50 py-3 px-8 rounded-lg transition">
              NOUS CONTACTER
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
