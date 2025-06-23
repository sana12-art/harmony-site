import { ShieldCheckIcon, TrophyIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const values = [
  {
    name: 'Excellence du savoir-faire',
    description: 'Nous nous engageons à fournir un travail de qualité, alliant techniques traditionnelles et innovations modernes dans tous nos projets de construction et de rénovation.',
    icon: TrophyIcon,
  },
  {
    name: 'Intégrité et confiance',
    description: 'Nos réalisations reposent sur la transparence, l’honnêteté et le respect de nos engagements envers nos clients.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Partenariat avec nos clients',
    description: 'Nous privilégions une relation durable avec chaque client, fondée sur l’écoute, la collaboration et un service de qualité.',
    icon: UserGroupIcon,
  },
]

export default function About() {
  return (
    <div id="about" className="relative bg-gray-50 py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">À propos de nous</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
Harmony Bâtiment est une entreprise familiale spécialisée dans les travaux de finition, avec un savoir-faire particulier en technicoat, ragréage, ponçage et maçonnerie. Nous intervenons également sur les autres travaux d’achèvement et de finition des bâtiments, comme les revêtements de sols et murs, ainsi que le nettoyage.              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
Animée par des valeurs familiales solides et un profond engagement, notre société met un point d’honneur à garantir la qualité de ses réalisations tout en respectant scrupuleusement les délais convenus.              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-900">
                <img
                  src="/propos.png"
                  alt="Construction site with workers"
                  className="h-full w-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-24">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Nos Valeurs</h3>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <div key={value.name} className="relative bg-white p-6 shadow-sm rounded-2xl">
                  <dt>
                    <value.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    <p className="mt-4 text-lg font-semibold leading-7 text-gray-900">{value.name}</p>
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{value.description}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 