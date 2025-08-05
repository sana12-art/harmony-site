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
      navigate(`/devis/${projet}`);
    } else {
      navigate('/devis');
    }
  };

  return (
    <div className="relative isolate pt-20 min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 py-10 flex flex-col-reverse lg:flex-row items-center justify-between min-h-[80vh] gap-10">
        {/* Texte */}
        <div className="w-full lg:w-1/2 text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Redécouvrez l'art de la construction avec <span className="text-sky-600">Harmony Bâtiment</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Rénover en toute confiance, bâtir avec excellence.<br />Faites votre demande de devis gratuitement.
          </p>

          {/* Desktop version */}
          <div className="hidden sm:flex relative w-full max-w-xl">
            <select
              className="w-full px-5 py-3 pr-40 border border-gray-300 rounded-full text-gray-700 appearance-none"
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
              className="absolute top-0 right-0 h-full px-4 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-all"
              onClick={handleClick}
            >
              Demander un devis
            </button>
          </div>

          {/* Mobile version */}
              {/* Mobile version */}
<div className="sm:hidden w-full mt-4">
  <div className="flex w-full border border-gray-300 rounded-full overflow-hidden bg-white h-14">
    <select
      className="flex-1 px-4 text-sm border-none outline-none text-gray-700 bg-white h-full"
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
      className="px-5 bg-sky-500 text-white text-sm font-medium hover:bg-sky-600 transition-all h-full"
      onClick={handleClick}
    >
      Demanderun devis 
    </button>
  </div>
</div>


        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src="/Image1.png"
            alt="Travaux Harmony Bâtiment"
            className="w-full max-w-[450px] h-auto rounded-xl shadow-xl object-contain"
          />
        </div>
      </div>
    </div>
  );
}
