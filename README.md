API Node.js avec TypeScript
Description

Cette API utilise Node.js et TypeScript pour exposer une route /ping. Elle retourne les headers de la requête sous forme de JSON. Toute autre route non définie renvoie une erreur 404 avec le message "Route not found".
Prérequis

Avant de commencer, tu dois avoir installé :

    Node.js (version 14 ou supérieure)
    npm (généralement installé avec Node.js)
    TypeScript et ts-node

Installation
1. Cloner le projet

Cloner le repository avec cette commande :

```bash
git clone https://ton-repository.git
```

2. Installer les dépendances

Dans le dossier du projet, installe les dépendances :

```bash
cd ton-dossier
npm install
```

3. Créer un fichier .env (facultatif)

Si tu veux définir un port spécifique, crée un fichier .env et ajoute cette ligne :

```bash
PING_LISTEN_PORT=4000
```

Sinon, le port 3000 est utilisé par défaut.
4. Lancer l'API

Lance le serveur avec ts-node :

```bash
ts-node index.ts
```

Cela démarre le serveur sur le port défini ou sur 3000 par défaut.
Routes
1. /ping (GET)

    Description : Retourne un JSON avec les headers de la requête.
    Réponse exemple :

```json
    {
      "host": "localhost:3000",
      "user-agent": "curl/7.68.0",
      "accept": "*/*"
    }
```

2. Routes inconnues (404)

Toutes les autres routes (comme /xyz) renvoient 404 avec le message :

```bash
Route not found
```

Dépannage

    Si le serveur ne démarre pas, vérifie que tu as bien installé les dépendances avec npm install.
    Si tu reçois une erreur 404, vérifie que tu utilises la bonne URL (par exemple /ping).

C'est tout ! L'API est maintenant prête à être utilisée.