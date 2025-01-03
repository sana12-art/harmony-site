import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

type ProjectDetails = {
  title: string
  category: string
  image: string
  description: string
  fullDescription?: string
  features?: string[]
  specifications?: {
    [key: string]: string
  }
  completionDate?: string
  location?: string
}

type ProjectModalProps = {
  isOpen: boolean
  onClose: () => void
  project: ProjectDetails
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:p-6">
                <div className="absolute right-0 top-0 pr-4 pt-4">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="w-full">
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="mt-6">
                      <Dialog.Title as="h3" className="text-2xl font-semibold leading-6 text-gray-900">
                        {project.title}
                      </Dialog.Title>
                      <div className="mt-2">
                        <span className="inline-flex items-center rounded-md bg-primary-light/10 px-2 py-1 text-xs font-medium text-primary-light">
                          {project.category}
                        </span>
                      </div>
                      <p className="mt-4 text-gray-600">
                        {project.fullDescription || project.description}
                      </p>
                      
                      {project.features && (
                        <div className="mt-6">
                          <h4 className="text-lg font-semibold text-gray-900">Key Features</h4>
                          <ul className="mt-4 list-disc pl-5 space-y-2">
                            {project.features.map((feature, index) => (
                              <li key={index} className="text-gray-600">{feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {project.specifications && (
                        <div className="mt-6">
                          <h4 className="text-lg font-semibold text-gray-900">Project Specifications</h4>
                          <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {Object.entries(project.specifications).map(([key, value]) => (
                              <div key={key} className="border-t border-gray-100 pt-4">
                                <dt className="font-medium text-gray-900">{key}</dt>
                                <dd className="mt-2 text-sm text-gray-600">{value}</dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      )}
                      
                      <div className="mt-8 flex justify-end">
                        <a
                          href="#contact"
                          onClick={onClose}
                          className="btn btn-primary"
                        >
                          Contact Us About This Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
} 