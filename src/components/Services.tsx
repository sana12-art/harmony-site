import { useState } from 'react'
import {
  BuildingOffice2Icon,
  WrenchScrewdriverIcon,
  HomeModernIcon,
  PresentationChartLineIcon,
} from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Maçonnerie',
    description:
      'Un projet de qualité nécessite un enchaînement rationnel et parfait de travaux. La finition reste une étape indispensable.',
    icon: BuildingOffice2Icon,
    images: ['/maconnerie1.jpg', '/maconnerie2.jpg'],
    details:
      "Nos travaux de maçonnerie garantissent solidité et durabilité, avec un savoir-faire traditionnel et moderne adapté à chaque projet.",
  },
  {
    name: 'Technicoat',
    description:
      'Nous intervenons en tous types de services de technicoat, à savoir la finition, le ragréage et le ponçage.',
    icon: WrenchScrewdriverIcon,
    images: ['/technicoat1.jpg', '/technicoat2.jpg'],
    details:
      "Le technicoat permet de préparer parfaitement les surfaces pour garantir un rendu impeccable, alliant performance et esthétique.",
  },
  {
    name: 'Revêtement sol & mur',
    description:
      'Nous sommes spécialisés en revêtement de sol et mur : carrelage, parquet, papier-peint, peinture..',
    icon: HomeModernIcon,
    images: ['/revetement1.jpg', '/revetement2.jpg'],
    details:
      "Nous posons tous types de revêtements avec précision, en valorisant l'esthétique et la durabilité des espaces intérieurs.",
  },
  {
    name: 'Nettoyage',
    description:
      'Nous nous occupons de tous types de nettoyage, que ce soit de fin de chantier ou de bureaux.',
    icon: PresentationChartLineIcon,
    images: ['/nettoyage.jpg', '/nettoyage1.jpg'],
    details:
      "Un nettoyage professionnel garantit un espace sain et agréable, essentiel pour la satisfaction finale du client.",
  },
]

export default function Services() {
  // Tableau d'états pour afficher/masquer détails par service
  const [showDetails, setShowDetails] = useState(
    new Array(services.length).fill(false)
  )

  const toggleDetails = (index) => {
    const newShowDetails = [...showDetails]
    newShowDetails[index] = !newShowDetails[index]
    setShowDetails(newShowDetails)
  }

  return (
    <div id="services" className="py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nous proposons une grande variété de services professionnels pour
            répondre à vos besoins.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={service.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon
                    className="h-5 w-5 flex-none text-primary"
                    aria-hidden="true"
                  />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-6">
                    <button
                      onClick={() => toggleDetails(index)}
                      className="text-sm font-semibold leading-6 text-primary hover:underline"
                      aria-expanded={showDetails[index]}
                      aria-controls={`service-details-${index}`}
                    >
                      {showDetails[index] ? 'Masquer les détails' : 'En savoir plus'}{' '}
                      <span aria-hidden="true">→</span>
                    </button>
                  </p>

                  {showDetails[index] && (
                    <div
                      id={`service-details-${index}`}
                      className="mt-4 space-y-4"
                    >
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
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
