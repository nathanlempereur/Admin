// Définition des identifiants et mots de passe
var credentials = {
    "admin": "0000",
    "louis62": "louloulou",
    // Ajoutez d'autres identifiants et mots de passe au besoin
};

function validateForm() {
    // Récupération des valeurs des champs d'identifiant et de mot de passe
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Vérification des identifiants
    if (credentials.hasOwnProperty(username) && credentials[username] === password) {
        // Redirection vers la page spécifique en fonction de l'identifiant
        if (username === "admin") {
            window.location.href = "Home_Nathan.html";
        } else if (username === "louis62") {
            window.location.href = "Home_Louis.html";
        } else {
            // Redirection générique si nécessaire
            window.location.href = "Home_Default.html";
        }
        return false; // Empêche l'envoi du formulaire
    } else {
        // Affichage d'un message d'erreur en cas d'identifiants incorrects
        alert("Identifiant ou mot de passe incorrect.");
        return false; // Empêche l'envoi du formulaire
    }
}
