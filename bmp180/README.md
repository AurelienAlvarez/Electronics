# http-bmp180

Le but est de lire via une page web température et pression grâce au capteur BMP180 branchée sur une carte Arduino. Concrètement :

## Côté électronique
1. une carte Arduino
2. un capteur BMP180

## Côté serveur
1. un serveur node.js (utilise express et socket.io)
2. la carte Arduino est directement branchée sur l'ordinateur
3. le serveur gère les requêtes http et la communication série avec la carte Arduino.

Quand un client web se connecte au serveur, celui-ci lui renvoie une page web qui
* émet une requête pour avoir de nouvelles données toutes les secondes ;
* le serveur demande de nouvelles données à la carte Arduino et les renvoie au client web ;
* s'il n'y pas de client web présent, aucune requête de température/pression n'a lieu.

![How it looks](Electronics/bmp180/IMG_0454.jpg)
