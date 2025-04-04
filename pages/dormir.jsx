import React, { useState, useEffect, useMemo } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/dormir/HeroSection';
import RoomTabs from '../components/ui/RoomTabs';
import RoomDisplay from '../components/sections/dormir/RoomDisplay';
import CtaSection from '../components/sections/dormir/CtaSection';
import RoomNavigation from '../components/sections/dormir/RoomNavigation';

export default function Dormir() {
  // États
  const [activeRoom, setActiveRoom] = useState('simple');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Données des chambres pour faciliter la maintenance
  const roomsData = {
    simple: {
      id: "simple",
      title: "Chambre simple",
      image: "/images/simple-room.jpg",
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
      id: "double",
      title: "Suite double",
      image: "/images/chambre-double.jpg",
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
      id: "superieur",
      title: "Suite supérieur",
      image: "/images/chambre-superieur.jpg",
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
      id: "omega",
      title: "Suite omega",
      image: "/images/suite-omega.jpg",
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

  // Convertir roomsData en tableau pour la navigation - avec useMemo pour optimiser
  const roomOptions = useMemo(() =>
    Object.values(roomsData).map(room => ({
      id: room.id || Object.keys(roomsData).find(key => roomsData[key] === room),
      title: room.title
    })),
    [roomsData]
  );

  // Fonction pour changer la chambre active
  const changeRoom = (roomId) => {
    setActiveRoom(roomId);
    window.history.pushState({}, '', `?room=${roomId}`);
  };

  // Effet pour récupérer le paramètre d'URL au chargement
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const roomParam = params.get('room');
    if (roomParam && roomsData[roomParam]) {
      setActiveRoom(roomParam);
    }
  }, [roomsData]);

  // Une meilleure façon de surveiller les changements du menu
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const header = document.querySelector('header');
          if (header) {
            setMenuOpen(header.classList.contains('menu-open'));
          }
        }
      });
    });

    const header = document.querySelector('header');
    if (header) {
      observer.observe(header, { attributes: true });
      // Vérification initiale
      setMenuOpen(header.classList.contains('menu-open'));
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Layout>
      <Head>
        <title>Dormir | Alpha Hotel</title>
        <meta name="description" content="Découvrez nos différentes options d'hébergement pour votre séjour à l'Alpha Hotel - chambres confortables et suites luxueuses" />
      </Head>

      <HeroSection />

      <RoomTabs
        activeRoom={activeRoom}
        changeRoom={changeRoom}
        menuOpen={menuOpen}
        roomOptions={roomOptions}
      />

      <div className="container mx-auto px-4 pb-16">
        <div className="mb-24">
          <RoomDisplay roomData={roomsData[activeRoom]} />
        </div>
      </div>

      <CtaSection />
    </Layout>
  );
}
