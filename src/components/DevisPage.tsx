import { useState } from "react";

export default function DevisPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nom: "",
    tel: "",
    email: "",
    service: "",
    description: "",
  });

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire envoyé : ", formData);
    // TODO: envoyer vers le backend ici
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 text-center">Demande de devis</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <>
              <input
                type="text"
                name="nom"
                placeholder="Votre nom"
                value={formData.nom}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded"
              />
              <input
                type="tel"
                name="tel"
                placeholder="Téléphone"
                value={formData.tel}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded"
              />
            </>
          )}

          {step === 2 && (
            <>
              <input
                type="text"
                name="service"
                placeholder="Type de service (ex: Maçonnerie)"
                value={formData.service}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded"
              />
              <textarea
                name="description"
                placeholder="Décrivez votre projet..."
                value={formData.description}
                onChange={handleChange}
                rows={5}
                className="w-full border px-4 py-2 rounded"
              />
            </>
          )}

          {step === 3 && (
            <div className="text-center space-y-4">
              <h2 className="text-lg font-semibold">Récapitulatif :</h2>
              <ul className="text-sm text-gray-700 space-y-1">
                <li><strong>Nom :</strong> {formData.nom}</li>
                <li><strong>Téléphone :</strong> {formData.tel}</li>
                <li><strong>Email :</strong> {formData.email}</li>
                <li><strong>Service :</strong> {formData.service}</li>
                <li><strong>Description :</strong> {formData.description}</li>
              </ul>
            </div>
          )}

          <div className="flex justify-between pt-4">
            {step > 1 && (
              <button type="button" onClick={handleBack} className="text-gray-500 hover:underline">
                ← Retour
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="ml-auto bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600"
              >
                Suivant →
              </button>
            ) : (
              <button
                type="submit"
                className="ml-auto bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
              >
                Envoyer la demande
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
