import { useState } from 'react';

export default function MultiStep({ projet }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ projet });

  const next = () => setStep((s) => s + 1);
  const prev = () => setStep((s) => s - 1);

  return (
    <div className="max-w-xl mx-auto">
      <p className="mb-4">Étape {step} sur 4</p>

      {step === 1 && (
        <>
          <input
            type="text"
            placeholder="Nom complet"
            onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
            className="w-full mb-4 p-2 border rounded"
          />
          <input
            type="tel"
            placeholder="Téléphone"
            onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
            className="w-full mb-4 p-2 border rounded"
          />
        </>
      )}

      {step === 2 && (
        <textarea
          placeholder="Détaillez votre projet"
          rows={5}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full mb-4 p-2 border rounded"
        />
      )}

      {step === 3 && (
        <input
          type="date"
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="w-full mb-4 p-2 border rounded"
        />
      )}

      {step === 4 && (
        <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(formData, null, 2)}</pre>
      )}

      <div className="flex justify-between mt-6">
        {step > 1 && (
          <button onClick={prev} className="text-blue-600 underline">
            Précédent
          </button>
        )}
        {step < 4 ? (
          <button
            onClick={next}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Suivant
          </button>
        ) : (
          <button
            onClick={() => console.log('Données envoyées :', formData)}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Envoyer la demande
          </button>
        )}
      </div>
    </div>
  );
}
