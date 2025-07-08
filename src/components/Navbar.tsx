import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Accueil', href: '#' },
  { name: 'À propos', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Réalisations', href: '#projects' },
{ name: 'Ils nous font confiance', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDevisModal, setOpenDevisModal] = useState(false); // Nouveau

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-white shadow">
        <nav className="container flex items-center justify-between py-6" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img src="/HARMONY-BATIMENT-logo.webp" alt="Harmony Bâtiment" className="h-16" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button
              onClick={() => setOpenDevisModal(true)}
              className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow transition duration-300"
            >
              Demander un devis
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img src="/HARMONY-BATIMENT-logo.webp" alt="Harmony Bâtiment" className="h-12 w-auto" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setOpenDevisModal(true);
                    }}
                    className="w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
                  >
                    Demander un devis
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      {/* Modale Devis */}
      <Dialog open={openDevisModal} onClose={() => setOpenDevisModal(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <Dialog.Title className="text-xl font-semibold mb-4">Demande de devis</Dialog.Title>
            <form className="space-y-4">
  <input type="text" placeholder="Nom" className="w-full border px-4 py-2 rounded" />
  <input type="tel" placeholder="Téléphone" className="w-full border px-4 py-2 rounded" />
  <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded" />
  <input
    type="number"
    placeholder="Chiffre d'affaires annuel HT (€)"
    className="w-full border px-4 py-2 rounded"
  />
  <textarea placeholder="Votre demande" className="w-full border px-4 py-2 rounded" rows={4} />
  <div className="flex justify-end space-x-2">
    <button
      type="button"
      className="px-4 py-2 bg-gray-300 text-gray-800 rounded"
      onClick={() => setOpenDevisModal(false)}
    >
      Annuler
    </button>
    <button
      type="submit"
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Envoyer
    </button>
  </div>
</form>

          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
