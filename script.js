// Initialize the map
const map = L.map('map').setView([35.1532, 129.1185], 14);

// Add the tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Define walk locations and info
const walks = [
  {
    coords: [35.1532, 129.1185], // Gwangalli Beach
    title: "Gwangalli Beach",
    description: "Perfect during the week in low season but way too crowded on weekends or any day between June and September. Bella loves running in the sand and scaring the pigeons.",
    image: "images/gwangalli.jpg"
  },
  {
    coords: [35.1692, 129.1299], // Centum River Park
    title: "Centum River Park",
    description: "Always really quiet, good place for families and good to stay in the shade on hot days. Good to have pick-nicks as well :)",
    image: "images/centumpark.jpg"
  },
  {
    coords: [35.1585, 129.1606], // Millakdong Breakwater
    title: "Millakdong Breakwater",
    description: "Her favourite. We are mostly alone when we go there. She usually pulls me towards there as soon as we leave the house.",
    image: "images/Bella.jpg"
  },
  {
    coords: [35.1796, 129.2008], // Songjeong Beach
    title: "Songjeong Beach",
    description: "Good for some change of scenery—anywhere with sand and birds is fine for her.",
    image: "images/Sonji.jpg"
  }
];

// Add markers with popup
walks.forEach(walk => {
  const popupContent = `
    <img src="${walk.image}" alt="${walk.title}" />
    <h3>${walk.title}</h3>
    <p>${walk.description}</p>
  `;
  L.marker(walk.coords).addTo(map).bindPopup(popupContent);
});
