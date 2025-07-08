const testimonials = [
  {
    content: "Harmony Bâtiment est un partenaire de confiance. Leur professionnalisme et la qualité d’exécution sont toujours au rendez-vous, même sur des projets exigeants.",
    author: "Group Povataj (Cobat Constructions)",
    role: "",
    company: "",
  },
  {
    content: "Nous faisons régulièrement appel à Harmony Bâtiment pour des travaux de finition et de nettoyage après chantier. Leur sérieux, leur ponctualité et leur réactivité font toute la différence",
    author: "Nexity Urbaine",
    role: "",
    company: "",
  },
  {
    content: "Harmony Bâtiment nous accompagne sur plusieurs projets de construction et de rénovation. Leur capacité à respecter les délais et leur rigueur sur le terrain sont très appréciées.",
    author: "BJF Construction",
    role: "",
    company: "",
  },
]

export default function Testimonials() {
  return (
    <div id="testimonials" className="bg-gray-50 py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ils nous font confiance
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Plusieurs acteurs majeurs du secteur nous confient régulièrement leurs chantiers.
            Voici ce qu’ils disent de notre collaboration.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="flex flex-col justify-between bg-white p-6 shadow-sm rounded-2xl"
            >
              <div>
                <div className="flex gap-x-3">
                  <div className="min-w-0">
                    <p className="text-lg font-semibold leading-6 text-gray-900">{testimonial.author}</p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      {testimonial.role} {testimonial.company}
                    </p>
                  </div>
                </div>
                <blockquote className="mt-6 text-base italic leading-7 text-gray-700">
                  "{testimonial.content}"
                </blockquote>
              </div>
              <div className="mt-8 flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
