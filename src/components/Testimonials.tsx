import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const testimonials = [
  {
    content:
      "Harmony Bâtiment est un partenaire de confiance. Leur professionnalisme et la qualité d’exécution sont toujours au rendez-vous.",
    author: "Group Povataj",
    logo: "G",
  },
  {
    content:
      "Nous faisons régulièrement appel à Harmony Bâtiment pour des travaux de finition et de nettoyage après chantier.",
    author: "Nexity Urbaine",
    logo: "N",
  },
  {
    content:
      "Leur capacité à respecter les délais et leur rigueur sur le terrain sont très appréciées.",
    author: "BJF Construction",
    logo: "B",
  },
  {
    content:
      "Collaboration fluide et professionnelle. Un excellent partenaire pour nos chantiers.",
    author: "LTE",
    logo: "L",
  },
  {
    content:
      "Une équipe fiable et réactive. Harmony Bâtiment a su répondre à nos besoins avec efficacité.",
    author: "FWPT VINCI",
    logo: "F",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <div id="testimonials" className="bg-gray-50 py-24 sm:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ils nous font confiance
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Plusieurs acteurs majeurs du secteur nous confient régulièrement leurs chantiers.
            Voici ce qu’ils disent de notre collaboration.
          </p>
        </div>

        {/* Flèches gauche/droite */}
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full border hover:bg-gray-100"
        >
          <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full border hover:bg-gray-100"
        >
          <ChevronRightIcon className="h-6 w-6 text-gray-600" />
        </button>

        {/* Témoignages scrollables */}
        <div
          ref={scrollRef}
          className="mt-16 flex gap-8 overflow-x-auto scrollbar-hide px-2 scroll-smooth"
          style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-[350px] flex-shrink-0 bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between"
            >
              <blockquote className="italic text-gray-700 text-base">
                “{testimonial.content}”
              </blockquote>
              <div className="mt-6 flex items-center gap-x-4">
               <div className="flex h-12 w-12 items-center justify-center rounded-full text-white font-bold text-lg" style={{ backgroundColor: '#009FE3' }}>
  {testimonial.logo}
</div>

                <p className="text-base font-semibold text-gray-900">
                  {testimonial.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
