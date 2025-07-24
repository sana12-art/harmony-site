import { useState } from "react";

export default function MyBusiness() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    typeProjet: "",
    autreProjet: "",
    secteurGeo: "",
    details: "",
    budget: "",
  });

  const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Envoi des données vers backend (ex: /api/mybusiness)
    try {
      const res = await fetch("/api/mybusiness", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          nom: "",
          email: "",
          telephone: "",
          typeProjet: "",
          autreProjet: "",
          secteurGeo: "",
          details: "",
          budget: "",
        });
      } else {
        throw new Error("Erreur serveur");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
<div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-sky-500 mb-6 text-center">
          Votre projet professionnel avec Harmony Bâtiment
        </h1>

        <p className="mb-8 text-center text-gray-700">
          Que vous soyez entrepreneur, promoteur ou gestionnaire de chantier,
          soumettez votre projet et notre équipe vous contactera rapidement.
        </p>

        {status === "success" && (
          <div className="mb-6 p-4 text-green-800 bg-green-100 rounded">
            Merci ! Votre demande a bien été reçue. Nous vous recontactons sous 48h.
          </div>
        )}
        {status === "error" && (
          <div className="mb-6 p-4 text-red-800 bg-red-100 rounded">
            Une erreur est survenue, veuillez réessayer plus tard.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nom */}
          <div>
            <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
              Nom et prénom *
            </label>
            <input
              type="text"
              name="nom"
              id="nom"
              required
              value={formData.nom}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              placeholder="Jean Dupont"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email professionnel *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              placeholder="jean.dupont@exemple.com"
            />
          </div>

          {/* Téléphone */}
          <div>
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
              Téléphone *
            </label>
            <input
              type="tel"
              name="telephone"
              id="telephone"
              required
              value={formData.telephone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              placeholder="+33 6 12 34 56 78"
            />
          </div>

          {/* Type de projet */}
          <div>
            <label htmlFor="typeProjet" className="block text-sm font-medium text-gray-700">
              Type de projet *
            </label>
            <select
              id="typeProjet"
              name="typeProjet"
              required
              value={formData.typeProjet}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            >
              <option value="">-- Choisissez --</option>
              <option value="creation-entreprise">Création d'entreprise</option>
              <option value="sous-traitance">Sous-traitance de chantier</option>
              <option value="collaboration">Collaboration / Partenariat</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          {/* Si Autre, afficher un champ texte */}
          {formData.typeProjet === "autre" && (
            <div>
              <label htmlFor="autreProjet" className="block text-sm font-medium text-gray-700">
                Merci de préciser
              </label>
              <input
                type="text"
                name="autreProjet"
                id="autreProjet"
                value={formData.autreProjet}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                placeholder="Description de votre projet"
              />
            </div>
          )}

          {/* Secteur géographique */}
          <div>
            <label htmlFor="secteurGeo" className="block text-sm font-medium text-gray-700">
              Secteur géographique *
            </label>
            <input
              type="text"
              name="secteurGeo"
              id="secteurGeo"
              required
              value={formData.secteurGeo}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              placeholder="Ex: Paris, Île-de-France"
            />
          </div>

          {/* Détails du projet */}
          <div>
            <label htmlFor="details" className="block text-sm font-medium text-gray-700">
              Détails du projet *
            </label>
            <textarea
              name="details"
              id="details"
              required
              rows="4"
              value={formData.details}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              placeholder="Décrivez votre projet en quelques mots"
            />
          </div>

          {/* Budget (optionnel) */}
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
              Budget estimé (optionnel)
            </label>
            <input
              type="text"
              name="budget"
              id="budget"
              value={formData.budget}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              placeholder="Ex: 50 000 €"
            />
          </div>

          {/* Bouton */}
          <div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-sky-500 text-white py-3 rounded-md hover:bg-sky-600"
            >
              {status === "loading" ? "Envoi..." : "Envoyer ma demande"}
            </button>
          </div>
        </form>

        {/* Section chiffres clés */}
        <div className="mt-12 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-center">Pourquoi choisir Harmony ?</h2>
          <div className="grid grid-cols-2 gap-6 text-center text-gray-700">
            <div>
              <strong className="text-primary text-3xl">250+</strong>
              <p>Projets réalisés</p>
            </div>
            <div>
              <strong className="text-primary text-3xl">50+</strong>
              <p>Entreprises accompagnées</p>
            </div>
            <div>
              <strong className="text-primary text-3xl">10</strong>
              <p>Corps de métiers</p>
            </div>
            <div>
              <strong className="text-primary text-3xl">Île-de-France</strong>
              <p>Zones couvertes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
