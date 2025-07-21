import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProjetSearchBar() {
  const [selectedProjet, setSelectedProjet] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (selectedProjet) {
      navigate(`/choix-type?projet=${selectedProjet}`);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="relative w-full max-w-md">
        <select
          className="w-full py-3 px-4 pr-28 border border-gray-300 rounded-full focus:outline-none"
          value={selectedProjet}
          onChange={(e) => setSelectedProjet(e.target.value)}
        >
          <option value="">Choisissez un projet</option>
          <option value="construction">Construction</option>
          <option value="renovation">Rénovation</option>
          <option value="nettoyage">Nettoyage</option>
        </select>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-blue-600 text-white py-2 px-5 rounded-full"
          onClick={handleSearch}
        >
          Chercher
        </button>
      </div>
    </div>
  );
}
