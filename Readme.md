# 🎬 Application de Recherche de Films

Cette application web simple et responsive permet de rechercher des films et d’afficher leurs informations grâce à l’[API OMDb](https://www.omdbapi.com/). Elle est développée en HTML, CSS et JavaScript (avec Fetch API). C’est un projet idéal pour apprendre à utiliser une API externe et manipuler du contenu dynamique.

## 🔧 Technologies utilisées

- HTML
- CSS
- JavaScript (Fetch API)
- [API OMDb](https://www.omdbapi.com/)

## ✨ Fonctionnalités

- Recherche de films par titre
- Affichage de l’affiche, titre, année, genre, résumé, etc.
- Interface simple et responsive
- Utilisation de Fetch API pour récupérer les données depuis l’API OMDb

## 🧪 Comment ça fonctionne

1. L’utilisateur saisit un titre de film dans la barre de recherche.
2. L’application envoie une requête à l’API OMDb avec ce titre.
3. Les résultats s’affichent dynamiquement sur la même page.

## 🔑 Comment obtenir une clé API OMDb

1. Rendez-vous sur [https://www.omdbapi.com/](https://www.omdbapi.com/)
2. Cliquez sur **API** dans le menu.
3. Descendez et cliquez sur **Generate API Key**.
4. Remplissez le formulaire (nom, email, etc.).
5. Vous recevrez une clé API par mail.

Une fois la clé reçue, ouvrez votre fichier JavaScript (ex : `script.js`) et remplacez la ligne suivante par votre clé :

```javascript
const apiKey = "VOTRE_CLE_API"; // Remplacez par votre clé API
