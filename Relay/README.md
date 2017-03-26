# Piloter une lumière avec une page web

Le but est de piloter une lumière alimentée par une prise ordinaire (230 V) via une page web tournant sur un serveur local.

## Étape 1 : piloter une LED branchée sur une carte Arduino via une page web

Concrètement :

### Côté électronique
1. une carte Arduino
2. une LED + une résistance (on peut aussi utiliser la built-in LED de la carte)
3. (optionel) un module bluetooth pour la communication

### Côté serveur
1. un serveur node.js (utilise express et socket.io)
2. le serveur tourne sur un ordinateur (par exemple une Raspberry Pi) à laquelle on connecte la carte Arduino (par cable ou bluetooth)
3. le serveur gère les requêtes http et la communication série avec la carte Arduino.

Quand un client web se connecte au serveur, celui-ci lui renvoie une page web qui
* permet de contrôler la LED ;
* confirme que la LED est allumée ou éteinte.

Le code pour la carte Arduino se trouve dans le dossier "sketch-led". Les codes pour le serveur node.js et la page web se trouvent dans le dossier "control-using-webpage".


## Étape 2 : piloter une lampe via un relais bistable

### Côté électronique
1. un relais bistable
2. deux transistors

Le principe est le même que pour la LED. Le code à mettre dans la carte Arduino se trouve dans le dossier "sketch-relay".
