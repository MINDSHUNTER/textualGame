const prompt = require("prompt-sync")();
let choice = "";

console.log(" 🌟 💰 Bienvenue dans 'La Quête du Trésor Perdu'! 💰 🌟");

console.log("Le Début de la Chasse au Trésor, êtes-vous prêt pour commencer l'aventure ?");
choice = prompt("oui ou non?:  ");

while (choice !== "oui" && choice !== "non") {
    choice = prompt("oui ou non ?");
}

if (choice === "oui") {
    console.log("Vous êtes devant la carte, comptez-vous l'utiliser 🗺  ?");
    choice = prompt("oui ou non?  ");

    while (choice !== "oui" && choice !== "non") {
        choice = prompt("oui ou non ?");
    }

    if (choice === "oui") {
        console.log("Vous décidez de suivre la carte en direction de la vieille forêt dense🌲🌲🚶🚶");
        console.log("Vous découvrez des indices menant à une grotte secrète.🏞️🏞️🏞️🏞️");
        console.log("Comptez-vous accéder à la grotte ? ");
        choice = prompt("oui ou non?  ");

        while (choice !== "oui" && choice !== "non") {
            choice = prompt("oui ou non ? ");
        }

        if (choice === "oui") {
            console.log("Surprise.....! Vous êtes devant les gardiens du Trésor ! 👻👻👻");
            console.log("Décidez-vous de négocier avec les gardiens pour un accès pacifique ou de les affronter ?");
            console.log("Tapez 'oui' pour négocier et 'non' pour un affrontement.");
            choice = prompt("oui ou non ?: ");

            while (choice !== "oui" && choice !== "non") {
                choice = prompt("oui ou non ?  ");
            }

            if (choice === "oui") {
                console.log("Vous êtes tombé dans le piège, les gardiens ne négocient pas. Vous avez perdu ! 😞😞😞");
            } else {
                console.log("Vous triomphez des gardiens. Vous découvrez une chambre secrète contenant des richesses inimaginables.");
                console.log("Choisissez-vous de partager le trésor avec ceux qui en ont besoin ?");
                choice = prompt("oui ou non ? ");

                while (choice !== "oui" && choice !== "non") {
                    choice = prompt("oui ou non ? ");
                }

                if (choice === "oui") {
                    console.log("🎉🎉🎉Félicitations !🎉🎉🎉 \n Votre retour dans le monde réel est accompagné de renommée et de richesses. La légende que vous laissez dépend de vos décisions.💰💰💰");
                } else {
                    console.log("Cela déclenche une malédiction ancienne. La porte de  grotte se referme. Vous avez perdu 😞😞😞!");
                }
            }
        } else {
            console.log("Vous décidez de ne pas accéder à la grotte. L'aventure prend fin.😞😞😞");
        }
    } else {
        console.log("Vous optez pour explorer les plages isolées à la recherche de signes.");
        console.log("Vous êtes perdu sans trouver les moindres signes ! Perdu ! 😞😞😞" );
    }
} else {
    console.log("Rentrez chez vous.  😞😞😞");
}