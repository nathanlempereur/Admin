		function validateForm() {
			// Récupération des valeurs des champs d'identifiant et de mot de passe
			var username = document.getElementById("username").value;
			var password = document.getElementById("password").value;
		
			// Définition des identifiants et mots de passe autorisés
			var credentials = {
				"admin": "admin",
				"lucaster62": "123",
				// Ajoutez d'autres identifiants et mots de passe au besoin
			};

			// Vérification des identifiants
			if (credentials.hasOwnProperty(username) && credentials[username] === password) {
				// Redirection vers la page Home.html si les identifiants sont valides
				window.location.href = "Home.html";
				return false; // Empêche l'envoi du formulaire
			} else {
				// Affichage d'un message d'erreur en cas d'identifiants incorrects
				alert("Identifiant ou mot de passe incorrect.");
				return false; // Empêche l'envoi du formulaire
			}
		}