// 🌍 Initialisation de la carte et ajout des polygones pour les sites
document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([48.948, 2.168], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const sites = [
        { 
            id: 1, 
            name: "Parc Youri Gagarine", 
            address: "Rue Genevoix", 
            frequency: "Hebdomadaire", 
            coords: [
                [48.948, 2.167],
                [48.9485, 2.1685],
                [48.9475, 2.169],
                [48.947, 2.1675]
            ] 
        },
        { 
            id: 2, 
            name: "Parc Léo Lagrange", 
            address: "Rue Genevoix", 
            frequency: "Bihebdomadaire", 
            coords: [
                [48.949, 2.168],
                [48.9495, 2.1695],
                [48.9485, 2.170],
                [48.948, 2.1685]
            ] 
        },
        { 
            id: 3, 
            name: "Jardin Paul Déroulède", 
            address: "Rue de Déroulède", 
            frequency: "Mensuel", 
            coords: [
                [48.9485, 2.166],
                [48.949, 2.1675],
                [48.9475, 2.168],
                [48.947, 2.1665]
            ] 
        },
        { 
            id: 4, 
            name: "Rond-Point des Combattants", 
            address: "Avenue de la République", 
            frequency: "Quotidien", 
            coords: [
                [48.946, 2.161],
                [48.9465, 2.1625],
                [48.9455, 2.163],
                [48.945, 2.1615]
            ] 
        },
        { 
            id: 5, 
            name: "Square Pierre et Marie Curie", 
            address: "Rue Pierre et Marie Curie", 
            frequency: "Hebdomadaire", 
            coords: [
                [48.9472, 2.167],
                [48.9477, 2.1685],
                [48.9467, 2.169],
                [48.9462, 2.1675]
            ] 
        },
    ];

    sites.forEach(site => {
        L.polygon(site.coords, { color: 'green' }).addTo(map)
            .bindPopup(`${site.name}<br>${site.address}<br>Fréquence: ${site.frequency}`);
    });

    // 🏷️ Remplissage de la table et des cartes avec les données des sites
    const siteTableBody = document.getElementById('site-table-body');
    const siteCardsContainer = document.getElementById('site-cards');

    sites.forEach(site => {
        // Lignes du tableau
        const row = document.createElement('tr');
        row.innerHTML = `
            <th scope="row">${site.id}</th>
            <td>${site.name}</td>
            <td>${site.address}</td>
            <td>${site.frequency}</td>
            <td>
                <a href="https://www.google.com/maps?q=${site.coords[0][0]},${site.coords[0][1]}" target="_blank" class="btn btn-info btn-sm">
                    <i class="fas fa-map-marker-alt"></i> Voir Carte
                </a>
            </td>
        `;
        siteTableBody.appendChild(row);

        // Cartes en grille
        const card = document.createElement('div');
        card.className = 'card border rounded-lg shadow-lg p-4';
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title font-bold">${site.name}</h5>
                <p class="card-text">${site.address}</p>
                <p class="card-text">Fréquence: ${site.frequency}</p>
                <a href="https://www.google.com/maps?q=${site.coords[0][0]},${site.coords[0][1]}" target="_blank" class="btn btn-info btn-sm">
                    <i class="fas fa-map-marker-alt"></i> Voir Carte
                </a>
            </div>
        `;
        siteCardsContainer.appendChild(card);
    });
});
