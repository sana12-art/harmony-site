import { useState } from 'react'
import ProjectModal from './ProjectModal'

type Project = {
  title: string
  category: string
  image: string
  description: string
  fullDescription: string
  features: string[]
  specifications: {
    [key: string]: string
  }
}

const projects: Project[] = [
  {
    title: 'Réhabilitation complète d’un immeuble à Reims',
    category: 'Résidentiel collectif',
    image: '/reims.jpg',
    description: 'Ce projet de réhabilitation lourde a été réalisé sur un immeuble ancien situé à Reims. Il comprenait des travaux de démolition intérieure, de maçonnerie structurelle, ainsi que la création de nouveaux planchers et ouvertures pour moderniser l’ensemble.',
    fullDescription: 'Ce projet de Reims illustre l’expertise d’Harmony Bâtiment dans les travaux de construction résidentielle. L’opération a compris toutes les étapes clés : préparation du site, fondations, élévation des structures, revêtements intérieurs et extérieurs, finitions et nettoyage post-chantier.',
    features: [
        'Travaux de maçonnerie et élévation en béton armé',
        'Construction complète du gros œuvre au second œuvre',
        'Préparation et nivellement du terrain',
        'Pose des revêtements intérieurs (sols, murs)',
        'Finitions soignées : peinture, menuiserie, équipements',
        'Nettoyage complet en fin de chantier',
    ],
    specifications: {
      'Surface construite :': 'Plus de 2 500 m²',
    'Durée du chantier :': '12 mois',
    'Zone d’intervention :': 'Reims (Grand Est)',
    'Type de bâtiment :': 'Logements collectifs',
    'Partenaire :': 'COBAT Constructions',
    },
  },
  {
    title: 'Construction de 288 logements – Aubervilliers (93)',
    category: 'Résidentiel collectif',
    image: '/aubervilliers.jpg',
    description: 'Ce projet d’envergure mené à Aubervilliers a consisté à construire un ensemble résidentiel de 288 logements. Nos équipes sont intervenues à chaque étape : de la préparation du site jusqu’aux finitions, en assurant un haut niveau de qualité et de coordination.',
    fullDescription:'Situé dans une zone urbaine en pleine expansion, ce programme de logements collectifs a été conçu pour répondre aux besoins croissants en habitat de qualité. Le projet intègre des solutions durables, des espaces communs fonctionnels et un agencement optimisé pour le confort des résidents.',
    features: [
        '288 logements répartis en plusieurs bâtiments',
    'Conception conforme aux normes RT 2012 / RE2020',
    'Espaces verts et zones de convivialité intégrés',
    'Matériaux durables et éco-responsables',
    'Parking souterrain sécurisé',
    ],
    specifications: {
       'Type de bâtiment': 'Résidentiel collectif',
    'Durée des travaux': '24 mois',
    'Surface totale': '22 000 m²',
    'Nombre de logements': '288',
    'Livraison': '2023',
    'Localisation': 'Aubervilliers, Seine-Saint-Denis (93)',
    },
  },
  {
    title: 'Construction de 69 logements – Champigny-sur-Marne (94)',
    category: 'Mixte (Résidentiel & Commercial)',
    image: '/champigny.jpeg',
    description: 'Dans ce projet situé à Champigny-sur-Marne, nous avons participé à la réalisation de 69 logements répartis sur plusieurs bâtiments.',
    fullDescription: 'Situé au cœur du quartier centre-ville, ce programme mixte allie habitations confortables et commerces de proximité. Les logements bénéficient de finitions soignées, d’espaces privés agréables et d’équipements communs haut de gamme, répondant aux exigences actuelles de qualité de vie.',
    features: [
      'Finitions intérieures personnalisées',
    'Balcons privés avec vue panoramique',
    'Service de conciergerie',
    'Espace bien-être avec spa et salle de sport',
    'Commerces intégrés en rez-de-chaussée',
    ],
    specifications: {
      'Nombre de logements': '69',
    'Nombre d’étages': '7',
    'Surface des logements': 'de 40 à 120 m²',
    'Livraison prévue': '2024',
    'Espaces communs': '2 300 m² d’équipements haut de gamme',
    'Localisation': 'Quartier centre-ville, Champigny-sur-Marne (94)',
    },
  },
  {
    title: 'Construction de 64 logements – Méru (60)',
    category: 'Résidentiel collectif',
    image: '/meru.jpg',
    description: 'À Méru, dans l’Oise, nous avons collaboré à la construction de 64 logements pour le promoteur Nexity. Ce projet a mobilisé nos équipes sur toutes les étapes du chantier, depuis la préparation du terrain jusqu’aux finitions et au nettoyage final, en assurant qualité, sécurité et respect des délais.',
    fullDescription: 'Ce programme résidentiel moderne offre des logements fonctionnels et confortables, conçus pour répondre aux attentes des familles et des particuliers. Le projet intègre des espaces verts, des parkings sécurisés, et des équipements collectifs adaptés au bien-être des résidents.',
    features: [
      'Logements lumineux avec grandes ouvertures',
    'Espaces verts et terrasses accessibles',
    'Parking souterrain sécurisé',
    'Matériaux durables et isolation performante',
    'Espaces communs conviviaux et sécurisés',
    ],
    specifications: {
      'Nombre de logements': '64',
    'Surface totale': '7 500 m²',
    'Capacité de stationnement': '128 places',
    'Livraison': '2024',
    'Localisation': 'Méru, Oise (60)',
    },
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div id="projects" className="bg-white py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nos projets</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Découvrez notre portfolio de réalisations, illustrant notre savoir-faire dans différents domaines de la construction et de la rénovation.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {projects.map((project) => (
            <article 
              key={project.title} 
              className="relative isolate flex flex-col gap-8 lg:flex-row cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div>
                <div className="flex items-center gap-x-4 text-xs">
                  <span className="text-gray-500">{project.category}</span>
                </div>
                <div className="group relative max-w-xl">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    <span className="absolute inset-0" />
                    {project.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">{project.description}</p>
                </div>
                <div className="mt-6">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedProject(project)
                    }}
                    className="text-sm font-semibold leading-6 text-primary hover:text-primary-light"
                  >
                    En savoir plus <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </div>
  )
} 