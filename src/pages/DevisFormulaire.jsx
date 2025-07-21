import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function DevisFormulaire() {
  const [searchParams] = useSearchParams();
  const projet = searchParams.get("projet");
  const type = searchParams.get("type");

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    details: "",
    disponibilite: "",
  });

  function nextStep() {
    setStep((s) => Math.min(s + 1, 5));
  }

  function prevStep() {
    setStep((s) => Math.max(s - 1, 1));
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="container mx-auto px-6 py-20 max-w-lg">
      <h2 className="text-2xl font-bold mb-6">
        Demande de devis - {projet} / {type}
      </h2>

      {step === 1 && (
        <div>
          <h3 className="font-semibold mb-2">Étape 1 : Informations personnelles</h3>
          <input
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Nom complet"
            className="w-full p-2 border mb-4 rounded"
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border mb-4 rounded"
          />

          {/* Champ téléphone avec sélection pays */}
        <PhoneInput
          country={"fr"}
          value={formData.telephone}
          onChange={(phone) => setFormData({ ...formData, telephone: phone })}
        />


          <button
            onClick={nextStep}
            className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600"
          >
            Suivant
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="font-semibold mb-2">Étape 2 : Détails du service souhaité</h3>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            placeholder="Décrivez votre projet..."
            className="w-full p-2 border mb-4 rounded"
            rows={4}
          />
          <button onClick={prevStep} className="mr-2 px-4 py-2 border rounded">
            Précédent
          </button>
          <button onClick={nextStep} className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600">
            Suivant
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="font-semibold mb-2">Étape 3 : Disponibilité</h3>
          <input
            type="date"
            name="disponibilite"
            value={formData.disponibilite}
            onChange={handleChange}
            className="w-full p-2 border mb-4 rounded"
          />
          <button onClick={prevStep} className="mr-2 px-4 py-2 border rounded">
            Précédent
          </button>
          <button onClick={nextStep} className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600">
            Suivant
          </button>
        </div>
      )}

      {step === 4 && (
        <div>
          <h3 className="font-semibold mb-2">Étape 4 : Confirmation</h3>
          <p>Merci de vérifier vos informations :</p>
          <ul className="mb-4 list-disc list-inside">
            <li>Nom : {formData.nom}</li>
            <li>Email : {formData.email}</li>
            <li>Téléphone : {formData.telephone}</li>
            <li>Détails : {formData.details}</li>
            <li>Disponibilité : {formData.disponibilite}</li>
          </ul>
          <button onClick={prevStep} className="mr-2 px-4 py-2 border rounded">
            Précédent
          </button>
          <button
            onClick={nextStep}
            className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600"
          >
            Confirmer
          </button>
        </div>
      )}

      {step === 5 && (
        <div>
          <h3 className="font-semibold mb-2">Étape 5 : Récapitulatif</h3>
          <p>Votre demande de devis a bien été envoyée !</p>
          <p>Nous vous contacterons bientôt.</p>
        </div>
      )}
    </div>
  );
}
