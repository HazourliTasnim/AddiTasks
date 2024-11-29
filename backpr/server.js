const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/tasks'); // Importe les routes des tâches

const app = express();

// Middleware pour parser le JSON
app.use(bodyParser.json());

// Connecter les routes des tâches
app.use('/api/tasks', taskRoutes);

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
    const cors = require('cors');
app.use(cors());
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');  // Importe la connexion à la base de données
const app = express();

// Middleware pour analyser les données JSON dans les requêtes
app.use(bodyParser.json());

// Route pour ajouter une tâche
app.post('/tasks', (req, res) => {
    const { name, category, importance } = req.body;

    // Requête SQL pour insérer une tâche dans la base de données
    const query = 'INSERT INTO tasks (name, category, importance) VALUES (?, ?, ?)';

    db.query(query, [name, category, importance], (err, results) => {
        if (err) {
            console.error('Erreur lors de l\'ajout de la tâche:', err.message);
            return res.status(500).send('Erreur serveur');
        }
        res.status(201).json({ id: results.insertId, name, category, importance });
    });
});

// Lancer le serveur
app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});

});
