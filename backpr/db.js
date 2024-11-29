const mysql = require('mysql2');

// Créer une connexion à la base de données MySQL
const db = mysql.createConnection({
    host: 'localhost',     // L'adresse de ton serveur MySQL
    user: 'root',          // Ton utilisateur MySQL
    password: '',          // Le mot de passe pour l'utilisateur MySQL
    database: 'todolist'   // Le nom de ta base de données
});

// Vérifie si la connexion est réussie
db.connect(err => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err.stack);
        return;
    }
    console.log('Connecté à la base de données MySQL');
});

module.exports = db;  // Exporte la connexion pour l'utiliser ailleurs
