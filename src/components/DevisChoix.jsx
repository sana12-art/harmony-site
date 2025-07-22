import { useSearchParams, useNavigate } from "react-router-dom";
import servicesParProjet from "../data/servicesParProjet";

/**
 * @typedef {Object} Service
 * @property {string} id
 * @property {string} nom
 */

const DevisChoix = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const projet = searchParams.get("projet");

  /** @type {Service[]} */
  const services = (projet && servicesParProjet[projet]) || [];

  if (!projet || services.length === 0) {
    return <div className="p-8">Projet introuvable ou aucun service disponible.</div>;
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Choisissez un service pour : {projet}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="cursor-pointer border p-4 rounded-lg shadow hover:bg-gray-100 transition"
            onClick={() => navigate(`/devis/${projet}/${service.id}`)}
          >
            {service.nom}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevisChoix;
