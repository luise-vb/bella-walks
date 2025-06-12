// Initialize the map centered on Busan, South Korea
const map = L.map('map').setView([35.1595, 129.1604], 13);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
  maxZoom: 18,
}).addTo(map);

// Array of dog walk locations
const locations = [
  {
    name: 'Gwangalli Beach',
    coords: [35.1539, 129.1186],
    description: 'Perfect during the week in low season but way too crowded on weekends or any day between June and September, Bella loves running in the sand and scaring the pigeons.',
    img: 'images/gwangan.jpg',
  },
  {
    name: 'Centum River Park',
    coords: [35.1639, 129.1634],
    description: 'Always really quiet good place for families and good to stay in the shade on hot days. Good to have picnics as well :)',
    img: 'images/centumpark.jpg',
  },
  {
    name: 'Millakdong Breakwater',
    coords: [35.1562, 129.1774],
    description: 'Her favourite. We are mostly alone when we go there. She usually pulls me towards here as soon as we leave the house.',
    img: 'images/bella.jpg',
  },
  {
    name: 'Songjeong Beach',
    coords: [35.1933, 129.1825],
    description: 'Good for some change of scenery, anywhere with sand and birds is fine for her.',
    img: 'images/sonj.jpg',
  },
];

// Add markers and popups for each location
locations.forEach(loc => {
  const marker = L.marker(loc.coords).addTo(map);

  const popupContent = `
    <h3>${loc.name}</h3>
    <img src="${loc.img}" alt="${loc.name}" />
    <p>${loc.description}</p>
  `;

  marker.bindPopup(popupContent);
});
