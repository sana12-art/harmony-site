import { BuildingOffice2Icon, WrenchScrewdriverIcon, HomeModernIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Commercial Construction',
    description: 'Expert construction services for commercial buildings, offices, and retail spaces with a focus on durability and functionality.',
    icon: BuildingOffice2Icon,
  },
  {
    name: 'Renovation & Restoration',
    description: 'Specialized restoration services for historic buildings and modern renovation projects that preserve architectural integrity.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Residential Projects',
    description: 'Custom home construction and residential developments that combine traditional craftsmanship with modern living standards.',
    icon: HomeModernIcon,
  },
  {
    name: 'Project Consultation',
    description: 'Professional consultation services for construction projects, including planning, budgeting, and project management.',
    icon: PresentationChartLineIcon,
  },
]

export default function Services() {
  return (
    <div id="services" className="py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a comprehensive range of construction and masonry services, combining traditional craftsmanship with modern techniques.
          </p>
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
                      Learn more <span aria-hidden="true">→</span>
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