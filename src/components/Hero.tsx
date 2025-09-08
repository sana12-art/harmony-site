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
    <section className="relative bg-white pt-28 lg:pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16 py-10 lg:py-16">
        
        {/* Texte */}
        <div className="w-full lg:w-1/2 text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-snug">
            Redécouvrez l'art de la construction avec{" "}
            <span className="text-sky-600">Harmony Bâtiment</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            Rénover en toute confiance, bâtir avec excellence<br />
            Faites votre demande de devis gratuitement.
          </p>

          {/* Desktop version */}
          <div className="hidden sm:flex relative w-full max-w-lg">
            <select
              className="w-full px-5 py-3 pr-40 border border-gray-300 rounded-full text-gray-700 appearance-none focus:ring-2 focus:ring-sky-400 focus:outline-none"
              value={projet}
              onChange={handleChange}
            >
              <option value="">- Sélectionnez un projet -</option>
              <option value="technicoat">Prestations Technicoat</option>
              <option value="maçonnerie">Prestations Maçonnerie</option>
              <option value="nettoyage">Prestations Nettoyage</option>
              <option value="revêtement">Prestations Revêtement Sol et Mur</option>
            </select>

            <button
              className="absolute top-0 right-0 h-full px-5 rounded-full bg-sky-500 text-white font-medium hover:bg-sky-600 transition-all"
              onClick={handleClick}
            >
              Demander un devis
            </button>
          </div>

     {/* Mobile version */}
<div className="sm:hidden w-full mt-6">
  <div className="flex w-full items-center border border-gray-300 rounded-full bg-white shadow-sm">
    <select
      className="flex-1 px-3 text-sm text-gray-700 bg-white h-12 outline-none appearance-none rounded-l-full border border-gray-300"
      value={projet}
      onChange={handleChange}
      autoCorrect="off"
      autoCapitalize="none"
      spellCheck={false}
    >
      <option value="">- Sélectionnez un projet -</option>
      <option value="technicoat">Prestations Technicoat</option>
      <option value="maçonnerie">Prestations Maçonnerie</option>
      <option value="nettoyage">Prestations Nettoyage</option>
      <option value="revêtement">Prestations Revêtement Sol et Mur</option>
    </select>

    <button
      className="h-12 px-5 bg-sky-500 text-white text-sm font-medium hover:bg-sky-600 transition-all rounded-r-full whitespace-nowrap"
      onClick={handleClick}
    >
      Devis
    </button>
  </div>
</div>

        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src="/Image1.png"
            alt="Travaux Harmony Bâtiment"
            className="w-full max-w-[420px] lg:max-w-[480px] h-auto rounded-xl shadow-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
}
