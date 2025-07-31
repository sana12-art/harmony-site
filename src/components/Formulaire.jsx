import React, { useState } from "react";

const Formulaire = ({ projet, service }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    entreprise: "",
    email: "",
    telephone: "",
    ville: "",
    adresse: "",
    details: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrev = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulaire envoyé avec succès !");
    console.log(formData);
    // Tu peux ensuite envoyer les données à ton backend ici
  };

  return (
    <div className="mt-40 max-w-3xl mx-auto bg-white p-8 shadow-2xl rounded-3xl border border-gray-200">
      <h2 className="text-2xl font-bold text-sky-500 mb-6 text-center">
        Demande de devis : {projet} {service}
      </h2>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Nom</label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Prénom</label>
              <input
                type="text"
                name="prenom"
                value={formData.nom}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Nom de l'entreprise</label>
              <input
                type="text"
                name="entreprise"
                value={formData.entreprise}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Email :</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Téléphone :</label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Ville / Région :</label>
              <input
                type="text"
                name="ville"
                value={formData.ville}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
             <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Détails/Description du projet :</label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

           
          </>
        )}

       

        {step === 3 && (
          <div className="mb-6 space-y-2 text-gray-800">
            <h3 className="text-xl font-semibold mb-3">Récapitulatif :</h3>
            <p><strong>Nom :</strong> {formData.nom}</p>
            <p><strong>Email :</strong> {formData.email}</p>
            <p><strong>Ville :</strong> {formData.ville}</p>
            <p><strong>Téléphone :</strong> {formData.telephone}</p>
            <p><strong>Adresse :</strong> {formData.adresse}</p>
            <p><strong>Détails :</strong> {formData.details}</p>
            <p><strong>Date souhaitée :</strong> {formData.date}</p>
          </div>
        )}

        <div className="flex justify-between mt-8">
          
          
            <button
              type="submit"
              className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-6 rounded-full transition"
            >
              Envoyer
            </button>
        
        </div>
      </form>
    </div>
  );
};

export default Formulaire;
