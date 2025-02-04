document.addEventListener("DOMContentLoaded", function () {
    console.log("Chargement du menu...");

    let menuContainer = document.getElementById("menu-container");

    if (!menuContainer) {
        console.error("Erreur : Aucun élément avec l'ID 'menu-container' trouvé.");
        return;
    }

    fetch("menu.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP ${response.status} - ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            menuContainer.innerHTML = data;
            console.log("Menu chargé avec succès !");
        })
        .catch(error => console.error("Erreur lors du chargement du menu :", error));
});
