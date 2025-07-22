import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // si tu utilises React Router

export default function Hero() {
   const [projet, setProjet] = useState('');
   const navigate = useNavigate(); // pour la redirection
    const handleClick = () => {
    if (projet) {
      navigate(`/devis?projet=${projet}`);
    } else {
      alert("Veuillez sélectionner un projet.");
    }
  };

  return (
    <div className="relative isolate pt-14 min-h-screen bg-white">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] 
                     -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-400 via-blue-500 to-blue-600 
                     opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Contenu principal en deux colonnes */}
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
        {/* Colonne gauche */}
        <div className="lg:w-1/2 text-left">
          <h1 className="text-4xl sm:text-4xl font-bold text-gray-900 mb-6">
            Redécouvrez l’art de la construction avec <span className="text-sky-600">Harmony Bâtiment</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Rénover en toute confiance, bâtir avec excellence.<br/>Faites votre demande de devis gratuitement.

          </p>
         

 <div className="relative w-full sm:w-96">
      <select
        className="w-full px-6 py-3 pr-32 border border-gray-300 rounded-full text-gray-700 appearance-none"
        value={projet}
        onChange={(e) => setProjet(e.target.value)}
      >
        <option value="">Sélectionnez un projet</option>
        <option value="maçonnerie">Préstations maçonnerie</option>
        <option value="technicoat">Préstations technicoat</option>
        <option value="revêtement">Préstations revêtement sol et mur</option>
        <option value="plomberie">Préstations plomberie & clim</option>
        <option value="nettoyage">Préstations de nettoyage</option>
      </select>

      <button
        className="absolute right-1 top-1 bottom-1 px-5 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition"
          onClick={() => {
            if (projet) navigate(`/devis/${projet}`);
          }}
      >
        Demander un devis
      </button>
    </div>




        </div>

      {/* Colonne droite : image illustrative */}
      <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center items-center">
        <img
          src="/Image1.png"
          alt="Travaux Harmony Bâtiment"
          className="w-full max-w-[500px] h-auto rounded-xl shadow-xl transition-transform duration-500 ease-in-out hover:scale-105 animate-fade-in object-contain sm:mt-10"
        />
      </div>
      </div>

      {/* Arrière-plan bas */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] 
                     -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-400 via-blue-500 to-blue-600 
                     opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
}
