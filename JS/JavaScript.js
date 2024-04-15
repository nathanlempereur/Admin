// Vérifie si l'utilisateur est connecté
function checkAuthentication() {
    // Vérifie si un cookie ou une session indiquant la connexion de l'utilisateur est présent
    // Ici, vous devrez utiliser la méthode appropriée pour vérifier l'état d'authentification de l'utilisateur
    // Par exemple, si vous utilisez des cookies :
    const isAuthenticated = document.cookie.includes("authenticated=true");

    // Si l'utilisateur n'est pas authentifié, redirigez-le vers la page de connexion
    if (!isAuthenticated) {
        window.location.href = "https://nathanlempereur.github.io/Admin/Login"; // Remplacez "Login.html" par le chemin de votre page de connexion
    }
}

// Appeler la fonction de vérification de l'authentification lors du chargement de la page
window.onload = checkAuthentication;




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

