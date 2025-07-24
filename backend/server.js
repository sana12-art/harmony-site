// backend/server.js
const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route API pour le formulaire MyBusiness
app.post('/api/mybusiness', async (req, res) => {
  const {
    nom,
    email,
    telephone,
    typeProjet,
    autreProjet,
    secteurGeo,
    details,
    budget
  } = req.body;

  try {
    // Enregistrement en base MySQL
    const sql = `
      INSERT INTO mybusiness 
      (nom, email, telephone, typeProjet, autreProjet, secteurGeo, details, budget) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await db.execute(sql, [
      nom,
      email,
      telephone,
      typeProjet,
      autreProjet,
      secteurGeo,
      details,
      budget
    ]);

    // Envoi d’un e-mail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sananajjah4@gmail.com",         // <-- remplace par ton email
        pass: "motdepasseApplicatif"        // <-- mot de passe d'application
      }
    });

    const message = `
      Nouvelle demande de création d'entreprise :
      • Nom : ${nom}
      • Email : ${email}
      • Téléphone : ${telephone}
      • Projet : ${typeProjet}${typeProjet === "autre" ? " (" + autreProjet + ")" : ""}
      • Secteur : ${secteurGeo}
      • Détails : ${details}
      • Budget : ${budget}
    `;

    await transporter.sendMail({
      from: '"Site Harmony" <sananajjah4@gmail.com>',
      to: "sananajjah4@gmail.com",
      subject: "Nouvelle demande MyBusiness",
      text: message
    });

    res.status(200).json({ message: 'Demande envoyée et enregistrée avec succès.' });

  } catch (error) {
    console.error('Erreur serveur :', error);
    res.status(500).json({ message: "Erreur lors du traitement." });
  }
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
