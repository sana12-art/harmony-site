const clientLogos = [
  { logo: "/Cobat.png", name: "Cobat construction" },
  { logo: "/vinci.webp", name: "FWPT VINCI" },
  { logo: "/nexity.png", name: "Nexity" },
  { logo: "/urbaine.png", name: "Urbaine" },
  { logo: "/bjf.png", name: "BJF Construction" },
  { logo: "/lte.jpg", name: "LTE" },
];

export default function Testimonials() {
  return (
    <div id="testimonials" className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ils nous font confiance
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Plusieurs acteurs majeurs du secteur nous confient régulièrement leurs chantiers.
          </p>
        </div>

        {/* Logos défilants (scroll horizontal manuel) */}
        <div
          className="mt-16 flex gap-8 overflow-x-auto scrollbar-hide px-2 scroll-smooth"
          style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
        >
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="min-w-[150px] h-[100px] flex-shrink-0 flex items-center justify-center bg-white rounded-xl shadow p-4"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
