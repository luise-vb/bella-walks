const locations = [
  {
    name: 'Gwangalli Beach',
    coords: [35.1533, 129.1189],
    img: 'images/gwangan.jpg',
    desc: 'Perfect during the week in low season, but way too crowded on weekends or any day between June and September. Bella loves running in the sand and scaring the pigeons 🐕🕊️'
  },
  {
    name: 'Centum River Park',
    coords: [35.1682, 129.1313],
    img: 'images/centumpark.jpg',
    desc: 'Always really quiet. Good place for families and to stay in the shade on hot days. Great for picnics too 🌳🍉'
  },
  {
    name: 'Millakdong Breakwater',
    coords: [35.1544, 129.1207],
    img: 'images/Bella.jpg',
    desc: 'Her favourite. We’re mostly alone when we go there. She pulls me towards it as soon as we leave the house 🐾❤️'
  },
  {
    name: 'Songjeong Beach',
    coords: [35.1799, 129.2013],
    img: 'images/Sonj.jpg',
    desc: 'Good for a change of scenery — anywhere with sand and birds is fine for her 🐶🏖️'
  }
];

// Initialize map centered on Gwangalli Beach
const map = L.map('map').setView([35.1533, 129.1189], 13);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add markers with popups for each location
locations.forEach(({name, coords, img, desc}) => {
  const marker = L.marker(coords).addTo(map);
  const popupContent = `
    <h3>${name}</h3>
    <img src="${img}" alt="${name}">
    <p>${desc}</p>
  `;
  marker.bindPopup(popupContent);
});
