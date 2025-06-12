// script.js

// Initialize the map centered on Gwangalli Beach
const map = L.map('map').setView([35.1533, 129.1189], 13);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);

// Define your dog walk locations
const locations = [
  {
    name: 'Gwangalli Beach',
    coords: [35.1533, 129.1189],
    img: 'images/gwangan.jpg',
    desc: 'Perfect during the week in low season, but crowded on weekends or between June-Sept. Bella loves running in the sand and scaring the pigeons 🐕🕊️',
  },
  {
    name: 'Centum River Park',
    coords: [35.1682, 129.1313],
    img: 'images/centumpark.jpg',
    desc: 'Quiet place for families, shade on hot days, great for picnics 🌳🍉',
  },
  {
    name: 'Millakdong Breakwater',
    coords: [35.1544, 129.1207],
    img: 'images/bella.jpg',
    desc: 'Bella’s favourite spot — we’re mostly alone when we go here 🐾❤️',
  },
  {
    name: 'Songjeong Beach',
    coords: [35.1799, 129.2013],
    img: 'images/sonj.jpg',
    desc: 'Great change of scenery with sand and birds 🐶🏖️',
  },
];

// Add markers with popups and images
locations.forEach(({ name, coords, img, desc }) => {
  const marker = L.marker(coords).addTo(map);
  const popupContent = `
    <h3>${name}</h3>
    <img src="${img}" alt="${name}" />
    <p>${desc}</p>
  `;
  marker.bindPopup(popupContent);
});
