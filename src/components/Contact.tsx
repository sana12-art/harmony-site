import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  return (
    <div id="contact" className="relative isolate bg-white py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contactez-nous</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discutons ensemble de votre futur projet ou obtenez plus d’informations sur nos services.
Notre équipe se tient à votre disposition pour vous conseiller et vous accompagner.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Restons en contact</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Nous sommes là pour répondre à toutes vos questions concernant nos services.
N’hésitez pas à nous contacter par l’un des moyens suivants :
            </p>
            <dl className="mt-8 space-y-6">
              <div className="flex gap-x-4">
                <dt>
                  <PhoneIcon className="h-7 w-6 text-primary" aria-hidden="true" />
                </dt>
                <dd>
                  <p className="text-base leading-7 text-gray-600">01 82 28 11 66</p>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt>
                  <EnvelopeIcon className="h-7 w-6 text-primary" aria-hidden="true" />
                </dt>
                <dd>
                  <a href="mailto:contact@masonic.com" className="text-base leading-7 text-gray-600 hover:text-primary">
                    contact@harmonybatiment.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt>
                  <MapPinIcon className="h-7 w-6 text-primary" aria-hidden="true" />
                </dt>
                <dd>
                  <p className="text-base leading-7 text-gray-600">
                    62 RUE ANTONIN GEORGES BELIN, <br/>
                    95100 ARGENTEUIL

                   
                  </p>
                </dd>
              </div>
            </dl>
          </div>
          <form className="flex flex-col gap-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                Nom
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <button
              type="submit"
              className="block text-center bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 