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
    title: 'Nettoyage après chantier',
    category: 'Nettoyage',
    image: '/public/nettoyage.jpg',
    description: 'Service de nettoyage professionnel complet après travaux : enlèvement des gravats, dépoussiérage, lavage des surfaces.',
    fullDescription: 'Harmony Bâtiment propose un service de nettoyage après travaux complet et professionnel, destiné aux particuliers, entreprises et chantiers de construction. Nous intervenons à la fin de chaque projet pour assurer un environnement propre, sain et prêt à l’usage.',
    features: [
      'Évacuation des gravats et déchets',
      'Nettoyage en profondeur des sols, murs, vitres',
      'Dépoussiérage des surfaces et équipements',
      'Utilisation de produits professionnels écologiques',
      'Équipe formée aux normes de sécurité',
    ],
    specifications: {
      'Surface moyenne traitée :': 'jusqu’à 5 000 m²',
      'Temps d’intervention': '1 à 3 jours selon le chantier',
      'Zone d’intervention': 'Île-de-France et alentours',
      'Fréquence': ' Intervention ponctuelle ou régulière',
      'Certification': 'Équipe qualifiée, assurance professionnelle incluse',
    },
  },
  {
    title: 'Restauration d’un bâtiment historique',
    category: 'Restauration',
    image: '/public/historique.jpg',
    description: 'Travaux de rénovation minutieux d’un édifice du XIXe siècle, avec respect du patrimoine architectural.',
    fullDescription: 'Ce projet de restauration méticuleux a redonné vie à un bâtiment emblématique du XIXe siècle tout en préservant son cachet architectural d’origine. Notre équipe a allié le savoir-faire traditionnel aux techniques modernes de préservation pour transmettre ce patrimoine aux générations futures.',
    features: [
      'Restauration complète de la façade d’origine',
      'Mise aux normes de sécurité actuelles',
      'Matériaux fidèles à l’époque',
      'Renforcement structurel antisismique',
      'Valorisation des détails architecturaux historiques',
    ],
    specifications: {
      'Âge du bâtiment': 'plus de 150 ans',
      'Durée des travaux': ' 18 mois',
      'Statut patrimonial': 'Monument historique classé',
      'Usage initial ': 'Ancienne banque',
      'Usage actuel': ' Immeuble commercial à usage mixte',
      'Surface totale': '4 200 m²',
    },
  },
  {
    title: ' Résidence de standing',
    category: 'Résidentiel',
    image: '/public/residentiel.jpg',
    description: 'Développement d’un complexe résidentiel haut de gamme alliant confort, esthétisme et qualité de construction.',
    fullDescription: 'Ce complexe résidentiel haut de gamme redéfinit les standards du confort et de l’élégance. Chaque logement a été conçu avec soin pour offrir un cadre de vie luxueux, moderne et fonctionnel, tout en bénéficiant d’espaces communs dignes d’un hôtel de prestige.',
    features: [
      'Finitions intérieures personnalisées',
      'Balcons privés avec vue panoramique',
      'Service de conciergerie',
      'Concierge service',
      'Espace bien-être avec spa et salle de sport',
    ],
    specifications: {
      'Nombre de logements ': '120 ',
      'Étages': '25',
      'Surface des logements': 'de 100 à 420 m²',
      'Livraison prévue ': '2024',
      'Espaces communs': '2 300 m² d’équipements haut de gamme',
      'Localisation': 'Quartier centre-ville',
    },
  },
  {
    title: 'Immeuble de bureaux moderne',
    category: 'Commercial',
    image: '/public/immeuble.jpg',
    description: 'Construction d’un immeuble de bureaux utilisant des matériaux durables et un design contemporain',
    fullDescription: 'Cet immeuble de bureaux de dernière génération redéfinit les standards des espaces de travail professionnels. Conçu pour favoriser la productivité, le bien-être et l’innovation, il intègre des solutions durables et des services haut de gamme pour les entreprises modernes.',
    features: [
      'Espaces modulables pour bureaux',
      'Salle de conférence et zones de coworking',
      'Parking souterrain sécurisé',
      'Gestion intelligente du bâtiment (domotique)',
      'Espaces verts et terrasses accessibles',
    ],
    specifications: {
      'Surface totale': '46 000 m²',
      'Capacité de stationnement': '1 500 places',
      'Bureaux': '100+ espaces professionnels',
      'Services sur site ': '15 restaurants & cafétérias',
      'Livraison': '2024',
      'Localisation ': 'Quartier d’affaires en périphérie',
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