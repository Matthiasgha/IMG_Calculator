// Création de la fonction qui permet de calculer l'indice de masse grasse
function Calculerimg() {
    // Déclaration des variables pour récupérer les valeurs saisies par l'utilisateur
    var poids = parseFloat(document.getElementById('poids').value); // Convertir le poids en un nombre décimal
    var taille = parseFloat(document.getElementById('taille').value); // Convertir la taille en un nombre décimal
    var age = parseInt(document.getElementById('age').value); // Convertir l'âge en un nombre entier
    var tailleMetre = taille / 100; // Convertir la taille de centimètres en mètres (utile pour le calcul)
    var ReslutImg, categorie; // Initialisation des variables pour l'IMG calculé et la catégorie correspondante


    // Vérification des valeurs saisies sont inférieur ou égal à 0
    if (isNaN(poids) || poids <= 0 || isNaN(taille) || taille <= 0 || isNaN(age) || age <= 0) {
      alert("Veuillez entrer des valeurs valides pour le poids, la taille et l'âge.");
      return;
  }
    // Vérifier si le sexe sélectionné est "femme"
    if (document.getElementById('femme').checked) {        
        // Calcul de l'IMG pour une femme en utilisant la formule spécifique
        ReslutImg = (1.20 * poids / (tailleMetre * tailleMetre)) + (0.23 * age) - 5.4;
        // Afficher l'IMG calculé dans le champ "img", arrondi à 3 décimales
        document.getElementById("img").value = ReslutImg.toFixed(3);
        // Déterminer la catégorie en fonction de l'âge et de l'IMG pour une femme
        // Classification de l'IMG pour une femme selon l'âge
        // Vérification des tranches d'âge et attribution des catégories en fonction des seuils d'IMG
        //Utilisation de l'opérateur ternaire 
        categorie = (age >= 18 && age <= 24)
            ? (ReslutImg < 19 ? "Insuffisance pondérale" :  // IMG < 19
               ReslutImg <= 24 ? "Poids normal" :            // IMG entre 19 et 24
               ReslutImg <= 29 ? "Surpoids" :               // IMG entre 24 et 29
               ReslutImg <= 39 ? "Obésité" :                // IMG entre 29 et 39
               "Obésité importante")                       // IMG >= 39
            : (age >= 25 && age <= 34)
            ? (ReslutImg < 20 ? "Insuffisance pondérale" :  // Répéter la logique pour d'autres tranches d'âge
               ReslutImg <= 25 ? "Poids normal" :
               ReslutImg <= 30 ? "Surpoids" :
               ReslutImg <= 40 ? "Obésité" : 
               "Obésité importante")
            : (age >= 35 && age <= 44)
            ? (ReslutImg < 21 ? "Insuffisance pondérale" :
               ReslutImg <= 26 ? "Poids normal" :
               ReslutImg <= 31 ? "Surpoids" :
               ReslutImg <= 41 ? "Obésité" : 
               "Obésité importante")
            : (age >= 45 && age <= 54)
            ? (ReslutImg < 22 ? "Insuffisance pondérale" :
               ReslutImg <= 27 ? "Poids normal" :
               ReslutImg <= 32 ? "Surpoids" :
               ReslutImg <= 42 ? "Obésité" : 
               "Obésité importante")
            : (age >= 55 && age <= 64)
            ? (ReslutImg < 23 ? "Insuffisance pondérale" :
               ReslutImg <= 28 ? "Poids normal" :
               ReslutImg <= 33 ? "Surpoids" :
               ReslutImg <= 43 ? "Obésité" : 
               "Obésité importante")
            :(age > 65)
            ? (ReslutImg < 24 ? "Insuffisance pondérale" :
                ReslutImg <= 29 ? "Poids normal" :
                ReslutImg <= 34 ? "Surpoids" :
                ReslutImg <= 43 ? "Obésité" 
                : "Obésité importante")
            : "Âge non pris en charge"; // Si l'âge ne correspond à aucune tranche

    // Vérifier si le sexe sélectionné est "homme"
    } else if (document.getElementById('homme').checked) {        
        // Calcul de l'IMG pour un homme en utilisant la formule spécifique
        ReslutImg = (1.20 * poids / (tailleMetre * tailleMetre)) + (0.23 * age) - (10.83 * 1) - 5.4;
        // Afficher l'IMG calculé dans le champ "img", arrondi à 3 décimales
        document.getElementById("img").value = ReslutImg.toFixed(3);
        // Déterminer la catégorie en fonction de l'âge et de l'IMG pour un homme
        // Classification de l'IMG pour une homme selon l'âge
        // Vérification des tranches d'âge et attribution des catégories en fonction des seuils d'IMG
        //Utilisation de l'opérateur ternaire   
        categorie = (age >= 18 && age <= 24)
        ? (ReslutImg < 20 ? "Insuffisance pondérale" :  // IMG < 20
           ReslutImg <= 25 ? "Poids normal" :            // IMG entre 20 et 25
           ReslutImg <= 30 ? "Surpoids" :               // IMG entre 25 et 30
           ReslutImg <= 40 ? "Obésité" :                // IMG entre 30 et 40
           "Obésité importante")                       // IMG >= 40
        : (age >= 25 && age <= 34)
        ? (ReslutImg < 21 ? "Insuffisance pondérale" : // Répéter la logique pour d'autres tranches d'âge
           ReslutImg <= 26 ? "Poids normal" :
           ReslutImg <= 31 ? "Surpoids" :
           ReslutImg <= 41 ? "Obésité" : 
           "Obésité importante")
        : (age >= 35 && age <= 44)
        ? (ReslutImg < 22 ? "Insuffisance pondérale" :
           ReslutImg <= 27 ? "Poids normal" :
           ReslutImg <= 32 ? "Surpoids" :
           ReslutImg <= 42 ? "Obésité" : 
           "Obésité importante")
        : (age >= 45 && age <= 54)
        ? (ReslutImg < 23 ? "Insuffisance pondérale" :
           ReslutImg <= 28 ? "Poids normal" :
           ReslutImg <= 33 ? "Surpoids" :
           ReslutImg <= 43 ? "Obésité" : 
           "Obésité importante")
        : (age >= 55 && age <= 64)
        ? (ReslutImg < 24 ? "Insuffisance pondérale" :
           ReslutImg <= 29 ? "Poids normal" :
           ReslutImg <= 34 ? "Surpoids" :
           ReslutImg <= 44 ? "Obésité" : 
           "Obésité importante")
           :(age > 65)
           ? (ReslutImg < 25 ? "Insuffisance pondérale" :
            ReslutImg <= 30 ? "Poids normal" :
            ReslutImg <= 35 ? "Surpoids" :
            ReslutImg <= 45 ? "Obésité" 
            : "Obésité importante")
        : "Âge non pris en charge"; // Si l'âge ne correspond à aucune tranche
    }

    // Afficher la catégorie correspondante dans le champ "categorie"
    document.getElementById("categorie").value = categorie;
}
