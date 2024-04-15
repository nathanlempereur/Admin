// Fonction pour mettre à jour l'heure
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeString = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
    document.getElementById("clock").innerText = timeString;
    setTimeout(updateClock, 1000); // Mise à jour de l'heure chaque seconde
}

// Fonction pour ajouter un zéro devant les chiffres < 10
function pad(number) {
    return (number < 10 ? '0' : '') + number;
}

// Appel initial de la fonction pour démarrer l'horloge
updateClock();

