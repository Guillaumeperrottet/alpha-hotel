import React from 'react';

export default function CtaSection () {
  // Cette section est dédiée à l'appel à l'action pour réserver un séjour
  // Elle utilise une mise en page centrée avec des boutons d'action
  // Le texte met en avant la possibilité de réserver ou de contacter l'hôtel
return(
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
);
}
