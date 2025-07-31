import { useParams, useNavigate } from "react-router-dom";
import servicesParProjet from "../data/servicesParProjet";

function DevisTypes() {
  const { projet } = useParams();
  const navigate = useNavigate();
  const services = servicesParProjet[projet] || [];

  return (
  <div className="p-6 mt-24"> {/* Ajout de mt-24 ici */}
    <h1 className="text-2xl font-bold mb-4">Choisissez un service pour : {projet}</h1>
    {services.length === 0 ? (
      <p>Aucun service disponible pour ce projet.</p>
    ) : (
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <li
            key={index}
            className="cursor-pointer p-4 border border-gray-300 rounded hover:bg-gray-100"
            onClick={() => navigate(`/devis/${projet}/${service.toLowerCase().replace(/\s+/g, "-")}`)}
          >
            {service}
          </li>
        ))}
      </ul>
    )}
  </div>
);

}

export default DevisTypes;