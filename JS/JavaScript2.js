        // Définition des identifiants et mots de passe
        var credentials = {
            "admin": "C1secret!",
            "lucaster62": "123",
            "user2": "password2"
            // Ajoutez d'autres identifiants et mots de passe au besoin
        };

        function validateForm() {
            // Récupération des valeurs des champs d'identifiant et de mot de passe
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            // Vérification des identifiants
            if (credentials.hasOwnProperty(username) && credentials[username] === password) {
                // Redirection vers la page Home.html
                window.location.href = "Home.html";
                return false; // Empêche l'envoi du formulaire
            } else {
                // Affichage d'un message d'erreur en cas d'identifiants incorrects
                alert("Identifiant ou mot de passe incorrect.");
                return false; // Empêche l'envoi du formulaire
            }
        }
