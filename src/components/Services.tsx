import { BuildingOffice2Icon, WrenchScrewdriverIcon, HomeModernIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Maçonnerie	',
    description: 'Un projet de qualité nécessite un enchaînement rationnel et parfait de travaux. La finition reste une étape indispensable.',
    icon: BuildingOffice2Icon,
  },
  {
    name: 'Technicoat	',
    description: 'Nous intervenons en tous types de services de technicoat, à savoir la finition, le ragréage et le ponçage.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Revêtement sol & mur',
    description: 'Nous sommes spécialisés en revêtement de sol et mur : carrelage, parquet, papier-peint, peinture..',
    icon: HomeModernIcon,
  },
  {
    name: 'Nettoyage',
    description: 'Nous nous occupons de tous types de nettoyage, que ce soit de fin de chantier ou de bureaux.',
    icon: PresentationChartLineIcon,
  },
]

export default function Services() {
  return (
    <div id="services" className="py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nos Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
Nous proposons une grande variété de services professionnels pour répondre à vos besoins.

Nous promettons de vous servir avec le sourire, afin de vous satisfaire pleinement.           </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-6">
                    <a href="#contact" className="text-sm font-semibold leading-6 text-primary">
                      En savoir plus <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 