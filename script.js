// Initialize map centered on Busan
const map = L.map('map').setView([35.153, 129.118], 13);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Array of walk locations
const walks = [
  {
    name: "Gwangalli Beach",
    coords: [35.1532, 129.1185],
    description: "Perfect during the week in low season but way too crowded on weekends or any day between June and September. Bella loves running in the sand and scaring the pigeons.",
    image: "images/gwangalli.jpg"
  },
  {
    name: "Centum River Park",
    coords: [35.1703, 129.1310],
    description: "Always really quiet, good place for families and good to stay in the shade on hot days. Good to have pick-nicks as well :)",
    image: "images/centumpark.jpg"
  },
  {
    name: "Millakdong Breakwater",
    coords: [35.1537, 129.1171],
    description: "Her favourite. We are mostly alone when we go there. She usually pulls me towards there as soon as we leave the house.",
    image: "images/Bella.jpg"
  },
  {
    name: "Songjeong Beach",
    coords: [35.1785, 129.2017],
    description: "Good for some change of scenery, anywhere with sand and birds is fine for her.",
    image: "images/Sonj.jpg"
  }
];

// Add markers and popups
walks.forEach(walk => {
  const popupContent = `
    <img src="${walk.image}" alt="${walk.name}" />
    <h3>${walk.name}</h3>
    <p>${walk.description}</p>
  `;
  L.marker(walk.coords).addTo(map).bindPopup(popupContent);
});
