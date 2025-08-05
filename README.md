# Kasa

Application de location immobilière développée en React.

## Présentation

Kasa est une application web permettant de consulter des logements disponibles partout en France. Ce projet a pour objectif de reproduire l’interface utilisateur à partir de maquettes, en appliquant les bonnes pratiques React (composants réutilisables, gestion des routes, responsive design…).

## Fonctionnalités principales

- Affichage d’une liste de logements sur la page d’accueil
- Fiche détaillée pour chaque logement avec carrousel d’images, description, équipements, etc.
- Page “À propos” présentant les valeurs de l’entreprise sous forme d’accordéons
- Gestion des routes et affichage d’une page 404 personnalisée
- Application responsive et accessible

## Structure du projet

/src
/assets # Images et styles
/components # Composants réutilisables (Card, Gallery, Collapse, etc.)
/pages # Pages principales (Home, Logement, About, Error404)
/data # Données des logements au format JSON
App.js # Configuration des routes
index.js # Point d'entrée de l'application


## Choix techniques

- **React** pour la gestion de l’interface utilisateur
- **React Router** pour la navigation entre les pages
- **Données locales** en JSON pour simplifier le développement (pas d’appel API)
- **Responsive design** pour une compatibilité sur mobile et desktop
- **Accessibilité** prise en compte (navigation au clavier, aria-labels sur les éléments interactifs)


