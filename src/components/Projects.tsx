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
    title: 'Modern Office Complex',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A state-of-the-art office building featuring sustainable materials and innovative design.',
    fullDescription: 'This modern office complex represents the pinnacle of contemporary commercial architecture. The project seamlessly integrates sustainable building practices with cutting-edge design elements to create a workspace that promotes productivity and well-being.',
    features: [
      'LEED Platinum certified building',
      'Smart building management system',
      'Floor-to-ceiling windows for natural light',
      'Rooftop garden and recreational space',
      'Electric vehicle charging stations',
    ],
    specifications: {
      'Total Area': '250,000 sq ft',
      'Floors': '15 stories',
      'Completion': '2023',
      'Location': 'San Francisco, CA',
      'Parking': '200 underground spaces',
      'Energy Rating': 'A+',
    },
  },
  {
    title: 'Historic Building Restoration',
    category: 'Restoration',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Careful restoration of a 19th-century landmark, preserving its historical significance.',
    fullDescription: 'This meticulous restoration project breathed new life into a historic 19th-century landmark while preserving its architectural heritage. Our team combined traditional craftsmanship with modern preservation techniques to ensure the building\'s legacy continues for future generations.',
    features: [
      'Original facade restoration',
      'Modern safety upgrades',
      'Period-accurate materials',
      'Seismic retrofitting',
      'Historical detail preservation',
    ],
    specifications: {
      'Building Age': '150+ years',
      'Restoration Period': '18 months',
      'Historical Status': 'National Historic Landmark',
      'Original Use': 'Bank Building',
      'Current Use': 'Mixed-use Commercial',
      'Area': '45,000 sq ft',
    },
  },
  {
    title: 'Luxury Residential Complex',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'High-end residential development combining comfort with architectural excellence.',
    fullDescription: 'This luxury residential complex sets new standards in upscale living. Each residence is thoughtfully designed to provide the ultimate in comfort and sophistication, while the building\'s amenities create a resort-like atmosphere for residents.',
    features: [
      'Custom interior finishes',
      'Private balconies',
      'Smart home integration',
      'Concierge service',
      'Spa and fitness center',
    ],
    specifications: {
      'Units': '120 residences',
      'Floors': '25 stories',
      'Unit Sizes': '1,000-4,500 sq ft',
      'Completion': '2024',
      'Amenities': '25,000 sq ft',
      'Location': 'Downtown District',
    },
  },
  {
    title: 'Shopping Center Development',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Modern retail space designed for optimal customer experience and business efficiency.',
    fullDescription: 'This contemporary shopping center redefines the retail experience with its innovative design and customer-centric layout. The development incorporates sustainable practices and creates a vibrant community hub for shopping, dining, and entertainment.',
    features: [
      'Mixed retail spaces',
      'Food court and restaurants',
      'Underground parking',
      'Digital wayfinding system',
      'Outdoor shopping promenade',
    ],
    specifications: {
      'Retail Space': '500,000 sq ft',
      'Parking': '1,500 spaces',
      'Stores': '100+ retail units',
      'Restaurants': '15 dining options',
      'Opening': '2024',
      'Location': 'Suburban Center',
    },
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div id="projects" className="bg-white py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Projects</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore our portfolio of completed projects, showcasing our expertise in various construction domains.
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
                    Learn more <span aria-hidden="true">→</span>
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