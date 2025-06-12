// Initialize the map
const map = L.map('map').setView([35.1532, 129.1185], 13); // Busan center

// Add tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

// Walk locations
const walks = [
  {
    coords: [35.1532, 129.1185], // Gwangalli Beach
    title: "Gwangalli Beach",
    description: "Perfect during the week in low season but way too crowded on weekends or any day between June and September. Bella loves running in the sand and scaring the pigeons.",
    image: "images/gwangalli.jpg"
  },
  {
    coords: [35.171200, 129.127200], // Centum River Park
    title: "Centum River Park",
    description: "Always really quiet. Good place for families and to stay in the shade on hot days. Good for picnics too :)",
    image: "images/centumpark.jpg"
  },
  {
    coords: [35.163617, 129.120662], // Millakdong Breakwater
    title: "Millakdong Breakwater",
    description: "Her favourite. We are mostly alone when we go there. She usually pulls me towards there as soon as we leave the house.",
    image: "images/Bella.jpg"
  },
  {
    coords: [35.18046, 129.20335], // Songjeong Beach
    title: "Songjeong Beach",
    description: "Good for some change of scenery. Anywhere with sand and birds is fine for her!",
    image: "images/Sonj.jpg"
  }
];

// Add markers with popups
walks.forEach(walk => {
  const popupContent = `
    <h3>${walk.title}</h3>
    <img src="${walk.image}" alt="${walk.title}" />
    <p>${walk.description}</p>
  `;
  L.marker(walk.coords).addTo(map).bindPopup(popupContent);
});
