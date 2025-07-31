import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BuildingOffice2Icon,
  WrenchScrewdriverIcon,
  HomeModernIcon,
  PresentationChartLineIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Maçonnerie',
    value: 'maçonnerie',
    description: 'Un projet de qualité nécessite un enchaînement rationnel et parfait de travaux...',
    icon: BuildingOffice2Icon,
    images: ['/maconnerie1.jpg', '/maconnerie2.jpg'],
    details: 'Nos travaux de maçonnerie garantissent solidité et durabilité...',
  },
  {
    name: 'Technicoat',
    value: 'technicoat',
    description: 'Nous intervenons en tous types de services de technicoat...',
    icon: WrenchScrewdriverIcon,
    images: ['/technicoat1.jpg', '/technicoat2.jpg'],
    details: 'Le technicoat permet de préparer parfaitement les surfaces...',
  },
  {
    name: 'Revêtement sol & mur',
    value: 'revêtement',
    description: 'Nous sommes spécialisés en revêtement de sol et mur...',
    icon: HomeModernIcon,
    images: ['/revetement1.jpg', '/revetement2.jpg'],
    details: 'Nous posons tous types de revêtements avec précision...',
  },
  {
    name: 'Nettoyage',
    value: 'nettoyage',
    description: 'Nous nous occupons de tous types de nettoyage...',
    icon: PresentationChartLineIcon,
    images: ['/nettoyage.jpg', '/nettoyage1.jpg'],
    details: 'Un nettoyage professionnel garantit un espace sain...',
  },
];

export default function Services() {
  const [showDetails, setShowDetails] = useState(new Array(services.length).fill(false));
  const navigate = useNavigate();

  const toggleDetails = (index: number) => {
    const newShowDetails = [...showDetails];
    newShowDetails[index] = !newShowDetails[index];
    setShowDetails(newShowDetails);
  };

  const handleDemandeDevis = (value: string) => {
    navigate(`/devis/${value}`);
  };

  return (
    <div id="services" className="py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nous proposons une grande variété de services professionnels pour répondre à vos besoins.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4 items-stretch">
            {services.map((service, index) => (
              <div key={service.name} className="flex flex-col h-full">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-col justify-between flex-1 h-full text-base leading-7 text-gray-600">
                  <div className="flex-auto">
                    <p>{service.description}</p>
                    {showDetails[index] && (
                      <div className="mt-4 space-y-4">
                        <div className="flex flex-wrap gap-4">
                          {service.images.map((src, imgIndex) => (
                            <img
                              key={imgIndex}
                              src={src}
                              alt={`${service.name} chantier ${imgIndex + 1}`}
                              className="w-40 rounded-md object-cover"
                            />
                          ))}
                        </div>
                        <p className="mt-2 text-gray-700">{service.details}</p>
                      </div>
                    )}
                  </div>

                  {/* Bouton "Voir plus / moins" */}
                  <button
                    className="mt-4 text-sm text-sky-600 hover:underline"
                    onClick={() => toggleDetails(index)}
                  >
                    {showDetails[index] ? 'Réduire' : 'Voir plus'}
                  </button>

                  {/* Bouton "Demander un devis" */}
                  <button
                    onClick={() => handleDemandeDevis(service.value)}
                    className="mt-4 py-2 px-4 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-all"
                  >
                    Demander un devis
                  </button>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
