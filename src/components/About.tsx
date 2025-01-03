import { ShieldCheckIcon, TrophyIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const values = [
  {
    name: 'Excellence in Craftsmanship',
    description: 'We maintain the highest standards in masonry and construction, combining traditional techniques with modern innovation.',
    icon: TrophyIcon,
  },
  {
    name: 'Integrity & Trust',
    description: 'Our work is built on a foundation of honesty, transparency, and commitment to delivering what we promise.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Client Partnership',
    description: 'We believe in building lasting relationships with our clients through collaboration and exceptional service.',
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
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Masonic</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Since our establishment, we have been at the forefront of masonry and construction excellence. Our journey began with a simple mission: to create structures that stand the test of time while honoring the rich traditions of masonic craftsmanship.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Today, we're proud to be one of the leading construction companies, known for our meticulous attention to detail and unwavering commitment to quality. Our team combines decades of experience with innovative approaches to meet modern building challenges.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-900">
                <img
                  src="https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Construction site with workers"
                  className="h-full w-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-24">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Our Values</h3>
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