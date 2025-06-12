// 1. Initialize the map
const map = L.map('map').setView([35.1536, 129.1187], 14);

// 2. Add map tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// 3. Locations with images and descriptions
const locations = [
  {
    name: 'Gwangan Dog Park',
    coords: [35.155, 129.120],
    img: 'images/gwangan.jpg',
    desc: 'Shady park – perfect for dog walks.'
  },
  {
    name: 'Suyeong River Trail',
    coords: [35.150, 129.122],
    img: 'images/river.jpg',
    desc: 'Beautiful riverside trail 🐕'
  }
];

// 4. Add markers and popups
locations.forEach(loc => {
  const html = `
    <div style="width: 180px;">
      <img src="${loc.img}" style="width: 100%; border-radius: 8px;" />
      <p><strong>${loc.name}</strong><br>${loc.desc}</p>
    </div>
  `;
  L.marker(loc.coords).bindPopup(html).addTo(map);
});
