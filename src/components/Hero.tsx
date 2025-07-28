import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const [projet, setProjet] = useState('');
  const navigate = useNavigate();

const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProjet = e.target.value;
    setProjet(selectedProjet);
    if (selectedProjet) {
      navigate(`/devis/${selectedProjet}`);
    }
  };

  const handleClick = () => {
    if (projet) {
      navigate(`/devis/${projet}`); // Redirige vers l'étape suivante
    } else {
      navigate('/devis'); // Redirige vers la page des cartes
    }
  };

  return (
    <div className="relative isolate pt-14 min-h-screen bg-white">
      {/* Contenu principal */}
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
        {/* Texte */}
        <div className="lg:w-1/2 text-left">
          <h1 className="text-4xl sm:text-4xl font-bold text-gray-900 mb-6">
            Redécouvrez l’art de la construction avec <span className="text-sky-600">Harmony Bâtiment</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Rénover en toute confiance, bâtir avec excellence.<br />Faites votre demande de devis gratuitement.
          </p>

          {/* Sélecteur + bouton */}
          <div className="relative w-full max-w-xl">
            <select
              className="w-full px-6 py-3 pr-40 border border-gray-300 rounded-full text-gray-700 appearance-none"
              value={projet}
              onChange={handleChange}
            >
              <option value="">- Sélectionnez un projet -</option>
              <option value="technicoat">Prestations technicoat</option>
              <option value="maçonnerie">Prestations maçonnerie</option>
              <option value="nettoyage">Prestations de nettoyage</option>
              <option value="revêtement">Prestations revêtement sol et mur</option>
            </select>

            <button
              className="absolute top-1 right-1 bottom-1 px-6 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-all"
              onClick={handleClick}
            >
              Demander un devis
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center items-center">
          <img
            src="/Image1.png"
            alt="Travaux Harmony Bâtiment"
            className="w-full max-w-[500px] h-auto rounded-xl shadow-xl object-contain sm:mt-10"
          />
        </div>
      </div>
    </div>
  );
}
