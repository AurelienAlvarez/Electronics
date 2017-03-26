#Thermomètre connecté

##But de la manoeuvre :
Le but est de connecter une carte Arduino avec un thermomètre DS18B20 avec une alimentation externe et d'envoyer les mesures de température en bluetooth sur un serveur nodejs.

##Matériel pour le device :
* carte Arduino Uno
* thermomètre DS18B20
* module Bluetooth
* alim 5V

##Côté serveur :
* serveur node.js qui lit les données reçues sur le port série
* les données sont enregistrées dans un fichier dédié

###Optionnel :
* le serveur tourne sur un Raspberry Pi connecté à la box internet de la maison, de sorte que les mesures et les données enregistrées soient accessibles de l'extérieur
* rajouter un serveur http pour afficher les données dans une page web spécifique (socket.io si nécessaire)
* implémenter un algorithme de machine learning pour mieux comprendre les variations de température

Pour le capteur DS18B20, très bon tutoriel :

https://www.carnetdumaker.net/articles/mesurer-une-temperature-avec-un-capteur-1-wire-ds18b20-et-une-carte-arduino-genuino/
