import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function ChoixTypeProjet() {
  const query = useQuery();
  const projet = query.get('projet');

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Projet sélectionné : {projet}</h2>
      {/* À suivre : afficher types de projets + formulaire */}
    </div>
  );
}
