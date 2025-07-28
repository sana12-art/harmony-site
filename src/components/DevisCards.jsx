import { useNavigate } from 'react-router-dom';

const projets = [
  { id: 'technicoat', nom: 'Technicoat', image: '/technicoat.png' },
  { id: 'maçonnerie', nom: 'Maçonnerie', image: '/maçonnerie.png' },
  { id: 'nettoyage', nom: 'Nettoyage', image: '/nettoyage.png' },
  { id: 'revêtement', nom: 'Revêtement sol et mur', image: '/revetement.png' },
];

export default function DevisCards() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/devis/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-20 pt-[200px]">
      <h2 className="text-3xl font-bold text-center mb-10">
        Quel type de projet souhaitez-vous ?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projets.map((projet) => (
          <div
            key={projet.id}
            onClick={() => handleClick(projet.id)}
            className="relative cursor-pointer border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4"
          >
            {/* Image icône en haut à gauche */}
            <img
              src={projet.image}
              alt={projet.nom}
              className="w-12 h-12 object-contain absolute top-4 left-4"
            />
            {/* Contenu avec espace pour l’icône */}
            <div className="pt-20 text-center font-semibold text-gray-800">
              {projet.nom}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
