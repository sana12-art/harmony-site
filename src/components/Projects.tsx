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
  title: 'Travaux réalisés sur un immeuble résidentiel à Reims',
  category: 'Résidentiel collectif',
  image: '/reims.jpg',
  description: 'Dans le cadre de ce projet à Reims, Harmony Bâtiment est intervenue sur plusieurs lots : maçonnerie, technicoat, finitions et nettoyage post-chantier.',
  fullDescription: 'Ce chantier nous a été confié en sous-traitance dans le cadre d’une opération menée par Cobat Constructions. Harmony Bâtiment est intervenue pour réaliser les travaux de maçonnerie, le traitement technicoat des surfaces, les finitions intérieures ainsi que le nettoyage final du bâtiment. Notre savoir-faire a permis de respecter les délais et les normes de qualité attendues.',
  features: [
    'Travaux de maçonnerie',
    'Traitement technicoat (ponçage, ragréage)',
    'Finitions intérieures (revêtements, peinture)',
    'Pose de menuiseries et équipements',
    'Nettoyage après chantier',
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
    title: 'Participation à un programme résidentiel de 288 logements – Aubervilliers',
    category: 'Résidentiel collectif',
    image: '/aubervilliers.jpg',
    description:'Ce projet de grande envergure à Aubervilliers a permis à Harmony Bâtiment d’intervenir sur plusieurs étapes clés de la construction de logements collectifs modernes et durables. Nos travaux ont porté sur la maçonnerie, les finitions intérieures, ainsi que le nettoyage post-chantier.',
    fullDescription:    'Le programme de 288 logements a été conduit par Cobat Constructions, avec la participation de sous-traitants spécialisés comme Harmony Bâtiment. Notre entreprise a assuré des interventions ciblées, en particulier sur les phases de gros œuvre, de finition et d’assainissement final du chantier, en respectant les normes environnementales et de sécurité en vigueur.',
    features: [
        'Travaux de maçonnerie pour les structures porteuses',
    'Pose des revêtements intérieurs (sols, murs)',
    'Finitions : peinture, plomberie, menuiserie',
    'Nettoyage complet avant livraison',
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
    title: 'Intervention sur un programme mixte à Champigny-sur-Marne',
    category: 'Mixte (Résidentiel & Commercial)',
    image: '/champigny.jpeg',
    description: 'Harmony Bâtiment a contribué à ce programme de 315 logements avec commerces intégrés, situé en centre-ville. Nos équipes sont intervenues sur les travaux de maçonnerie, certaines phases de construction, les finitions et le nettoyage post-chantier.',
    fullDescription: 'Ce projet d’envergure à Champigny-sur-Marne a été confié à plusieurs intervenants spécialisés. Harmony Bâtiment est intervenue en sous-traitance pour réaliser des prestations ciblées sur les ouvrages en maçonnerie, les finitions intérieures et extérieures, ainsi que le nettoyage final du bâtiment, en coordination avec les autres corps de métier.',
    features: [
    'Travaux de maçonnerie et élévation de structures',
    'Pose de revêtements muraux et sols',
    'Travaux de finition : peinture, menuiserie, équipements',
    'Nettoyage professionnel après chantier',
    ],
    specifications: {
      'Nombre de logements': '315',
    'Nombre d’étages': '7',
    'Surface des logements': 'de 40 à 120 m²',
    'Livraison prévue': '2024',
    'Espaces communs': '2 300 m² d’équipements haut de gamme',
    'Localisation': 'Quartier centre-ville, Champigny-sur-Marne (94)',
    },
  },
  {
  title: 'Rénovation complète de logements à Méru',
  category: 'Résidentiel collectif',
  image: '/meru.jpg',
  description: 'À Méru, nous avons réalisé un chantier de rénovation avec des prestations de maçonnerie, carrelage, finitions et nettoyage.',
  fullDescription: 'Ce projet confié par Cobat Constructions comprenait plusieurs interventions techniques. Nos équipes ont assuré les travaux de gros œuvre, la pose de carrelage dans les parties communes et privées, les finitions ainsi que le nettoyage de fin de chantier.',
  features: [
    'Maçonnerie générale',
    'Pose de carrelage dans les logements',
    'Finitions (peinture, enduits, revêtements)',
    'Nettoyage professionnel des surfaces',
  ],
  specifications: {
    'Surface rénovée :': '1 500 m²',
    'Durée du chantier :': '7 mois',
    'Zone d’intervention :': 'Méru (Oise)',
    'Type de bâtiment :': 'Résidentiel collectif',
    'Partenaire :': 'COBAT Constructions',
  },
},

  {
  title: 'Réhabilitation d’un immeuble à Voisins-le-Bretonneux',
  category: 'Résidentiel collectif',
  image: '/voisins.jpg',
  description: 'Harmony Bâtiment a participé à la réhabilitation d’un bâtiment à Voisins-le-Bretonneux en réalisant les lots maçonnerie, technicoat, finitions et nettoyage.',
  fullDescription: 'Ce chantier, sous la responsabilité de Cobat Constructions, a permis à notre équipe d’intervenir sur plusieurs postes : maçonnerie, technicoat pour la préparation des surfaces, finitions et nettoyage. Nous avons livré un bâtiment prêt à l’usage, dans les délais et avec une finition irréprochable.',
  features: [
    'Maçonnerie et gros œuvre',
    'Traitement technicoat des surfaces',
    'Finitions (peintures, revêtements)',
    'Nettoyage final du site',
  ],
  specifications: {
    'Surface totale :': '2 000 m²',
    'Durée du chantier :': '10 mois',
    'Zone d’intervention :': 'Voisins-le-Bretonneux (78)',
    'Type de bâtiment :': 'Résidentiel collectif',
    'Partenaire :': 'COBAT Constructions',
  },
},

{
  title: 'Travaux de finitions – Résidence à Chessy (77)',
  category: 'Résidentiel collectif',
  image: '/chessy.jpg',
  description:
    'À Chessy, Harmony Bâtiment a été mandatée pour réaliser les travaux de maçonnerie, construction, finitions et nettoyage sur un ensemble résidentiel de standing.',
  fullDescription:
    'Dans ce projet, notre entreprise est intervenue à chaque étape clé, de la préparation du terrain à la livraison finale. Grâce à notre coordination avec Cobat Constructions, les délais ont été tenus et les normes de qualité respectées, tant sur le plan technique qu’esthétique.',
  features: [
    'Montage des structures porteuses',
    'Pose de carrelage, faïence, peinture, menuiserie intérieure',
    'Nettoyage de fin de chantier dans tous les logements',
    'Respect des normes thermiques et acoustiques',
  ],
  specifications: {
    'Surface totale': '6 500 m²',
    'Nombre de logements': '121',
    'Livraison': '2025',
    'Localisation': 'Chessy, Seine-et-Marne (77)',
    'Partenaire': 'COBAT Constructions',
  },
},
{
  title: 'Travaux réalisés sur un immeuble résidentiel à Asnières-sur-Seine',
  category: 'Résidentiel collectif',
  image: '/asnieres.jpeg',
  description: 'Harmony Bâtiment a mené à bien un chantier à Asnières-sur-Seine comprenant maçonnerie, carrelage, finitions et nettoyage.',
  fullDescription: 'Dans le cadre de ce projet en sous-traitance pour Cobat Constructions, nos équipes sont intervenues sur plusieurs postes clés : travaux de maçonnerie, pose de carrelage, finitions et nettoyage post-chantier. Notre expertise a garanti un rendu soigné et conforme aux attentes.',
  features: [
    'Travaux de maçonnerie',
    'Pose de carrelage',
    'Finitions intérieures (peinture, revêtements)',
    'Nettoyage de fin de chantier',
  ],
  specifications: {
    'Surface construite :': 'Environ 1 200 m²',
    'Durée du chantier :': '8 mois',
    'Zone d’intervention :': 'Asnières-sur-Seine (92)',
    'Type de bâtiment :': 'Résidentiel collectif',
    'Partenaire :': 'COBAT Constructions',
  },
},

{
  title: 'Travaux réalisés sur un immeuble résidentiel à Colombes',
  category: 'Résidentiel collectif',
  image: '/colombes.jpg',
  description: 'Dans ce projet à Colombes, Harmony Bâtiment est intervenue pour des travaux de maçonnerie, carrelage, finitions et nettoyage.',
  fullDescription: 'En sous-traitance pour Cobat Constructions, notre société a réalisé des prestations de maçonnerie, pose de carrelage, finitions diverses et nettoyage de fin de chantier. Le respect des délais et des standards de qualité a été au cœur de notre intervention.',
  features: [
    'Travaux de maçonnerie',
    'Pose de carrelage',
    'Finitions intérieures (revêtements, peinture)',
    'Nettoyage après chantier',
  ],
  specifications: {
    'Surface construite :': 'Environ 1 800 m²',
    'Durée du chantier :': '9 mois',
    'Zone d’intervention :': 'Colombes (Hauts-de-Seine)',
    'Type de bâtiment :': 'Logements collectifs',
    'Partenaire :': 'COBAT Constructions',
  },
}



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